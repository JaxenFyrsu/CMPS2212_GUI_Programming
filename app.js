import express from "express";

const app = express();

// Route for home page
// Headers automatically set and written
app.get("/", (req, res) => {
  res.send("Home page\n");
});

// Route for about page
// Headers automatically set and written
app.get("/about", (req, res) => {
  res.send("What do you want to know?\n");
});

// Catch-all route for 404 errors. Our first taste of middleware
app.use((req, res) => {
  res.status(404).send("404 Not Found.\n");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
