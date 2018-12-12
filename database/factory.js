'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Country', async (faker,  i, data) => {
  console.log(data)
  return {
    country: data.country,
    capital: data.capital,
    population: data.population,
    continent_id:data.continent_id
  }

})

Factory.blueprint('App/Models/Test', async (faker,  i, data) => {
  // console.log(data)
  return {
    test: faker.word()
  }

})

Factory.blueprint('App/Models/Continent', async (faker,  i, data) => {
  // console.log(data)
  return {
    name: data.name
  }

})
