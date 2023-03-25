import { useState } from 'react';

const ChatRelodead = () => {
  const [value, setValue] = useState(' ici');
  return (
    <>
      <input
        value={value}
        onChange={(ev) => {
          //   setValue(ev.target.value);
          setValue((previouValue: string) => {
            console.log(previouValue);
          });
        }}
      ></input>

      <button>Envoye</button>
    </>
  );
};

export default ChatRelodead;
