const serve = require('serve')
const server = serve(__dirname+'/build', {
    port: 8080,
    ignore: ['node_modules']
})