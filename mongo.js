const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

console.log(process)

const url = `mongodb+srv://alejoend:<${password}>@cluster0.psyo9.mongodb.net/?retryWrites=true&w=majority`

const getIdRandom = () => Math.floor(Math.random() * 1000000)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: Number,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3) {
    Person.find({}).then(res => {
        console.log("phonebook:")
        res.forEach(p => {
            console.log(`${p.name} ${p.number}`)
        })
        mongoose.connection.close()
    })

} else {
    const name = process.argv[3]
    const number = process.argv[4]

    const person = new Person({

        "id": getIdRandom(),
        "name": name,
        "number": number

    })

    person.save().then(result => {
        console.log(`Added ${name} ${number} to phonebook`)
        mongoose.connection.close()
    })
}