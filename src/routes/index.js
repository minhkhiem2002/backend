const JokesRoute = require('./JokesRoute')
const routes = (app) => {
    app.use('/',JokesRoute)
    // app.use('/api/category', UserRouter)
    // app.use('/api/product', ProductRouter)
}

module.exports = routes;