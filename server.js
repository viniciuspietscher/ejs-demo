const express = require("express")
const app = express()

// set the view engine to ejs
app.set("view engine", "ejs")

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

app.listen(8080)
console.log("Server listening on port 8080")
