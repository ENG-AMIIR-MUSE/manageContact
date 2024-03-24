import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import { userModel } from "./models/user-model.js";
dotenv.config();
const app = express();
app.use(express.json());
// connect to the database
mongoose
  .connect("mongodb://localhost:27017/ManageContacts")
  .then(() => {
    console.log("Database  connected successfully ...");
  })
  .catch((er) => {
    console.log(er);
  });

// insertion api
app.post("/api/create-user", async (req, res) => {
  console.log("started");
  const { username, email, phone, address } = req.body; //  user waxa uu soo galiye
  try {
    const isUserExists = await userModel.findOne({
      $or: [
        { email: email.toLowerCase() },
        { username: username.toLowerCase() },
      ],
    });
    if (isUserExists) return res.status(200).json("User Is Already Exists");
    console.log("steal continue");
    const newUser = new userModel({
      username,
      email,
      phone,
      address,
    });
    // save the data to the db
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});
app.put("/update-user/:id", async (req, res) => {
  console.log("user updated function executed");
  const { username, email, phone, address } = req.body; //  user waxa uu soo galiye
  const userId = req.params.id;
  console.log(userId);
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      { _id: userId },
      {
        username,
        email,
        phone,
        address,
      }
    );
    console.log(updateUser);
    // save the data to the db
    if (!updateUser)
      return res.status(200).json("User is not updated successsfuly");
    return res.status(200).json("User Is updated Successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
});
app.delete("/delete-user/:id", async (req, res) => {
  //  user waxa uu soo galiye
  const userId = req.params.id;
  console.log(userId);
  try {
    const deleteUser = await userModel.findByIdAndDelete({ _id: userId });
    console.log(deleteUser);
    // save the data to the db
    if (!deleteUser)
      return res.status(200).json("User is not Deleted successsfuly");
    return res.status(200).json("User Is Deleted Successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const findUsers = await userModel.find();
    if (!findUsers) return res.status(404).json("user not found");

    return res.status(200).json(findUsers);
  } catch (error) {
    return res.status(200).json(error);
  }
});

const port = 5000;
//
// resp api  > post : sending data to server  , get : getting data from server , put : Updating data to the server  , delete : deleting data from the server

app.get("/", (req, res) => {
  res.json("Welcome you tested your frist api ");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
