import { useState } from 'react';

function Merbouton(props: { name: string; couleur: string; debut: any; modificateur: string | number }) {
  const { name, couleur, debut, modificateur } = props;
  const [enplus, setEnplus] = useState(debut);
  return (
    <button
      className={couleur}
      type="button"
      onClick={() =>
        setEnplus((nya: any) => {
          return nya + modificateur;
        })
      }
    >
      Compteur de : {enplus} {name}
    </button>
  );
}

export default Merbouton;

// export function Welcome(props: { name: string }) {
//   return <h1>Bonjour, {props.name}</h1>;
// }
