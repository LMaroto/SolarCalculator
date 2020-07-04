import connection from '../../database';

class GoalsRepository {
  async store(goals) {
    await connection('goals').insert(goals);
  }
}

export default new GoalsRepository();
