'use strict'

/*
|--------------------------------------------------------------------------
| CountrySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

// class UserSeeder {
//   async run () {
//     const users = await Database.table('users')
//     console.log(users)
//   }

class CountrySeeder {
  async run () {
    await Factory.model('App/Models/Country').create({country:"Lithuania",capital:"Vilnius",population:12,continent_id:2})
    await Factory.model('App/Models/Country').create({country:"Egypt",capital:"Cairo",population:199,continent_id:4})
    const countries = await Database.table('countries')
    //console.log(countries)
  }
}

module.exports = CountrySeeder
