const Data = require("../model/dummyData");
const getData = async (req, res) => {
  try {
    const getData = await Data.find();
    res.status(200).json(getData);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).json({ "Internal server error: ": error });
  }
};
module.exports = getData;
