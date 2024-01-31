import express from "express";
import { personRouter } from "./routes/PersonRouter.js";
const app = express();
const port = 3010;


app.use(express.json());
app.use(personRouter);

app.listen(port, () => {
    console.log("Server funcionando");
});