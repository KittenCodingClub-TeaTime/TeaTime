import { useState } from 'react';

function (){
    const [ajouter, setajouter] = useState(0);


<button
  className="rainbow-button"
  type="button"
  onClick={
    () =>
      setajouter((preajouter) => {
        return preajouter + 1;
      })

    // setCount(42)
    // setCount((prevCount) => {
    //   console.log(prevCount);
    //   return prevCount + 10;
    // })
  }
>
  count is: {ajouter}cookies
</button>;
}
