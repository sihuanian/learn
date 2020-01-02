/* const app = new (require('koa'))();
const router = require('koa-router')();
const request = require('request');

router.get('/', async function(ctx, next) {
    await new Promise(function(resolve, reject) {
        var req = request({
            method: 'GET',
            encoding: null,
            uri: 'https://www.baidu.com/img/baidu_jgylogo3.gif'
        }, function(err, response, body) {
            if (err) {
                return reject(err);
            }
            resolve(body);
        });
    }).then((body) => {
        ctx.status = 200;
        ctx.type = 'gif';
        console.log(Buffer.isBuffer(body));
        ctx.length = Buffer.byteLength(body);
        ctx.body = body;
    }).catch((err) => {
        console.error(err);
    });
});

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001)
 */
const app = new (require('koa'))();
const Router = require('koa-router');
const fs = require('fs');
const { promisify } = require('util');

const router = new Router();

router.get('/home', async ctx => {
    const readFile = promisify(fs.readFile);
    await readFile(__dirname + '/images/1.jpg')
        .then(data => {
            ctx.type = 'image/jpeg';
            ctx.body = data;
        })
        .catch(error => {
            console.log(error.message);
        })
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);