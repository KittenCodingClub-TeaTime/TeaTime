import { useState } from 'react';

function Parameters(props: { Start: string | number; Color: string; Add: number | string; Name: string | number }) {
  const [ajouter, setajouter] = useState(props.Start);
  return (
    <button
      className={props.Color}
      type="button"
      onClick={
        () =>
          setajouter((preajouter: any) => {
            return preajouter + props.Add;
          })

        // setCount(42)
        // setCount((prevCount) => {
        //   console.log(prevCount);
        //   return prevCount + 10;
        // })
      }
    >
      count is: {ajouter}
      {props.Name}
    </button>
  );
}
export default Parameters;
