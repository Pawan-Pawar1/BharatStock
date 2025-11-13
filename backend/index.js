require("dotenv").config();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const express=require("express");
const axios = require("axios")
const app=express();


const {HoldingModel}=require("./model/HoldingModel");
const {PositionModel}=require("./model/PositionModel")
const {OrderModel}=require("./model/OrderModel")
const UserModel=require("./model/UserModel");

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT=process.env.PORT||3002;
const url=process.env.MONGO_URL;

 
const API_KEY=process.env.API_KEY;
app.use(
  cors({
    origin: [
      "https://bharatstock-frontend.netlify.app",
      "https://bharatstock-dashboard.netlify.app",
      "http://localhost:5173",                      
      "http://localhost:3000"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());



app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingModel.find({});
    res.json(allHoldings);
})
app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
  try {
    const order = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await order.save();
    res.send("Order saved successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving order");
  }
});

app.post("/newOrderSell", async (req, res) => {
  let data=req.body;
  try {
    const order = new OrderModel({
      name: data.name,
      qty: data.qty,
      price:data.price,
      mode: data.mode,
    });
    console.log("name",data.name);
    await order.save();
    res.send("Sell order saved successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving sell order");
  }
});

app.get("/getOrder",async(req,res)=>{
  let allOrders=await OrderModel.find({}); 
  res.json(allOrders);
  console.log(allOrders);
})


app.use("/", authRoute);

app.get("/api/companies", async (req, res) => {
  try {
     
    const url = `https://api.twelvedata.com/stocks?country=India&apikey=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

app.get("/api/price/:symbol", async (req, res) => {
  try {
    const symbol  = req.params.symbol;
    const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`;
    const response = await axios.get(url);
        const price = parseFloat(response.data.price)|| (Math.random() * 1000).toFixed(2) ;

        res.json({ symbol, price });
          // console.log(symbol, price);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch price" });
  }
});

app.get("/cleanup", async (req, res) => {
  await UserModel.deleteMany({});
  res.send("All users deleted ✅");
});

app.listen(PORT,()=>{
    console.log("app started");
    mongoose.connect(url);
    console.log("db connected");
})