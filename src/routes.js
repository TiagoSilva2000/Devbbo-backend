const Express = require('express');
const UserController = require('./controllers/UserController');
const RepoController = require('./controllers/RepoController');
const ItemController = require('./controllers/ItemController');
const ItemConfigsController = require('./controllers/ItemConfigsController');
const routes = Express();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.post('/users/:id/repos', RepoController.store);
routes.get('/users/:id/repos', RepoController.index);
routes.get('/users/:id/repos/:repoId', RepoController.show);
routes.put('/users/:id/repos/:repoId', RepoController.update);
routes.delete('/users/:id/repos/:repoId', RepoController.destroy);

routes.post('/users/:id/items', ItemController.store);
routes.get('/users/:id/items', ItemController.index);
routes.get('/users/:id/items/:itemId', ItemController.show);
routes.put('/users/:id/items/:itemId', ItemController.update);
routes.delete('/users/:id/items/:itemId', ItemController.destroy);

routes.post('/users/:id/:relId/configs', ItemConfigsController.store);
routes.get('/users/:id/:relId/configs', ItemConfigsController.show);
routes.put('/users/:id/:relId/configs', ItemConfigsController.update);


module.exports = routes;