const { default: mongoose } = require("mongoose");
const app = require("./app");
require("dotenv").config();

mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`database connection is successfully `);
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
