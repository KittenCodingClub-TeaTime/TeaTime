import { useState } from 'react';

const ChatRelodead = () => {
  const [value, setValue] = useState(' ici');
  const [temara, setTemara] = useState<string[]>([]);
  console.log(temara);
  return (
    <>
      <p>{temara}</p>

      <input
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
          //   setValue((previouValue: string) => {
          //     console.log(previouValue);
          //     return ev.target.value;
          //   });
        }}
      ></input>

      <button
        onClick={() =>
          setTemara((previouTemara) => {
            previouTemara.push(value);
            return [...previouTemara];
          })
        }
      >
        Envoye
      </button>
    </>
  );
};

export default ChatRelodead;
