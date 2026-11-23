import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();
// 1/ initialize gemini

const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY,
})

async function main (){
    const response = await ai.models.generateContent({
        model : 'gemini-3.1-flash-lite',
        contents : "Give me 1 question on llm api integration",
        config:{
              temperature: 0.0,
            systemInstruction: "You are a helpful quiz generator. Create a mcq with 4 options based on the context. Questions should be clear ",
            responseMimeType: 'application/json',
            responseSchema:{
                type : 'object',
                properties :{
                    questions:{
                        type: 'array',
                        items:{
                            type: 'object',
                            properties: {
                                question : {type: 'string'},
                                options :{type: 'array', items: {type: 'string'}},
                                correctAnswer : {type: 'string'} ,
                                difficulty : {type: 'string', enum: ['easy', 'medium', 'hard']}
                            },
                             required: ['question', 'options', 'correctAnswer']
                        }
                         },
                        
                },
               
            }
        }
    })
    // console.log(response.text);
    const quiz = JSON.parse(response.text);
    quiz.questions.forEach((q,idx)=>{
        console.log(`Question ${idx+1}: ${q.question}`);
        q.options.forEach((option, i)=>{
            console.log(`option ${String.fromCharCode(65+i)}: ${option}`)
        });
        console.log(`Correct Answer: ${q.correctAnswer}`);
        console.log(`Difficulty: ${q.difficulty}`);
        

    })

}



main();
