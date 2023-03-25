import { useState } from 'react';

function Welcome(props: { Name: string; Modificateur: string | number; Depart: string | number; Couleur: string }) {
  const { Name, Modificateur, Depart, Couleur } = props;
  const [ajouter, setajouter] = useState(Depart);
  return (
    <button
      className={Couleur}
      type="button"
      onClick={() =>
        setajouter((preajouter: any) => {
          return preajouter + Modificateur;
        })
      }
    >
      count is:{ajouter}
      {Name}
    </button>
  );
}

export default Welcome;
