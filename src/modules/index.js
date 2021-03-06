import commentRouter from './comment';
import movieRouter from './movie';
import characterRouter from './character';

const apiPrefix = '/api/v1';

const routes = [ commentRouter, movieRouter, characterRouter ];

export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};
