class Persona{
    constructor (nombre, apellidos, edad){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.edad=edad; 
    }

}
 let arrayPersonas=[];

async function persona(){

for(let i=0; i<5;i++){
     do{
        nombre= prompt("Introduce el nombre: ");
     if(!nombre.trim()){
        alert("Introduce un nombre válido");
     }}while(!nombre.trim());

     do{
     apellidos= prompt("Introduce los apellidos: ");
     if(!apellidos.trim()){
        alert("Introduce apellidos válidos");
     }}while(!apellidos.trim());
 
    
     do{
     edad=prompt("Introduce la edad: ");
     edad=parseInt(edad);
     if(isNaN(edad)){
        alert("La edad debe ser un número");
     }}while(isNaN(edad));

    
    
     let persona= new Persona(nombre, apellidos, edad);
     arrayPersonas.push(persona);
     alert("Has añadido una persona");
    }
    alert("Ya tienes todas las personas, puedes pulsar Mostrar para verlas.")
}



function mostrar(){
    const zonaImprimir=document.getElementById("zonaImprimir");
    zonaImprimir.innerHTML=arrayPersonas.map(persona=>`Nombre: ${persona.nombre} Apellidos: ${persona.apellidos} Edad: ${persona.edad}<br>`).join("");
}