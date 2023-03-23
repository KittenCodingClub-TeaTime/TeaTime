import { useState } from 'react';

function (){
    const [count, setCount] = useState(0);

<button
className="rainbow-button"
type="button"
onClick={() =>
  setCount((prevCount) => {
    let obj = { jeSuisUneClé: 1, itou: '2' };
    let array = [1, 2, 3];
    console.log(prevCount, obj, array);
    console.log(prevCount);
    obj.itou = '123soleil';
    console.log(obj);
    return prevCount + 1;
  })
}
>
count is: {count}poney
</button>

}