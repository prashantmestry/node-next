import User from "../models/userModel.js";

// get all user list.
const getUsers = async (req, res) => {
  try {
    const userList = await User.find();
    res.setHeader("X-UserName", "Prashant Mestry");
    return res.status(200).json({
      message: "success",
      total: userList.length,
      data: userList,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// create new user.
const createUser = async (req, res) => {
  const body = req.body;
  if (!body || !body.name || !body.email) {
    return res.status(400).json({ msg: "Fields not found" });
  }
  //
  let { street, city, state, zip, country } = body.address;
  const result = await User.create({
    name: body.name,
    email: body.email,
    role: body.role || "customer",
    address: {
      street: street,
      city: city,
      state: state,
      zip: zip,
      country: country,
    },
  });
  if (result) {
    return res.status(200).json({ msg: "success", data: result });
  } else {
    return res.status(500).json({ msg: "Error", data: null });
  }
};

export default { getUsers, createUser };

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
