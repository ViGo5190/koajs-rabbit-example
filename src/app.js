import config from 'config';
import Koa from 'koa';
import bodyParser from'koa-bodyparser';
import Router from 'koa-better-router';

import logger from './logger';
import queueEndpoint from './api/queue';

const router = Router().loadMethods();

const appPort = config.get('app.port') || 3000;

logger.log('debug', 'port', appPort);

const app = new Koa();
app.use(bodyParser());

app.on('error', (err, ctx) =>
    logger.log('error', 'server error', err)
);

router.get('/', (ctx, next) => {
    ctx.body = `Hello world! Prefix: ${ctx.route.prefix}`;
    return next()
});

// can use generator middlewares
router.get('/foobar', function *(next) {
    this.body = `Foo Bar Baz! ${this.route.prefix}`;
    yield next
});

let api = Router({prefix: '/api'});

api.get('/some', function *(next) {
    this.body = `Some in api! ${this.route.prefix}`;
    yield next
});

api.post('/queue', queueEndpoint);

api.extend(router);

app.use(router.middleware());
app.use(api.middleware());

app.listen(appPort);