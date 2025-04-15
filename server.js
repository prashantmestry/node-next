import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
// import bodyParser from "body-parser";

// import { User } from "./users.model.js";

const app = express();

app.use(express.json());
app.use(cors());

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

try {
  connectDB();
  console.log("mongo db is connected!");
} catch (err) {
  console.error(err);
  process.exit();
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});

// Routes listing

import userRouter from "./routes/userRoutes.js";

app.use("/api/users", userRouter);

// Global middleware

// const getLogs = (req, res, next) => {
//   console.log(`Logger ${req.method} ${req.url}`);
//   next();
// };

// app.use(getLogs);

// app.get("/user", (req, res) => {
//   res.json({
//     message: "found user",
//   });
//   //   res.send("user list");
// });

// app.post("/user", getLogs, (req, res) => {
//   // console.log(req.body);
//   // throw new Error("Some error");
//   res.json({
//     data: req.body.name,
//   });
// });

// new user list

// app.get("/users", async (req, res) => {
//   const userList = await User.find({});
//   res.setHeader("X-UserName", "Prashant Mestry");
//   return res.status(200).json({
//     message: "success",
//     data: userList,
//   });
//   //   res.send("user list");
// });

// app.post("/users", urlencodedParser, async (req, res) => {
//   const body = req.body;
//   if (!body || !body.name || !body.email) {
//     return res.status(400).json({ msg: "Fields not found" });
//   }
//   //
//   let { street, city, state, zip, country } = body.address;
//   const result = await User.create({
//     name: body.name,
//     email: body.email,
//     role: body.role || "customer",
//     address: {
//       street: street,
//       city: city,
//       state: state,
//       zip: zip,
//       country: country,
//     },
//   });
//   if (result) {
//     return res.status(200).json({ msg: "success", data: result });
//   } else {
//     return res.status(500).json({ msg: "Error", data: null });
//   }
// });

// const myError = (err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({
//     message: "Global error",
//   });
// };

// app.use(myError);
