const fetch = require('fetch').fetchUrl
const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000
let myheaders
let opt_get
let token
let acs_token
let next

app.get('/', async(req, res) =>{
	res.redirect('https://api.intra.42.fr/oauth/authorize?client_id=' + process.env. CLIENT_ID + '&redirect_uri=http%3A%2F%2F' + process.env.IP + '%3A3000%2Findex&response_type=code')
})

app.get('/index?*', async(req, res) =>{
	console.log("hola");
	let index = req.url.indexOf("?")
	acs_token = req.url.substring(index + 6, req.url.length)
	console.log('First access_code ->' + acs_token)
	let options
	fetch("http://" + process.env.IP + ":3000/app/token", options, async (error, meta, body)=>{
		const data = await JSON.parse(body.toString())
		token = data.access_token
		console.log("New token-> " + token)
		console.log(data)
	})
	res.sendFile(__dirname + '/public/index.html')
	app.use(express.static('public'))
})

app.get('/app/token', async(req, res) =>{
	const data = 'grant_type=authorization_code&code=' + acs_token + '&redirect_uri=http://' + process.env.IP + ':3000/index&client_id=' + process.env.CLIENT_ID + '&client_secret=' + process.env.CLIENT_SECRET
	const options = {
		method:'POST',
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		payload:data
	}
	const response = fetch(process.env.URL, options, async (error, meta, body)=>{
		const data = JSON.parse(body)
		token = await data.access_token
		myheaders =  {"Authorization": "Bearer " + token};
		opt_get = {
		method: 'GET',
		headers: myheaders,
		mode: 'cors',
		cache: 'default'
		}
		return await res.json(data)
	})
})

app.listen(port, () =>{
	console.log(`Server listening at http://${process.env.IP}:${port}`)
})
