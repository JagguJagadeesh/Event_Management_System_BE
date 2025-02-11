import express  from "express";
import connectDB from "./db";
import authRouter from "./routes/authRouter";
import router from "./routes/allRoutes";



import dotenv from 'dotenv'
dotenv.config();


const app = express();
const port = process.env.PORT;
app.use(express.json())
import cors from 'cors'
const corsOrigin = process.env.HOST_ORIGIN || `http://localhost:3000`;
app.use(cors({origin: corsOrigin,}))


// Routes
app.use('/api/auth',authRouter)
app.use('/api/events',router)

connectDB()
.then(()=>{
    console.log("Connected to DataBase....")
    app.listen(port,()=>{
        console.log(`Serving at http://localhost:${port}`);
    })
})
.catch((e)=>{
    console.log("Error at Server Starting : ",e)
})
