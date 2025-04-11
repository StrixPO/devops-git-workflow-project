import express from "express";
import axios from "axios";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Secure Header Checker is running!");
});

app.get("/check", async (req, res) => {
  const { url } = req.query;

  if (!url) return res.status(400).send("Missing ?url parameter");

  try {
    const response = await axios.get(url);
    const headers = response.headers;

    const securityHeaders = [
      "strict-transport-security",
      "x-content-type-options",
      "x-frame-options",
      "content-security-policy",
      "referrer-policy",
    ];

    const result = {};

    securityHeaders.forEach((header) => {
      result[header] = headers[header] || chalk.red("❌ Missing");
    });

    console.log(chalk.green(`\nSecurity Headers for ${url}`));
    for (let [key, val] of Object.entries(result)) {
      console.log(`${chalk.yellow(key)}: ${val}`);
    }

    res.json(result);
  } catch (err) {
    console.error(chalk.red("Failed to fetch headers: "), err.message);
    res.status(500).send("Could not fetch URL.");
  }
});

app.listen(PORT, () => {
  console.log(chalk.blue(`Server running at http://localhost:${PORT}`));
});
