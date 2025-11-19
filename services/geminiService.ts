import { GoogleGenAI } from "@google/genai";

// Initialize the client. 
// NOTE: In a real production app, you would proxy this through a backend to hide the key.
// For this portfolio demo running client-side, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const chatWithPortfolioAI = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    const systemInstruction = `
      You are an AI assistant for a Senior Full Stack Developer's portfolio website. 
      Your name is "DevBot".
      Your goal is to answer questions about the developer based on typical portfolio content.
      
      Here is the developer's profile:
      - Role: Senior Full Stack React Engineer
      - Tech Stack: React, TypeScript, Node.js, Tailwind CSS, Gemini API, PostgreSQL.
      - Experience: 8+ years building scalable web apps.
      - Key Projects: Nebula Dashboard (Analytics), Echo Chat AI (LLM wrapper), Vortex Commerce.
      - Personality: Professional, witty, and technically precise.
      
      Keep answers concise (under 100 words) unless asked for code or detailed explanation.
      If asked about contact info, suggest using the contact form on the site.
    `;

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm creating a thought right now, but it seems blank.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm currently offline due to a network hiccup. Please try again later!";
  }
};
