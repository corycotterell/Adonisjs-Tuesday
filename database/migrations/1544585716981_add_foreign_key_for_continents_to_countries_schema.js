'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddForeignKeyForContinentsToCountriesSchema extends Schema {
  up () {
    this.table('countries', (table) => {
      table.integer('continent_id').unsigned().references('id').inTable('continents')
      // alter table
    })
  }

  down () {
    this.table('countries', (table) => {
      // reverse alternations
      this.dropColumn('continent_id')
    })
  }
}

module.exports = AddForeignKeyForContinentsToCountriesSchema
