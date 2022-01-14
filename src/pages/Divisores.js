import React, { useState } from 'react'

export default function Divisores(){

  const [suma, setsuma] = useState(0);

  const [guar, setGuar] = useState(0)

  let i = 0

  let mos = () =>{
    for (i = 1; i <= 10; i++) {
      if (i % 2 == 0){
        alert(i)
        const guar = i;

      }
    }
  }


  const algo = () => {
    setGuar(guar+2)
  }

  const actNum = () => {
    setsuma(suma+2)
  }
    

  const [mostrar, setMostrar] = useState(0);

return(
<div>
  <h1>Divisores</h1>
  <hr/>
  <button onClick={actNum}>
    Suma de Numeros Pares
  </button>
  <h2>Pares: {suma}</h2>
    <ul>
      <li> 2 </li>
      <li> 4 </li>
      <li> 6 </li>
    </ul>
  <div>
    <button onClick={() => setMostrar(!mostrar)}>
        Mostrar
    </button>

    {
        mostrar
        ? <h1> {guar} </h1>
        : <h1> 3,5,7 </h1>
    }
  </div>

</div>
  )
}
