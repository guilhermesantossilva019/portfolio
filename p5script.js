$(function() {
    $('#altura').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  })

function imc() {
    let name = document.getElementById("name").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let altura2 = altura*altura;
    let imc = peso/altura2;
    let imcarredondado = parseFloat(imc.toFixed(1));


    let resultname = document.getElementById("result-name").textContent = (name);
    let resultimc = document.getElementById("result-imc").textContent = (imcarredondado);
        if (imcarredondado <= 18.5) 
        {
            var resultclass = document.getElementById("result-class").textContent = ("Magreza");
        }
        else if (imcarredondado > 18.5 && imcarredondado <= 24.9)
        {
            var resultclass = document.getElementById("result-class").textContent = ("Normal");
        }
        else if (imcarredondado > 24.9 && imcarredondado <= 29.9)
        {
            var resultclass = document.getElementById("result-class").textContent = ("Sobrepeso");
        }
        else if (imcarredondado > 29.9 && imcarredondado <= 34.9)
        {
            var resultclass = document.getElementById("result-class").textContent = ("Obesidade grau I");
        }
        else if (imcarredondado > 34.9 && imcarredondado <= 39.9)
        {
            var resultclass = document.getElementById("result-class").textContent = ("Obesidade grau II");
        }
        else if  (imcarredondado > 39.9)
        {
            var resultclass = document.getElementById("result-class").textContent = ("Obesidade grau III");
        }
        else {}
}