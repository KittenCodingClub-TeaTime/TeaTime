import { useState } from 'react';

function Changes(props: {Deb: number | string; Couleurs: string; Ajt : number | string; N: string | number }){

    const [count, setCount] = useState(props.Deb);
    return(

    
<button
className={props.Couleurs}
type="button"
onClick={() =>
  setCount((prevCount) => {
    let obj = { jeSuisUneClé: 1, itou: '2' };
    let array = [1, 2, 3];
    console.log(prevCount, obj, array);
    console.log(prevCount);
    obj.itou = '123soleil';
    console.log(obj);
    return prevCount {props.Ajt};
  })
}
>
count is: {count}{N}
</button>
    )
}

export default Changes;