/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    {
      id: 1,
      manufacturer: 'Mercedes',
      model: 'C63 AMG',
      year: '2013',
      cost: '75,990',
      imageUrl:
        'https://www.automobilesreview.com/img/2013-mercedes-benz-c-63-amg-edition-507/2013-mercedes-benz-c-63-amg-edition-507-01.jpg',
    },

    {
      id: 2,
      manufacturer: 'Audi',
      model: 'RS6 Wagon',
      year: '2020',
      cost: '153,000',
      imageUrl:
        'https://www.motortrend.com/uploads/sites/5/2019/08/2020-Audi-RS-6-Avant-front-three-quarter.jpg',
    },

    {
      id: 3,
      manufacturer: 'Volkswagen',
      model: 'Scirocco R',
      year: '2017',
      cost: '32,890',
      imageUrl:
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/volkswagen-scirocco-r.jpg',
    },

    {
      id: 4,
      manufacturer: 'Volvo',
      model: 'V90 Cross Country',
      year: '2023',
      cost: '58,450',
      imageUrl:
        'https://www.slashgear.com/img/gallery/2021-volvo-v90-cross-country-review-compelling-confidence/l-intro-1648487691.jpg',
    },
  ])
}
