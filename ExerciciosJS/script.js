function exercicio1(){
    let sal = 0.00;
    salario =  Number(document.getElementById("sal").value);

    let porcentagem = 0.00;
    porcentagem = Number(document.getElementById("percentual").value);

    let novosalario = 0.00;
    novosalario = salario + (salario * (porcentagem / 100));

    document.getElementById("total").innerText = "O novo salário é R$" + novosalario.toFixed(2);
}

function exercicio2(){
    let altura = 0;
    alt = Number(document.getElementById("altura").value);

    let base = 0;
    bas = Number(document.getElementById("base").value);

    area = (bas * alt) / 2;

    document.getElementById("descricao").innerText = area;
}

function exercicio3(){
    let nota1 = 0;
    notapri = Number(document.getElementById("nota1").value)

    let nota2 = 0;
    notaseg = Number(document.getElementById("nota2").value)

    media = (notapri * 0.3) + (notaseg * 0.7);

    document.getElementById("totalnota").innerHTML = "A média do aluno é " + media.toFixed(1);
    
}
function exercicio4(){
    let anonasc = 0;
    ano = Number(document.getElementById("anonasc").value)
    console.log("Anos: " + (2023 - ano));
    console.log("Meses: " + (2023 - ano) * 12);
    console.log("Dias: " + (2023 - ano) * 360);
    console.log("Horas: " + (2023 - ano) * 8760);
    console.log("Minutos: " + (2023 - ano) * 525600);
    console.log("Semanas: " + ((2023 - ano) * 52,1429));        
    console.log("Em 2025 terá: " + (2050 - ano));
}
function exercicio5(){
    let km = 0;
    d = Number(document.getElementById("km").value);

    let gasolina = 0;
    v = Number(document.getElementById("gasolina").value);

    Cm = d / v;

    document.getElementById("consumo").innerText = "O consumo médio do carro foi de " + Cm + " litros";
}
function exercicio6(){
    let salhora = 0;
    salariohora = Number(document.getElementById("salhora").value);

    let refeicao = 0;
    refconsumida = Number(document.getElementById("refeicao").value)

    totalrefeicao = refconsumida * 1.5;

    salariobruto = salariohora * 40 + ((salariohora * 22) * 3);

    salarioliquido = salariobruto - totalrefeicao;

    document.getElementById("salariofinal").innerText = "O salário bruto do funcionário foi de R$ " + salariobruto.toFixed(2) + " o total de desconto das refeições foi de R$ " + totalrefeicao.toFixed(2) + " e o salário liquido é de R$ " + salarioliquido.toFixed(2);        
}
function exercicio7(){	
	numero = Math.floor(Math.random() * 100);
	if (numero % 2 == 0)
		document.getElementById("par").placeholder = ("par");
	else
		document.getElementById("par").placeholder = ("ímpar");
	document.getElementById("numero").placeholder = numero;
}