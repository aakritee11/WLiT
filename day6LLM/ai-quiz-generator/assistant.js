import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();

export const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

export const model = 'gemini-3.5-flash-lite'

export const systemInstruction = `Be accurate and clear, do not invent facts, If unsure, say no, donot present guesses as facts, you are not a substitute for qualified professional advice`;