const express = require("express")
const app = express()

// First API
app.get("/", (req, res) => {
  res.send("Hello, World!")
})

// Second API
app.get("/api/goodbye", (req, res) => {
  res.send("Goodbye, World!")
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})
