const User = require("../model/userModel");
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(`Sign in Successfull with username:${username} and password:${password}`);

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    let message;
    if (user.type === "credit") {
      message = "true";
    } else if (user.type === "debit") {
      message = "false";
    } else {
      return res.status(404).json({ message: "User type not found" });
    }
    return res.status(200).json({ message, user });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = login;
