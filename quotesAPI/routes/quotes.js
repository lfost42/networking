const express = require('express')
const router = express.Router()
const Quote = require('../models/quote')

// Getting all
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find()
    res.json(quotes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getQuote, (req, res) => {
  res.json(res.quote)
})

// Creating one
router.post('/', async (req, res) => {
	const quote = new Quote({
	  name: req.body.name,
	  quote: req.body.quote
	})
	try {
	  const newQuote = await quote.save()
	  res.status(201).json(newQuote)
	} catch (err) {
	  res.status(400).json({ message: err.message })
	}
  })

// Updating One
router.patch('/:id', getQuote, async (req, res) => {
	if(req.body.name != null) {
		res.quote.name = req.body.name
	}
	if(req.body.quote != null) {
		res.quote.quote = req.body.quote
	}
	try {
		const updatedQuote = await res.quote.save()
		res.json(updatedQuote)
	} catch(err) {
		res.status(400).json({ message: err.message })
	}
})

// Deleting One
router.delete('/:id', getQuote, async (req, res) => {
	try {
		await res.quote.remove()
		res.json({ message: 'Deleted quote'})
	} catch(err) {
		res.status(500).json({ message: err.message })
	}
})

async function getQuote(req, res, next) {
  let quote
  try {
    quote = await Quote.findById(req.params.id)
    if (quote == null) {
      return res.status(404).json({ message: 'Cannot find quote' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.quote = quote
  next()
}

module.exports = router