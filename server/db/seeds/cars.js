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
      manufacturer: 'Lancia',
      model: 'Delta HF Integrale',
      year: '1991',
      cost: '84,000',
      imageUrl:
        'https://images.pistonheads.com/nimg/44880/DeltaIntegrale_01.jpg',
    },

    {
      id: 2,
      manufacturer: 'Jaguar',
      model: 'E-Type',
      year: '1961 Restomodded',
      cost: '280,000',
      imageUrl:
        'https://images.cdn.circlesix.co/image/2/900/600/5/uploads/posts/2018/08/95117addd363c3f3863bb2c27d961154.jpg',
    },

    {
      id: 3,
      manufacturer: 'Singer Porsche',
      model: 'Reimagined 911',
      year: '2022',
      cost: '1.8 Million',
      imageUrl:
        'https://www.cnet.com/a/img/resize/e9c3766c27c3ba4b79861f4117470a78c0bd95f9/hub/2022/02/09/4996c656-43b1-40d1-a3f5-7eccb40e9030/singer-turbo-study-porsche-930-911-111.jpg?auto=webp&fit=crop&height=675&width=1200',
    },

    {
      id: 4,
      manufacturer: 'Shelby',
      model: 'Cobra',
      year: 1966,
      cost: '1.050 Million',
      imageUrl:
        'https://classic-recreations.com/wp-content/uploads/2021/04/CR_11172020_DallasShoot_0147.jpg',
    },

    {
      id: 5,
      manufacturer: 'Lamborghini',
      model: 'Miura SVJ',
      year: '1966',
      cost: '3.6 Million',
      imageUrl:
        'https://robbreport.com/wp-content/uploads/2021/07/Lamborghini_Miura_SVJ10.jpg?w=1000',
    },
    {
      id: 6,
      manufacturer: 'Ferrari',
      model: '250 GTO',
      year: '1962',
      cost: '70 Million',
      imageUrl:
        'https://www.topgear.com/sites/default/files/images/news-article/2018/06/ae1ebbcd490b01631946781b52d27cee/2.jpg',
    },
    {
      id: 7,
      manufacturer: 'Ford',
      model: 'Mustang FastBack',
      year: '1965',
      cost: '50,453',
      imageUrl:
        'https://p1.liveauctioneers.com/1395/273959/143729639_1_x.jpg?quality=70&version=1672502030',
    },
    {
      id: 8,
      manufacturer: 'Chevrolet',
      model: 'Corvette',
      year: '1958',
      cost: '116,500',
      imageUrl:
        'https://cdn1.mecum.com/auctions/ca0816/ca0816-244347/images/ca0816-244347_1@2x.jpg?1468097466000',
    },
    {
      id: 9,
      manufacturer: 'Aston Martin',
      model: 'DB6',
      year: '1966',
      cost: '361,921',
      imageUrl:
        'https://classicmotorhub.com/wp-content/uploads/1969-Aston-Martin-DB6-HKR-391D-1.jpg',
    },
    {
      id: 10,
      manufacturer: 'BMW',
      model: 'M6',
      year: '1988',
      cost: '67,251',
      imageUrl:
        'https://www.classicdriver.com/sites/default/files/cars_images/feed_580865/orig_5315.jpg',
    },
  ])
}
