import commentRouter from './comment';
import movieRouter from './movie';

const apiPrefix = '/api/v1';

const routes = [ commentRouter, movieRouter ];

export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};
