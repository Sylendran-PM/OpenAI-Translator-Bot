# App to translate any language to its English translation

This is an example Traslator app used in the OpenAI API [quickstart tutorial](https://platform.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). 

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd Translator\ App_openai/
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Create a .env file

   On Linux systems: 
   ```bash
   $ vi .env
   ```

6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file by pasting the following inside
   ```
   # Do not share your OpenAI API key with anyone! It should remain a secret.
   OPENAI_API_KEY=your API key goes here
   ```

7. If you do not have 'next' installed, then install it using 'npm i next'

8. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! 
