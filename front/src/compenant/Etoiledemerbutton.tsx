import { useState } from 'react';

function Excerc(props: {
  Quiere: string | number;
  Colores: string;
  Nombre: number | string;
  Appelido: string | number;
}) {
  const [enplus, setEnplus] = useState(props.Quiere);
  return (
    <button
      className={props.Colores}
      type="button"
      onClick={() =>
        setEnplus((nya: any) => {
          return nya + props.Nombre;
        })
      }
    >
      Compteur de : {enplus} {props.Appelido}
    </button>
  );
}
export default Excerc;
