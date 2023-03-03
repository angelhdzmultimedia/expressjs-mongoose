import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";
import { join, resolve } from 'node:path'

const app = express();
const port = process.env.PORT || 3333;

app.use(express.static(resolve(join(process.cwd(), 'public'))))
app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));


app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//