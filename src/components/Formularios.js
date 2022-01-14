import { useState, useEffect } from "react";
import { estadisticasFecha } from "../utils";

export default function Formulario(){
  
  const [dia,setDia] = useState("");
  const [mes,setMes] = useState("");
  const [anio,setAnio] = useState("");
  
  const [fechasIngresdas, setFechasIngresdas] = useState([]);
  
  
  /*const [almacen, setAlmacen] = useState([])
  const prueba  = () => { 
    if(almacen){
      setAlmacen([
        ...almacen,        
        { 
          dia: "23",
          mes: "12",
          anio: "2001"
        }
      ]);
    }
    console.log(almacen)
  }*/
  
  const test = (e) => {
    e.preventDefault();
    //prueba();
    
    if(fechasIngresdas){
      setFechasIngresdas([ 
        ...fechasIngresdas,
        { 
          dia: dia,
          mes: mes,
          anio: anio
        }
      ]);
    }

    /*fechasIngresdas.map((unaFecha) => {
      console.log(unaFecha)
      
    })*/



    /*fechasIngresdas.map(() => {
      
      setFechasIngresdas([       
        ...fechasIngresdas,
        { 
          dia: dia,
          mes: mes,
          anio: anio
        }
      ]);
    })*/
    

    estadisticasFecha(dia, mes, anio, fechasIngresdas);  
    console.log(fechasIngresdas)
  }

  const dele = (e) => {
    alert("borrando")
    e.preventDefault();
    document.getElementById('Formulario');
  }

  return(
   <>
    <h1 className="display-5 fw-bold text-center">Formulario</h1>
    <form id="Formulario" >
      <hr/>
      <input
      type="text" 
      className="form-control" 
      id="dia"
      name="dia"
      placeholder="Indique Dia"
      value={dia}
      onChange={(e) => setDia(e.target.value)}
      />
      
      <br/>
      <input
      type="text" 
      className="form-control" 
      id="mes"
      name="mes"
      placeholder="Indique Mes"
      value={mes}
      onChange={(e) => setMes(e.target.value)}
      />
      
      <br/>
      <input
      type="text" 
      className="form-control" 
      id="anio"
      name="anio"
      placeholder="Indique Año"
      value={anio}
      onChange={(e) => setAnio(e.target.value)}
      />
    
      <br/><br/>
      <div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={test}
      >Enviar
      </button>
      
      <button
        type="reset"
        className="btn btn-secondary"
        onClick={dele}
      >Limpiar
      </button>
      </div>
      
    </form>
      
    <div>
    <br></br>
      <table id="tablaCalendario" className="table">
        <thead className="table-info">
          <tr>
            <th>Dia</th>
            <th>Mes</th>
            <th>año</th>
          </tr>
        </thead>
        <tbody>
         
          {
            fechasIngresdas.map((unaFecha) => {
              return(
                <tr>
                  <td>{unaFecha.dia}</td>
                  <td>{unaFecha.mes}</td>
                  <td>{unaFecha.anio}</td> 
                </tr>  
              ) 
            })
          }
        </tbody>
      </table>
    </div> 
   </>
  );
}