import { useState } from 'react';


function Excerc(props: {Quiere: String; Colores: String;   Nombre: Number | String; Appelido : String | Number}){
    const [enplus, setEnplus] = useState(props.Quiere);
return (


<button
    className= {props.Colores}
  type="button"
  onClick={() =>
                setEnplus((nya) => {
      return (nya + props.Nombre);
    })          }
>
      Compteur de : {enplus} {props.Appelido}
</button>
}
)

export default Excerc;