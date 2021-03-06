'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', "WorldcapitalController.displayCapital")

Route.get('/:id', "WorldcapitalController.getById")

Route.post('/', 'WorldcapitalController.addCapital')

Route.delete('/:id', 'WorldcapitalController.deleteCapital')

Route.put('/:id' , 'WorldcapitalController.updateCapital')



Route.get('/country/continent/:id',"WorldcapitalController.displayCountriesofContinents")

// Make api route in id of continent and get back all the countries that are attached