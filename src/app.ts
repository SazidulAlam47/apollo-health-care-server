import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRoutes);

app.get("/", (req, res) => {
    res.send({ message: "Hello from Apollo Health Care!" });
});

export default app;
