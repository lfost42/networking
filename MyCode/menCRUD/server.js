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
		app.get('/', (req, res) => {
			res.sendFile(__dirname + '/index.html')
			db.collection('quotes').find().toArray()
				.then(quotes => {
					res.render('index.ejs', { quotes: quotes })
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
		app.listen(3000, function () {
			console.log('listening on 3000')
		})
	})
	.catch(error => console.error(error))
