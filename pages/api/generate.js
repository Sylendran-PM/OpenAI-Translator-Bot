import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const inputTxt = req.body.languageInput || '';
  if (inputTxt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid text input",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(inputTxt),
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(inputTxt) {
  const translateTxt =
  inputTxt[0].toUpperCase() + inputTxt.slice(1).toLowerCase();
  return `Translate this to English.
  Input Language: 'Bonjour, comment sa va?'
  English: Hello, how are you?
  Input Language: 'Ahoj, jak se máš?'
  English:  Hi, how are you?
  Input Language:${translateTxt}
  English:`;
}
