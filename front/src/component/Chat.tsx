import { useState } from 'react';

function Chat() {
  const [texte, setTexte] = useState('');
  const [cb, setCb] = useState('');

  console.log(texte);
  return (
    <>
      <p>{cb}</p>

      <input
        value={texte}
        onChange={(event) => {
          setTexte(event.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          setCb((previousCb) => {
            return previousCb + texte;
          });
        }}
      >
        nya
      </button>
    </>
  );
}

export default Chat;
