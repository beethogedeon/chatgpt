//import { Configuration, OpenAIApi } from 'openai';
import OpenAI from 'openai';

export const dalle = async (prompt, key) => {
  /*const configuration = new Configuration({
    apiKey: key,
  });*/

  //const openai = new OpenAIApi(configuration);
  const openai = new OpenAI({
    apiKey: key, // This is the default and can be omitted
  });
  const response = await openai.images.generate({
    prompt: `${prompt}`,
    n: 1,
    size: '512x512',
  });

  return response;
};
