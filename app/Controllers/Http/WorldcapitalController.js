'use strict'
const Country = use('App/Models/Country')



// let capitals = [{country:"United States", capital:"Washington D.C.", population:693972},{country: "Botswana", capital: "Gaborone", population:231592}]
class WorldcapitalController {

  async displayCapital({ request, response }) {
     let country = await Country.all()
     response.json({
      data:country
    })
  }
  async getById({request,response,params:{id}}) {
    let idFinder = await Country.find(id)
    //console.log(idFinder)
    response.json({
      data: idFinder
    })

  }

  async addCapital({ request, response }) {
    //const capital = request.post()
    const {country,capital, population} = request.post()
    // capitals.push(capital)
    // response.send(capitals)
    const countryEntry = await Country.create({capital, country, population})
    // console.log(x)
    // country = capital
    // = 'some-password'

    // country.save(capital)
    response.json({
      data:countryEntry
    })
  }

  async deleteCapital({ request, response, params:{id} }) {
    // const body = request.post()
    // capitals = capitals.filter((element) => {
    //   console.log(element.country === body.country)
    //   return element.country !== body.country
    // })
    // console.log(capitals)
    // response.send("country deleted")
    var deleteById = await Country.find(id)
    await deleteById.delete()
    response.json({
      Hey: "Ahoy Cory!"
    })

  }
  async updateCapital({request,response,params}){
    const {id} = params
    const capitalFinder = await Country.find(id)
    const {country,capital, population} = request.post()
    capitalFinder.country = country
    capitalFinder.capital = capital
    capitalFinder.population = population
    await capitalFinder.save()
    response.json({
      message:"Shit was updated",
      data:capitalFinder
    })
  }



}

module.exports = WorldcapitalController
