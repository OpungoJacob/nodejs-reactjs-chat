const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios explicitly

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username, secret: username, first_name: username },
      { headers: { "private-key": "b1411cc9-a3a8-4df8-9773-94585fa1a464" } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      console.error(e); // Log the error for debugging
      return res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.listen(3001);