const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
//const path = require("path");
//const fetch   = require('node-fetch')

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

try {
	mongoose.connect(process.env.MONGO_DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}


/*app.get('/test', function (req, res) {
	
	const url = 'https://dilaamf.opendatasoft.com/api/records/1.0/search/?dataset=societes-cac40&q=&facet=cac40&facet=name_cac40&facet=first_letter&refine.name_cac40=BNP+PARIBAS' 
	
	fetch(url)
		.then(res => res.json())
		.then(data => {
			res.send({ data })
		})
		.catch(err => {
			res.send(err)
		})
})*/


app.use(routes)

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})