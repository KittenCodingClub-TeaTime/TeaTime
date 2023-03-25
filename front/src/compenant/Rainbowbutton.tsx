import { useState } from 'react';

function Changes(props: { Deb: number | string; Couleurs: string; Ajt: number | string; North: string | number }) {
  const { Deb, Couleurs, Ajt, North } = props;
  const [count, setCount] = useState(Deb);
  return (
    <button
      className={Couleurs}
      type="button"
      onClick={() =>
        setCount((prevCount: any) => {
          // let obj = { jeSuisUneClé: 1, itou: '2' };
          // let array = [1, 2, 3];
          // console.log(prevCount, obj, array);
          // console.log(prevCount);
          // obj.itou = '123soleil';
          // console.log(obj);
          return prevCount + Ajt;
        })
      }
    >
      count is: {count}
      {North}
    </button>
  );
}

export default Changes;
