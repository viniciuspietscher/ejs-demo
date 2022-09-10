require("dotenv").config()
require("colors")
const express = require("express")
const session = require("express-session")
const app = express()
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 8080
const taskRouter = require("./routes/tasks")
const setMessage = require("./middleware/message")

// set the view engine to ejs
app.set("view engine", "ejs")

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)
app.use(express.urlencoded({ extended: false }))
app.use("/tasks", setMessage, taskRouter)

// use res.render to load up an ejs view file

app.get("/", (req, res) => {
  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ]
  const tagline =
    "No programming concept us complete without a cure animal mascot."
  res.render("pages/index", {
    mascots: mascots,
    tagline: tagline,
  })
})

app.get("/about", (req, res) => {
  res.render("pages/about")
})

const start = async () => {
  try {
    const conn = await connectDB(process.env.MONGO_URI)
    console.log(`MongoDB: ${conn.connection.host}`.green.underline)
    await app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
