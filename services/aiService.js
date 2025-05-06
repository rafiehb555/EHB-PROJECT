const axios = require("axios");

exports.analyzeComplaint = async (text) => {
  try {
    const prompt = `A user has submitted a complaint: "${text}".
What category does this complaint belong to? Choose one of: Delivery, Product, Behavior, Fraud, Other.
Also suggest a tag for this complaint like: Urgent, General, Follow-up needed, Info Only.

Return result as JSON like:
{ "category": "Delivery", "tag": "Urgent" }`;

    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const textResponse = res.data.choices[0].message.content.trim();
    console.log("🧠 AI raw response:", textResponse); // 🧠 Add this line

    // Try to safely parse JSON
    const result = JSON.parse(textResponse);
    return result;
  } catch (err) {
    console.error("❌ OpenAI error:", err.message);
    return { category: "Uncategorized", tag: "Unknown" };
  }
};
