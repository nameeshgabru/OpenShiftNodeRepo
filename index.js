const serve = require('serve')
const server = serve(__dirname+'/build', {
    port: 1337,
    ignore: ['node_modules']
})