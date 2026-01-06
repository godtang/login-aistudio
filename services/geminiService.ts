
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getRpaAssistance = async (prompt: string) => {
  if (!API_KEY) return "AI services are currently unavailable. Please provide an API key.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert RPA (Robotic Process Automation) tutor specializing in UiBot. Help the user learn automation concepts, solve command errors, and provide guidance on building bots. Keep responses professional, encouraging, and structured.",
      },
    });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An error occurred while communicating with the AI. Please try again later.";
  }
};
