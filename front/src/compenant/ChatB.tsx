import { useState } from 'react';

function ChatB() {
  const [texte, setTexte] = useState('');
  const [com, setCom] = useState('');
  console.log(texte);
  return (
    <>
      <p>{com}</p>

      <input
        value={texte}
        onChange={(event) => {
          setTexte(event.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          setCom((previousCom) => {
            return previousCom + texte;
          });
        }}
      >
        envoyer
      </button>
    </>
  );
}

export default ChatB;
