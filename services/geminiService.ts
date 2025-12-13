import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { COMPANY_CONTEXT } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      return null;
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

export const initializeChat = async () => {
  const ai = getGenAI();
  if (!ai) return null;

  try {
    const dynamicContext = `${COMPANY_CONTEXT}\n\nCurrent Date and Time: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}. Ensure all advice considers the current date relative to the 2026 Employer Filing Season deadlines.`;

    chatSession = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: dynamicContext,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat session", error);
    return null;
  }
};

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    yield "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
    return;
  }

  try {
    const resultStream = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "I encountered an error while processing your request. Please try again.";
    // Reset session on error to be safe
    chatSession = null;
  }
};