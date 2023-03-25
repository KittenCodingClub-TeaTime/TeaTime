import { useState } from 'react';

function Welcome(props: { Name: string; Modificateur: string | number; Depart: string | number; Couleur: string }) {
  const { Name, Modificateur, Depart, Couleur } = props;
  const [ajouter, setajouter] = useState(props.Depart);
  return (
    <button
      className={props.Couleur}
      type="button"
      onClick={() =>
        setajouter((preajouter: any) => {
          return preajouter + props.Modificateur;
        })
      }
    >
      count is:{ajouter}
      {props.Name}
    </button>
  );
}

export default Welcome;