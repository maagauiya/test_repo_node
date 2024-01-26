const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = require("./db");
const express = require('express')
const app = express()
connectToMongo();


const appPort = process.env.PORT || 7000;

app.listen(appPort, () => {
    console.log(`server started ${appPort}`)
})


app.use(express.json())  

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to bdonuts"})
})

app.use("/api/v1/orders", require("./routes/order"));