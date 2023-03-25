import { useState } from 'react';

function Parameters(props: { Start: string | number; Color: string; Add: number | string; Name: string | number }) {
  const { Start, Color, Add, Name } = props;
  const [ajouter, setajouter] = useState(Start);
  return (
    <button
      className={Color}
      type="button"
      onClick={
        () =>
          setajouter((preajouter: any) => {
            return preajouter + Add;
          })

        // setCount(42)
        // setCount((prevCount) => {
        //   console.log(prevCount);
        //   return prevCount + 10;
        // })
      }
    >
      count is: {ajouter}
      {Name}
    </button>
  );
}
export default Parameters;
