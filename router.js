const router = require('koa-router')();


require('./routes/index')(router);

module.exports = router;