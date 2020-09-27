import { Router } from 'express';

import CustomerController from './app/controllers/CustomerController';
import RecordsController from './app/controllers/RecordsController';
import HourController from './app/controllers/HourController';
import ReportCalculator from './app/services/ReportCalculator';

const routes = new Router();

// Customers Management
routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.findById);

routes.post('/customers', CustomerController.create);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.delete);

// Registers Management
routes.get('/customers/:customerId/records', RecordsController.index);
routes.post('/customers/:customerId/records', RecordsController.create);
routes.put('/customers/:customerId/records/:id', RecordsController.update);
routes.delete('/customers/:customerId/records/:id', RecordsController.delete);

// Reports Management
routes.get('/reports', ReportCalculator.general);
routes.get('/customers/:id/reports', ReportCalculator.single);

// Hours Management
routes.get('/sunhours/:year', HourController.index);
routes.post('/sunhours', HourController.create);
routes.put('/sunhours/:id', HourController.update);
routes.delete('/sunhours/:id', HourController.delete);

export default routes;
