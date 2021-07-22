const appRouter = require('./app/homepage/home');

function route(app) {
    app.use("/", appRouter);
}

module.exports = route;