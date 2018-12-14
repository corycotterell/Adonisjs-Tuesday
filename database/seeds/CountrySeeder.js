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
    await Factory.model('App/Models/Country').create({country:"Canada",capital:"ottawa",population:12,continent_id:1})
    await Factory.model('App/Models/Country').create({country:"United States",capital:"DC",population:325700000,continent_id:1})
    await Factory.model('App/Models/Country').create({country:"Mehico",capital:"Mehico City",population:12,continent_id:1})
    await Factory.model('App/Models/Country').create({country:"Argentina",capital:"Buenos Aires",population:12,continent_id:3})
    await Factory.model('App/Models/Country').create({country:"Brazil",capital:"Brasilia",population:12,continent_id:3})
    await Factory.model('App/Models/Country').create({country:"Peru",capital:"Lima",population:12,continent_id:3})
    await Factory.model('App/Models/Country').create({country:"Lithuania",capital:"Vilnius",population:12,continent_id:2})
    await Factory.model('App/Models/Country').create({country:"Croatia",capital:"Zagreb",population:12,continent_id:2})
    await Factory.model('App/Models/Country').create({country:"Poland",capital:"Warsaw",population:12,continent_id:2})
    await Factory.model('App/Models/Country').create({country:"Kenya",capital:"Nairobi",population:12,continent_id:4})
    await Factory.model('App/Models/Country').create({country:"Liberia",capital:"Monrovia",population:12,continent_id:4})
    await Factory.model('App/Models/Country').create({country:"South Africa",capital:"Praetoria",population:12,continent_id:4})
    await Factory.model('App/Models/Country').create({country:"Indonesia",capital:"Jakarta",population:199,continent_id:5})
    await Factory.model('App/Models/Country').create({country:"Pakistan",capital:"Islamabad",population:325700000,continent_id:5})
    await Factory.model('App/Models/Country').create({country:"Israel",capital:"Jerusalem",population:325700000,continent_id:5})
    await Factory.model('App/Models/Country').create({country:"Australia",capital:"Canberra",population:325700000,continent_id:6})
    await Factory.model('App/Models/Country').create({country:"New Zealand",capital:"Wellington",population:325700000,continent_id:6})
    await Factory.model('App/Models/Country').create({country:"Tanzmania",capital:"Hobart",population:325700000,continent_id:6})
    await Factory.model('App/Models/Country').create({country:"Antartica",capital:"South Pole bitches",population:325700000,continent_id:7})
    const countries = await Database.table('countries')
    //console.log(countries)
  }
}

module.exports = CountrySeeder
