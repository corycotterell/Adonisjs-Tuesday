'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CountriesSchema extends Schema {
  up () {
    this.create('countries', (table) => {
      table.increments()
      table.string("country")
      table.string("capital")
      table.integer("population")
      table.timestamps()
    })
  }

  down () {
    this.drop('countries')
  }
}

module.exports = CountriesSchema
