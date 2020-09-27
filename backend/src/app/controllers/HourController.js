import HourRepository from '../repositories/HourRepository';

class HourController {
  async index(req, res) {
    const { year } = req.params;

    const hours = await HourRepository.list(year);

    return res.json(hours);
  }

  async create(req, res) {
    const hours = await HourRepository.store(req.body);

    return res.json(hours);
  }

  async update(req, res) {
    const { id } = req.params;

    const hours = await HourRepository.update(id, req.body);

    return res.json(hours);
  }

  async delete(req, res) {
    const { id } = req.params;

    await HourRepository.delete(id);

    return res.json('Relação de horas deletadas com sucesso!');
  }
}

export default new HourController();
