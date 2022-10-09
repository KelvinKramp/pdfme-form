const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const fs = require('fs');
const path = require('path');

// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})
app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home page")
})

app.post("/post_name", async (req, res) => {
	let { name } = req.body
	console.log(name)
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})


/**
 * Get absolute path of a file using `path.resolve`
 */
const filePath = path.resolve('./../Form_A.jpeg');
console.log('File path ::', filePath);

/**
 * Create a new file & write data to it, using
 * `fs.writeFileSynce`
 */
fs.writeFileSync(filePath, 'I am a HUMAN, Machine!');


/**
 * Delete a file if it exists using `fs.unlinkSync`
 */
// fs.unlinkSync(filePath);

/**
 * Get information (meta data) about a file if it exits otherwise, elegantly
 * exit & console a message that the file does not exist.
 */
try {
  const information = fs.statSync('./foo.txt');
  console.log('Information of file is ::', information);
} catch (error) {
  console.log('File does not exist :(');
}

/**
 * @description Function that returns `bool` if a file path exists or not.
 * @param {String} file
 * @returns {Boolean}
 */
function doesFileExit (file) {
  try {
    fs.statSync(file);
    return true
  } catch (error) {
    return false;
  }
}

console.log(doesFileExit(filePath) ? 'Success' : 'We are dooomed');