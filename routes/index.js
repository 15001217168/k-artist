module.exports = function(router) {
    router.get('/', async(ctx, next) => {
        await ctx.render('index', {
            title: 'Hello Koa 2!'
        });
    });
};