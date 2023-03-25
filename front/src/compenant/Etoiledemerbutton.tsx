import { useState } from 'react';

function Excerc(props: {
  Quiere: string | number;
  Colores: string;
  Nombre: number | string;
  Appelido: string | number;
}) {
  const { Quiere, Colores, Nombre, Appelido } = props;
  const [enplus, setEnplus] = useState(Quiere);
  return (
    <button
      className={Colores}
      type="button"
      onClick={() =>
        setEnplus((nya: any) => {
          return nya + Nombre;
        })
      }
    >
      Compteur de : {enplus} {Appelido}
    </button>
  );
}
export default Excerc;
