const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const connectionString = 'mongodb+srv://100Devs:0c4VL7Dtd1lzvyfV@cluster0.1b9fkgx.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to Database')
		const db = client.db('star-wars')
		const quotesCollection = db.collection('quotes')

		app.set('view engine', 'ejs')
		app.use(bodyParser.urlencoded({ extended: true }))
		app.use(bodyParser.json())
		app.use(express.static('public'))
		app.get('/', (req, res) => {
			quotesCollection.find().toArray()
				.then(results => {
					res.render('index.ejs', { quotes: results })
				})
				.catch(error => console.error(error))
		})
		app.post('/quotes', (req, res) => {
			quotesCollection.insertOne(req.body)
				.then(result => {
					res.redirect('/')
				})
				.catch(error => console.error(error))
		})
		app.put('/quotes', (req, res) => {
			quotesCollection.findOneAndUpdate(
				{ name: 'Yoda' },
				{
					$set: {
						name: req.body.name,
						quote: req.body.quote
					}
				},
				{
					upsert: true
				}
			)
				.then(result => res.json('Success'))
				.catch(error => console.error(error))
		})

		app.delete('/quotes', (req, res) => {
			quotesCollection.deleteOne(
				{ name: req.body.name }
			)
				.then(result => {
					if (result.deletedCount === 0) {
						return res.json('No quote to delete')
					}
					res.json('Deleted Darth Vader\'s quote')
				})
				.catch(error => console.error(error))
		})

		app.listen(3000, function () {
			console.log('listening on 3000')
		})
	})
	.catch(error => console.error(error))
