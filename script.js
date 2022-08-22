
const calcular = document.getElementById('calcular');

function imc(){
    const name = document.getElementById('name').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if(name !== "" && altura !== '' && peso !== ""){
        const valorIMC = (peso/(altura*altura)).toFixed(2);
        let classificação = '' ; 
        if(valorIMC<18.5){
            classificação = 'abaixo do peso!';
        }else if(valorIMC<25){
            classificação = 'em um peso saudável.Parabéns!';
        }else if(25<valorIMC){
            classificação = 'acima do peso!';
        }
        resultado.textContent = `${name} seu IMC é de ${valorIMC}, e você está ${classificação} `
        
    }else{
        alert('Preencha todos os campos!')
    }
}
calcular.addEventListener("click", imc);

