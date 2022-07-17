const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const app = express()
const PORT = 3001


let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const getIdRandom = () => Math.floor(Math.random() * 1000000) 

app.use(express.json());
app.use(cors());

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
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.end('Phonebook has info for ' + persons.length + ' people')
    new Date().toISOString()
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


app.post('/api/persons', (request, response) => {
    const body = request.body

    console.log(body)
    if (!body) {
        return response.status(400).json({
            error: `Person's info missing`
        })
    }

    if(!body.name || !body.number) {
        return response.status(400).json({
            error: `Name or number missing`
        })
    }

    if(persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: `Name already exists`
        })
    }

    const person = {...body, id: getIdRandom()}
    persons = persons.concat(person)
    response.json(person)
})

//DELETE

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


const unknownMethod = (request, response) => {
    response.status(404).send({ error: 'Method Not Available' })
  }
  
  app.use(unknownMethod)