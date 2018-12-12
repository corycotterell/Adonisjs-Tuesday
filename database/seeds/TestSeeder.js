'use strict'

/*
|--------------------------------------------------------------------------
| TestSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TestSeeder {
  async run () {
    await Factory.model('App/Models/Test').createMany(3)

    await Database.table('tests')
  }
}

module.exports = TestSeeder
