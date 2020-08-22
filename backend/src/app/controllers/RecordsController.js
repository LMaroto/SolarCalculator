import RecordsRepository from "../repositories/RecordsRepository";

class RecordsController {
  async index(req, res) {
    const { customerId } = req.params;
    const records = await RecordsRepository.index(customerId);

    return res.json(records);
  }

  async create(req, res) {
    const { customerId } = req.params;

    const record = await RecordsRepository.store(customerId, req.body);

    return res.status(201).json(record);
  }

  async update(req, res) {
    const { customerId, id } = req.params;
    const record = await RecordsRepository.update(id, customerId, req.body);

    return res.json(record);
  }

  async delete(req, res) {
    const { customerId, id } = req.params;

    await RecordsRepository.delete(id, customerId);

    return res.json("Registro excluido com sucesso!");
  }
}

export default new RecordsController();
