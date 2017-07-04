import queueChannel from '../queue';

const q = 'tasks';

export default async (ctx, next) => {
    const requestBody = ctx.request.body;
    const text = requestBody.text || 'empty name';

    const ch = await queueChannel;
    await ch.assertQueue(q);
    const res = ch.sendToQueue(q, new Buffer(text));

    ctx.body = {'foo': res};
    await next;
};