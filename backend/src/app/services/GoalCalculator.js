import GoalsRepository from '../repositories/GoalsRepository';

class GoalCalculator {
  async calculate(id, kWp, hours) {
    const goals = {
      customer_id: id,
      year: hours.year,
      jan: parseFloat((0.8 * kWp * hours.jan * 31).toFixed(2)),
      fev: parseFloat((0.8 * kWp * hours.fev * 29).toFixed(2)),
      mar: parseFloat((0.8 * kWp * hours.mar * 31).toFixed(2)),
      abr: parseFloat((0.8 * kWp * hours.abr * 31).toFixed(2)),
      mai: parseFloat((0.8 * kWp * hours.mai * 31).toFixed(2)),
      jun: parseFloat((0.8 * kWp * hours.jun * 30).toFixed(2)),
      jul: parseFloat((0.8 * kWp * hours.jul * 31).toFixed(2)),
      ago: parseFloat((0.8 * kWp * hours.ago * 31).toFixed(2)),
      set: parseFloat((0.8 * kWp * hours.set * 30).toFixed(2)),
      out: parseFloat((0.8 * kWp * hours.out * 31).toFixed(2)),
      nov: parseFloat((0.8 * kWp * hours.nov * 30).toFixed(2)),
      dez: parseFloat((0.8 * kWp * hours.dez * 31).toFixed(2)),
    };

    await GoalsRepository.store(goals);

    return goals;
  }
}

export default new GoalCalculator();
