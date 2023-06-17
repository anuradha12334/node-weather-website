const path = require('path') 
const express = require('express')
const hbs = require('hbs')
const code = require('./utils/forecast')

const app = express()

//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engines and view location
app.set('view engine' ,'hbs')
app.set('views' , viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('' , (req,res) => {
    res.render('index' , {
        title: 'Weather',
        name:' Anuradha '
    })
})
app.get('/help' , (req,res) => {
    res.render('help' , {
        title: 'Help',
        name:' Abhishek ',
        msg: 'everything you need to know',
    })
})
app.get('/about' , (req,res) => {
    res.render('about' , {
        title: 'About',
        name:' Andrew'
    })
})

app.get('/weather',(req,res) => {
    if(!req.query.latitude){
        return res.send({
            error: "You must provide the address"
        })
    }
        code(req.query.latitude, req.query.longitude , (error, forecastData = {}) => {
        if(error)
        {
            return res.send({error})
        }
                res.send({
                    forecast: forecastData
                })
        })
})

app.get('/products',(req,res) => {
   if(!req.query.search){
    return res.send({
        error:"You must provide search field"
    })
   }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*' , (req,res) => {
    res.render('404' , {
        title: 'Help article not found',
        name:' Abhishek ',
        msg: 'everything you need to know',
    })
})

app.get('*',(req,res) => {
    res.render('404', {
        title: '404 Page not found',
        name:' Andrew'
    })
})
app.listen(3000, () => {
    console.log('Server is Up')
})