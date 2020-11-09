const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const shortId = require('shortid')
const app = express()
const cors = require('cors')
const path = require("path");


mongoose.connect('mongodb+srv://testapp:shujja@cluster0.lzutz.mongodb.net/Url-Shortener?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
})

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "build")));




app.get('/all', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.send(shortUrls)
})

app.post('/shortUrls', async (req, res) => {

  try {
    console.log(req.body)
    const {sourceId, sub, full} = req.body
    const short = shortId.generate() +`?source=${sourceId}?sub=${sub}` 
  
    const newUrl = new ShortUrl({ 
      full: full,
      short: short
    })

    await newUrl.save()

    res.send(newUrl)
  } catch (error) {
    res.send(error)
  }
  

})

app.get('/:shortUrl', async (req, res) => {
  const sUrl = req.params.shortUrl
  const short = `${sUrl}?source=${req.query.source}`
  console.log(short)
  const shortUrl = await ShortUrl.findOne({ short: short })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});


app.listen(process.env.PORT || 5000, () =>{
  console.log('Listening on 5000')
});