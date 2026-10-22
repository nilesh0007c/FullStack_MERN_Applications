import "dotenv/config";

const getOpenAIAPIResponse = async(message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
       

        // 🚨 HANDLE OPENAI ERRORS FIRST
        if (data.error) {
        console.error("OpenAI Error:", data.error.message);
        return "⚠️ OpenAI quota exceeded. Please try again later.";
        }

        // ✅ OLD FORMAT
        if (data.choices?.[0]?.message?.content) {
        return data.choices[0].message.content;
        }

        // ✅ NEW FORMAT
        if (data.output?.[0]?.content?.[0]?.text) {
        return data.output[0].content[0].text;
        }

        console.error("Unexpected OpenAI response:", data);
        return "⚠️ Unexpected AI response.";

  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "⚠️ AI service unavailable.";
  }
};
export default getOpenAIAPIResponse;