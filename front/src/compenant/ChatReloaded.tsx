import { useState } from 'react';

function ChatReloaded() {
  const [text, setText] = useState('');
  const [accumulateur, setAccumulateur] = useState<string[]>([]);
  console.log(accumulateur);
  return (
    <>
      <button
        onClick={function () {
          setAccumulateur((previousAccumulateur) => {
            previousAccumulateur.push(text);
            return [...previousAccumulateur];
          });
        }}
      >
        Pwett
      </button>
      <input
        onChange={function (event) {
          setText(event.target.value);
        }}
        value={text}
      ></input>
      <p>{accumulateur}</p>
    </>
  );
}
export default ChatReloaded;
