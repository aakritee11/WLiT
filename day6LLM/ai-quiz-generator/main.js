import {ai,model,systemInstruction} from "./assistant.js";



async function main(){
    const response = await ai.models.generateContent({
        model: model,
        contents: "How many ppl were found dead in the bhotekoshi flood in Nepal recently?? ",
        config: {systemInstruction: systemInstruction,
            respnseMimeType: 'application/json',

            responseSchema:{
                type: 'object',
                properties: {
                    question:{type: 'string'},
                    answer: {type: 'string'}
                },
                required: ['question','answer']
            }
        }
    });

    const result = JSON.parse(response.text);

    console.log('\nQuestion:',result.question);
    console.log('\nAnswer:',result.answer);

}

main();