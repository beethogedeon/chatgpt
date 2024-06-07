//import { Configuration, OpenAIApi } from 'openai';
import OpenAI from 'openai';
export const checkApiKey = async (keys) => {
  /*const configuration = new Configuration({
    apiKey: keys,
  });*/

  //const openai = new OpenAIApi(configuration);

  const openai = new OpenAI({
    apiKey: keys, // This is the default and can be omitted
  });

  return openai.listModels();
};
