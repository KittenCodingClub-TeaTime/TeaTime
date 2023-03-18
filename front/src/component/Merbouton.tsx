import { useState } from 'react';

function Merbouton(props: { name: string; couleur: string; debut: any; modificateur: string | number }) {
  const [enplus, setEnplus] = useState(props.debut);
  return (
    <button
      className={props.couleur}
      type="button"
      onClick={() =>
        setEnplus((nya: any) => {
          return nya + props.modificateur;
        })
      }
    >
      Compteur de : {enplus} {props.name}
    </button>
  );
}

export default Merbouton;

export function Welcome(props: { name: string }) {
  return <h1>Bonjour, {props.name}</h1>;
}
