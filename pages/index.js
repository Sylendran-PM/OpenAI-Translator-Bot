import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [inputTxt, setTranslatorInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ languageInput: inputTxt }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setTranslatorInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Translator App</title>
        <link rel="icon" href="/translate.png" />
      </Head>

      <main className={styles.main}>
        <img src="/translate.png" className={styles.icon} />
        <h3>English Translator Bot</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="languageInput"
            placeholder="Enter input text in any language"
            value={inputTxt}
            onChange={(e) => setTranslatorInput(e.target.value)}
          />
          <input type="submit" value="Translate" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
