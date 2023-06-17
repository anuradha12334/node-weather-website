const request = require('request')

const geocode = (address, callback) => {

    const url = "http://api.mapbox.com/geocoding/v5/mapbox.places/" + address +".json?access_token=pk.eyJ1IjoiYW5kcmV3bWhZDEiLCJhIjoiY2pv0G8ybW90MDFhazNxcnJ40TYydzJl0SJ9,njY7HvaalLEVhE0IghPTlq]w&limit=1"
    request( { url , json : true},(error , {body}) => {
        if(error){
            callback('Unable to connect to location service', undefined)
        }
        else{
            callback(undefined ,{
                  latititude :body.features[0].center[1],
                  longitude :body.features[0].center[0],
                  location :body.features[0].place_name
                })
            }
    })
}
module.exports = geocode