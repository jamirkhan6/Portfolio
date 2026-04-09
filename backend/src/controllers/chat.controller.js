const { handleChat } = require("../services/ai.service")


const chatController = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) return res.status(400).json({ error: "Message is required" });

    const result = await handleChat(message);

    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "controller : Server error" });
  }
};


module.exports = {chatController}
