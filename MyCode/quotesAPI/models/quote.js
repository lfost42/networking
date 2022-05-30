const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	quote: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Subscriber', subscriberSchema)