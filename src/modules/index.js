import commentRouter from './comment';

const apiPrefix = '/api/v1';

const routes = [ commentRouter ];

export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};
