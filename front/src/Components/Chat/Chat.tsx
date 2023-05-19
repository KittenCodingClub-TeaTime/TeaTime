import { useState } from 'react';
import './Chat.css';

function Chat() {
  const [message, setMessage] = useState('Bonjour');
  const [messageListe, setMessageListe] = useState([]:string[]);

  return (
    <>
      <p></p>
      <br></br>
      <input value={message} onChange={(event) => setMessage(event.target.value)}></input>

      <br></br>
      <button
        className="water-button"
        onClick={() => {
          setMessage((currentMessage) => {
            setMessageListe((currentMessageList) => {
              return [...currentMessageList, currentMessage];
            });
            return '';
          });
        }}
      >
        etoile de mer
      </button>
      <br></br>
    </>
  );
}

export default Chat;
