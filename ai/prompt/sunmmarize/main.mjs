import OpenAI  from "openai";
import dotenv from "dotenv";
console.log(process.env)
// const clien = new OpenAI({
//   apiKey: "sk-641292945533452784",
//   baseURL:""
// });

// const response = await clien.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       role: "system",
//       content: "You are a helpful assistant."
//     },
//     {
//       role: "user",
//       content: "Hello!"
//     }
//   ]
// });