const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	markdown: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Article', articleSchema)