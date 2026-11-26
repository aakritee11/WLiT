import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import fs from 'fs';


dotenv.config();
// 1/ initialize gemini

const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY,
})

const imagePath='C:/wlit2026/day6LLM/imgs/OIP.webp';
const imageData=fs.readFileSync(imagePath).toString('base64');
const noQuestions = 2;
const prompt = [{text: `Generate ${noQuestions} questions based on the image below. Each question should have 4 options and indicate the correct answer. The questions should be clear and concise.`},
{inlineData:{mimeType:'image/webp',data:imageData}}];

const systemInstruction = "You are a helpful quiz generator. Create a multiple-choice quiz with 3 options based on the context. Questions should be clear and concise.";

const resSchema={
                type:'object',
                properties:{
                    questions:{
                        type:'array',
                        items:{
                            type:'object',
                            properties:{
                                question:{type:'string'},
                                options:{type:'array', items:{type:'string'}},
                                correctAnswer:{type:'string'},
                                difficulty:{type:'string'}
                            },
                            required:['question','options','correctAnswer','difficulty']
                        }
                    }
                }
            };

    const configuration = {
        temperature: 1.5,
        systemInstruction: systemInstruction,
        responseMimeType: Type.JSON,
        responseSchema: resSchema
    };        


async function main (){
   const history = [];
    history.push({role:'user', parts:prompt});
    const response = await ai.models.generateContent({
        model : 'gemini-3.1-flash-lite',
        contents :prompt,
        config:configuration
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

    const follow_up_request = ['what color shirt is the kid in the image wearing?'];

for(const follow_up of follow_up_request){
    history.push({role:'user', parts:[{text:follow_up}]});
    const response2 = await ai.models.generateContent({
        model:'gemini-3.5-flash-lite',
        contents:history,
        config:configuration
    });
   const quiz2 = JSON.parse(response2.text);
 history.push({role:'model', parts:[{text:response2.text}]});

 quiz2.questions.forEach((q,idx)=>{
    console.log(`Question ${idx+1}: ${q.question}`);
     console.log(`Options: ${q.options.join(', ')}`);
        console.log(`Correct Answer: ${q.correctAnswer}`);
        console.log(`Difficulty: ${q.difficulty}`);
 })
   
}



}




main();
