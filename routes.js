const appRouter = function (app) {
  app.get('/', function (req, res) {
    console.log('/');
    res.status(200);
    res.end();
  });
};

module.exports = appRouter;
