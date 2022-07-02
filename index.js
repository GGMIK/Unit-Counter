/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBTN = document.getElementById("convertBTN")
let inputVariable = 1

convertBTN.addEventListener("click", function(){
    function converter(inputVariable){
            let inputVariable2 = document.getElementById("inputField").value;
            if(inputVariable2 > 0){
                inputVariable = inputVariable2
            }
             let  feet = inputVariable * 3.281
             feet = feet.toFixed(3)
             let = metre = inputVariable / 3.281
             metre = metre.toFixed(3)
             const Length = document.getElementById("titleOfLength")
             Length.innerHTML = `Length (Meter/Feet)<br>${inputVariable} meters = ${feet} feet | ${inputVariable} feet = ${metre} meters`
             
             let  gallons = inputVariable * 0.264 
             gallons = gallons.toFixed(3)
             let  litre = inputVariable / 0.264
             litre = litre.toFixed(3)
             const volume = document.getElementById("titleOfVolume")
             volume.innerHTML = `Volume (Liters/Gallons)<br>${inputVariable} litres = ${gallons} gallons | ${inputVariable} gallons = ${litre} litres`
             
             let  kilos = inputVariable * 2.204
             kilos = kilos.toFixed(3)
             let  litres = inputVariable /2.204
             litres = litres.toFixed(3)
             const mass = document.getElementById("titleOfMass")
             mass.innerHTML = `Mass (Kilograms/Pounds)<br>${inputVariable} kilos = ${gallons} pounds | ${inputVariable} pounds = ${litre} kilos`
             
    }
    converter(inputVariable) 
})
