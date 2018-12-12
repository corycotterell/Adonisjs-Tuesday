'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContinentSchema extends Schema {
  up () {
    this.create('continents', (table) => {
      table.increments()
      table.string("name")
      table.timestamps()
    })
  }

  down () {
    this.drop('continents')
  }
}

module.exports = ContinentSchema
