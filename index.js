/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")
const lengthSection = document.getElementById("length-section")
const volumeSection = document.getElementById("volume-section")
const unitSection = document.getElementById("unit-section")
const lengthConvert = document.getElementById("length-convert")
const volumeConvert = document.getElementById("volume-convert")
const massConvert = document.getElementById("mass-convert")

function unitCoversion(unit){
    if(unit === "feet"){
        return (Number(unitInput.value) * 3.281).toFixed(3)
    }else if(unit === "meters"){
        return (Number(unitInput.value) / 3.281).toFixed(3)
    }else if(unit === "gallon"){
        return (Number(unitInput.value) * 0.264).toFixed(3)
    }else if(unit === "liters"){
        return (Number(unitInput.value) / 0.264).toFixed(3)
    }else if(unit === "pounds"){
         return (Number(unitInput.value) * 2.204).toFixed(3)
    }else if(unit === "kilos"){
        return (Number(unitInput.value) / 2.204).toFixed(3)
    }
}

convertBtn.addEventListener("click", function(){
    lengthConvert.innerHTML = `${unitInput.value} meters = ${unitCoversion("feet")} feet | ${unitInput.value} feet = ${unitCoversion("meters")} meters`
    
    volumeConvert.innerHTML = `${unitInput.value} liters = ${unitCoversion("gallon")} gallon | ${unitInput.value} gallon = ${unitCoversion("liters")} liters`
    
    massConvert.innerHTML = `${unitInput.value} kilos = ${unitCoversion("pounds")} pounds | ${unitInput.value} pounds = ${unitCoversion("kilos")} kilos`
})
