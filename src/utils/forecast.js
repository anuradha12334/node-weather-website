const request = require('request')

const code = (latitude,longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=f92f1b0e390f52a4bd8df5db835c0c39&query=" + latitude+ ',' +longitude +"&units=f"
    request( {url , json : true},(error , {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error)
        {
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined ,
                    'The current temperature is ' + body.current.temperature +' and weather is ' + body.current.weather_descriptions[0])
        }
    })
    }


module.exports = code