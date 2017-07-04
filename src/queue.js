import config from 'config';
import amqplib from 'amqplib';

const queueUrl = config.get('queue.url');

const open = amqplib.connect(queueUrl);

const queueChannel = open.then((conn) => {
    return conn.createChannel();
});

// example . just for show that everything is ok

const q = 'tasks';
queueChannel
    .then(function (ch) {
        return ch.assertQueue(q).then(function (ok) {
            return ch.consume(q, function (msg) {
                if (msg !== null) {
                    console.log(msg.content.toString());
                    ch.ack(msg);
                }
            });
        });
    }).catch(console.warn);

// example.end

export default queueChannel;