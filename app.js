if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");


const app = express();



const mongo_url = "mongodb://127.0.0.1:27017/ShareFund";
main()
  .then(() => console.log("Connection to DB Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}



app.get("/",(req,res)=>{
    console.log("I am Root")
})

app.listen(3000, () => {
  console.log("Server is running and accessible locally");
});