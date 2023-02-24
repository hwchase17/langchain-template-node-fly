import express from "express";

import { OpenAI } from "langchain/llms";
import { ConversationChain } from "langchain/chains";

const app = express();
const port = process.env.PORT || 8080;

const model = new OpenAI({});

app.post("/chat", express.json(), async (req, res) => {
  const chain = new ConversationChain({ llm: model });
  const input = req.body.input;
  const result = await chain.call({ input });

  res.send({ output: result.response });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
