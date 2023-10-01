const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB_URL = process.env.DATABASE_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection successful.");
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});
