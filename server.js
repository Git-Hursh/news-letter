const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;
const apiKey = "4e5ba7a52e2944b1bff3f09876fd47ee";
const newsApiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-07-17&to=2024-07-17&sortBy=popularity&apiKey=${apiKey}`;

app.use(cors());

app.get("/news", async (req, res) => {
  try {
    console.log("API request received");
    const response = await axios.get(newsApiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news data", error);
    res.status(500).json({ message: "Error fetching news data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
