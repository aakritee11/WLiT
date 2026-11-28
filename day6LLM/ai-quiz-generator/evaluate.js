import { ai,systemInstruction,model } from "./assistant.js"

const testCases =[
    {
        question: 'Who is the current Prime Minister of Nepal?',
        expected: 'Balen Shah'
    },
    // {
    //     question: 'What is pulmonary artery?',
    //     expected: 'heart'
    // },
    // {
    //     question: 'Where is london located?',
    //     expected: 'uk'
    // },
   

]

async function evaluateAssistant(question){
    const response = await ai.models.generateContent({
        model: model,
        contents: question,
        config:{
            systemInstruction: systemInstruction,
        }
    })
    return response.text;
}

async function runTests(){
    let passed = 0;
  for(const test of testCases) {
     const response = await evaluateAssistant(test.question);

     const ok = response.toLowerCase().includes(test.expected.toLowerCase());

     console.log("Question: ", test.question);
     console.log("\nResponse: ", response);
     console.log("\nResult: ", ok?'pass':'fail');

     if(ok) passed++;
  }
  console.log("\n----------");
  console.log(`Passed: ${passed}/${testCases.length}`);
  console.log(`Pass rate: ${(passed/testCases.length)*100}%`)
}

runTests();