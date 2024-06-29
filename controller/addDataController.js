const Data = require("../model/dummyData");
const addData = async (req, res) => {
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
module.exports = addData;
