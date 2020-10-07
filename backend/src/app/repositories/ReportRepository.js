import connection from '../../database';
import dateOrdinate from '../utils/DateOrdinate';

const months = {
  jan: '01',
  fev: '02',
  mar: '03',
  abr: '04',
  mai: '05',
  jun: '06',
  jul: '07',
  ago: '08',
  set: '09',
  out: '10',
  nov: '11',
  dez: '12',
};

class ReportRepository {
  async searchGoal(id, month, year) {
    const goal = await connection('goals')
      .where({
        customer_id: id,
        year,
      })
      .select(month);

    return goal[0][month];
  }

  async searchRecords(id, { month_start, year_start, month_end, year_end }) {
    const records = await connection('records')
      .whereRaw(
        `
        to_date(concat(year, '/', (
          CASE month
            WHEN 'jan' then '01'
            when 'fev' then '02'
            when 'mar' then '03'
            when 'abr' then '04'
            when 'mai' then '05'
            when 'jun' then '06'
            when 'jul' then '07'
            when 'ago' then '08'
            when 'set' then '09'
            when 'out' then '10'
            when 'nov' then '11'
            when 'dez' then '12'
          end
        ), '/', '01'
      ), 'YYYY-MM-DD') BETWEEN '${year_start}-${months[month_start]}-01' AND '${year_end}-${months[month_end]}-01'
      `
      )
      .andWhere({ customer_id: id })
      .orderBy([
        { column: 'year', order: 'asc' },
        { column: 'month', order: 'asc' },
      ])
      .select('*');

    records.sort(dateOrdinate);

    return records;
  }

  async searchGoals({ userId, interval }) {
    const goals = await connection('goals')
      .where({ customer_id: userId, year: interval[0] })
      .orWhere({ customer_id: userId, year: interval[1] })
      .select('*');

    const mapping = {};

    interval.forEach((year) => {
      const goal = goals.find((g) => g.year === year);

      if (goal) {
        const {
          jan,
          fev,
          mar,
          abr,
          mai,
          jun,
          jul,
          ago,
          set,
          out,
          nov,
          dez,
        } = goal;

        mapping[year] = {
          jan,
          fev,
          mar,
          abr,
          mai,
          jun,
          jul,
          ago,
          set,
          out,
          nov,
          dez,
        };
      }
    });

    return mapping;
  }

  async getGoals(year) {
    const goals = await connection('goals')
      .where({
        year,
      })
      .select('*');

    return goals;
  }

  async getRecords(month, year) {
    const records = await connection('records')
      .where({
        month,
        year,
      })
      .select('customer_id', 'power', 'observation');

    return records;
  }
}

export default new ReportRepository();
