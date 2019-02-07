const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');


function roundNum(num){
    return Math.round(num*10000)/10000;
}
function celciusTOfahandKelvins(){
    const Temp = parseFloat(celciusInput.value);
    const  fTemp = (Temp * (9/5))+32;
    const kelvin = Temp + 273.15;
    fahrenheitInput.value =roundNum(fTemp);
    kelvinInput.value = roundNum(kelvin);
    }

    function fahtocelciusandkelvins(){
       const fTemp = parseFloat(fahrenheitInput.value);
       const Temp = (fTemp - 32) *(5/9);
       const kelvin =(fTemp + 459.67)*5/9;
       celciusInput.value= roundNum(Temp);
       kelvinInput.value= roundNum(kelvin);
    }

    function kelvintofahandcelcius(){
     const kelvin = parseFloat(kelvinInput.value);
     const Temp = kelvin - 273.15;
     const fTemp = 9/5 * (kelvin - 273) + 32;
     celciusInput.value = roundNum(Temp);
     fahrenheitInput.value= roundNum(fTemp);

    }
celciusInput.addEventListener('input', celciusTOfahandKelvins);
fahrenheitInput.addEventListener('input', fahtocelciusandkelvins);
kelvinInput.addEventListener('input', kelvintofahandcelcius );