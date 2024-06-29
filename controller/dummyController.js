const Data = require("../model/dummyData");

exports.addData = async (req, res) => {
  try {
    const { name, amount } = req.body;
    // add new data
    const newData = new Data({ name, amount });
    //save to db
    await newData.save();
    res.status(200).json(newData);
  } catch (err) {
    console.log(err);
  }
};

exports.getData = async (req, res) => {
  try {
    const getData = await Data.find();
    res.status(200).json(getData);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).json({ "Internal server error: ": error });
  }
};

exports.creditData = async (req, res) => {
  try {
    const { name, amount } = req.body;

    // Check if amount is a number
    if (isNaN(amount)) {
      return res.status(400).json("Invalid amount");
    }

    console.log(`name:${name}, balance:${amount}`);

    const user = await Data.findOne({ name });

    if (!user) {
      return res.status(400).json("User not found");
    }

    // Increment the amount
    user.amount += Number(amount);

    // Save the updated user
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).json({ "Internal server error": error.message });
  }
};

exports.debitData = async (req, res) => {
  try {
    const { name, amount } = req.body;

    // Check if amount is a number
    if (isNaN(amount)) {
      return res.status(400).json("Invalid amount");
    }

    console.log(`name:${name}, balance:${amount}`);

    const user = await Data.findOne({ name });

    if (!user) {
      return res.status(400).json("User not found");
    }

    // Increment the amount
    user.amount -= Number(amount);
    if (user.amount < 0) {
      return res.status(400).json({ message: "Insufficient balance" });
    }
    // Save the updated user
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).json({ "Internal server error": error.message });
  }
};
