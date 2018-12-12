'use strict'

/*
|--------------------------------------------------------------------------
| ContinentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ContinentSeeder {
  async run () {
    await Factory.model('App/Models/Continent').create({name:"North America"})
    await Factory.model('App/Models/Continent').create({name:"Europe"})
    await Factory.model('App/Models/Continent').create({name:"South America"})
    await Factory.model('App/Models/Continent').create({name:"Africa"})
    await Factory.model('App/Models/Continent').create({name:"Asia"})
    await Factory.model('App/Models/Continent').create({name:"Oceania"})
    await Factory.model('App/Models/Continent').create({name:"Antartica"})
    const countries = await Database.table('continents')
  }
}

module.exports = ContinentSeeder
