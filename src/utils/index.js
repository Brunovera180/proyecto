export function estadisticasFecha(dia, mes, anio, fechasIngresdas){
  
  
  alert("La Fecha es: "+dia+"/"+mes+"/"+anio);

  let diasDelMes= calcularDiasDelMes(mes, anio);
  alert("el mes: " + mes + " , tiene " + diasDelMes);
  //A: mostramos los dias del mes
  
  let anioEsBisiesto= esBisiesto(anio);
  if (anioEsBisiesto) alert("el anio: " + anio + " , es bisiesto")
  else alert("el anio: " + anio + " , NO es bisiesto")
  //A: mostramos si el anio es bisiesto
  
  let diaJuliano= calcularFechaJuliana(dia, mes, anio);
  alert( "dia juliano: " + diaJuliano);
  
  
  let key = "fechas"
  guardar_LocalStorage(key, fechasIngresdas);
  
}

export function  esBisiesto(anio){ //U: devuelve true si el anio es bisiesto, false caso contrario
  if (anio % 4 == 0){
    return true;
  }
  return false  
}
export function calcularDiasDelMes(mes, anio){ //A: devuelve entero que representa los dias del mes que pasron como paramnetro
  let anioEsBisiesto= esBisiesto(anio);
  if(mes == "4" || mes == "6" || mes == "9" || mes == "11"){
    return 30;
  }else if (mes == "2" && anioEsBisiesto){
    return 29;
  }else if (mes == "2" ){
    return 28;
  }else{
    return 31;
  }
}
export function  calcularFechaJuliana(dia, mes, anio){
  let Jdia= parseInt(dia);
  let Jmes= parseInt(mes);
  let Janio= parseInt(anio);
  
  let Y = Janio - 1; 
  
  let M = Jmes + 12; 
  
  let D = Jdia; 
  
  let A = Y / 100; 
  A = A.toFixed();
  
  let B = 2 - A + A/4; 
  
  
  let dj = 0;
  dj = (365.25*(Y+4716))+(30.6001*(M+1))+D+(B)-1524.5;
  return dj;
}

export function guardar_LocalStorage(key, fechasIngresdas){
  
  localStorage.setItem(key, JSON.stringify(fechasIngresdas));
  
  
}

export function obtener_LocalStorage(key){
  let tmp = null
  if(localStorage.getItem(key)){
    tmp = JSON.parse(localStorage.getItem(key));
    console.log("Hay entradas")
  }else{
    console.log("No hay entradas en localstorage")
  }
  return tmp;
}




