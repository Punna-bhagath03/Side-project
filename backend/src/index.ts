import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import bodyPraser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { auth } from "../lib/auth"
import { toNodeHandler } from "better-auth/node"


dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan("comman"))
app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({ extended: false }));

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))


app.all("api/auth/*", toNodeHandler(auth) )



app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000")
})  

export default app
