import CustomerRepository from '../repositories/CustomerRepository';
import HourRepository from '../repositories/HourRepository';
import GoalCalculator from '../services/GoalCalculator';

class CustomerController {
  async index(req, res) {
    const customers = await CustomerRepository.index();
    return res.json(customers);
  }

  async create(req, res) {
    const customer = await CustomerRepository.store(req.body);

    const hours = await HourRepository.list(new Date().getFullYear());

    await GoalCalculator.calculate(customer.id, customer.kWp, hours);

    return res.json(customer);
  }

  async update(req, res) {
    const { id } = req.params;
    const customer = await CustomerRepository.update(id, req.body);

    return res.json(customer);
  }

  async delete(req, res) {
    const { id } = req.params;

    await CustomerRepository.delete(id);

    return res.json('Cliente excluido com sucesso!');
  }
}
export default new CustomerController();
