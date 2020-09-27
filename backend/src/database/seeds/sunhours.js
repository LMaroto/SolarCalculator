exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sunhours')
    .del()
    .then(() =>
      knex('sunhours').insert([
        {
          id: 1,
          year: 2020,
          jan: 5.44,
          fev: 5.29,
          mar: 5.14,
          abr: 4.91,
          mai: 4.45,
          jun: 4.42,
          jul: 4.57,
          ago: 5.43,
          set: 5.13,
          out: 5.28,
          nov: 5.53,
          dez: 5.65,
          city: 'Cuiabá',
          uf: 'MT',
        },
      ])
    );
};
