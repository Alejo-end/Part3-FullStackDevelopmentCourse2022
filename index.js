const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const app = express()
const Person = require("./models/person")
require('dotenv').config()
const PORT = process.env.PORT || 3001

const getIdRandom = () => Math.floor(Math.random() * 1000000)

app.use(express.json());
app.use(cors());
app.use(express.static("build"))

app.use(
    morgan(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens.method(req) === "POST" ? JSON.stringify(req.body) : ""
        ].join(' ')
    })
)

//GET

app.get('/', (request, response) => {
    response.end(JSON.stringify(persons))
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(p => {
        console.log(p)
        res.json(p)
    })
})

app.get('/info', (request, response) => {
    response.end('Phonebook has info for ' + persons.length + ' people')
    response.write(Date())
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    }
    response.status(404).end()
})

//POST

app.post('/api/persons', (request, response, next) => {
    const content = request.body


    const newPerson = new Person({
        name: content.name,
        number: content.number,
        id: getIdRandom()
    })

    newPerson.save().then(person => {
        response.json(person)
    })
    .catch(error => next(error))

})

//DELETE

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(req.params.id).then(p => {
        res.status(204).end()
    })
    .catch(error => next(error))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


const unknownMethod = (request, response) => {
    response.status(404).send({ error: 'Method Not Available' })
}

app.use(unknownMethod)

const errorHandler = (error, request, response, next) => {
    switch(error.name){
        case "CastError": return res.status(400).send({error: "unknown id"})
        case "ValidationError": return res.status(400).json({error: error.message})
    }

}

app.use(errorHandler)