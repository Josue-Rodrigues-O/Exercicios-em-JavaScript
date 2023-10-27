function Ex1007() {
    var a = Number(prompt("Digite o primeiro número..."))
    var b = Number(prompt("Digite o segundo número..."))
    var c = Number(prompt("Digite o terceiro número..."))
    var d = Number(prompt("Digite o quarto número..."))

    var diferenca = (a * b) - (c * d)
    console.log("DIFERENCA = " + diferenca)
    console.log("")
}

function Ex1009() {
    var nome = prompt("Digite o nome do colaborador...")
    var salarioFixo = Number(prompt("Digite o salario fixo desse colaborador..."))
    var vendasTotal = Number(prompt("Digite o número de vendas (em reais) desse colaborador..."))

    var total = salarioFixo + (vendasTotal * 0.15)
    console.log("TOTAL = R$" + total.toFixed(2))
    console.log("")
}
function Ex1012() {
    const pi = 3.14159
    var a = Number(prompt("Digite o primeiro valor..."))
    var b = Number(prompt("Digite o segundo valor..."))
    var c = Number(prompt("Digite o terceiro valor..."))

    var triangulo = (a * c) / 2
    var circulo = (Math.pow(c, 2)) * pi
    var trapezio = ((a + b) * c) / 2
    var quadrado = Math.pow(b, 2)
    var retangulo = a * b

    console.log("TRIANGULO: " + triangulo.toFixed(3))
    console.log("CIRCULO: " + circulo.toFixed(3))
    console.log("TRAPEZIO: " + trapezio.toFixed(3))
    console.log("QUADRADO: " + quadrado.toFixed(3))
    console.log("RETANGULO: " + retangulo.toFixed(3))
    console.log("")
}
function Ex1036() {
    var a = Number(prompt("Digite o primeiro valor..."))
    var b = Number(prompt("Digite o segundo valor..."))
    var c = Number(prompt("Digite o terceiro valor..."))

    var delta = Math.pow(b, 2) - 4 * a * c
    var R1
    var R2

    if (delta < 0 || delta == 0 || a == 0) {
        console.log("Impossível calcular\n")
        console.log("")
    } else {
        R1 = (-b + Math.sqrt(delta)) / (2 * a)
        R2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log("R1 = " + R1.toFixed(5))
        console.log("R2 = " + R2.toFixed(5))
        console.log("")
    }
}
function Ex1043() {
    var a = Number(prompt("Digite o primeiro valor..."))
    var b = Number(prompt("Digite o segundo valor..."))
    var c = Number(prompt("Digite o terceiro valor..."))

    var area
    var perimetro

    if (Math.abs(b - c) < a && a < Math.abs(b + c) &&
        Math.abs(a - c) < b && b < Math.abs(a + c) &&
        Math.abs(a - b) < c && c < Math.abs(a + b)) {
        perimetro = a + b + c;
        console.log("Perimetro = " + perimetro)
        console.log("")
    } else {
        area = ((a + b) * c) / 2
        console.log("Area = " + area.toFixed(1))
        console.log("")
    }
}
function Ex1050() {
    var ddd = Number(prompt("Digite um DDD..."))

    switch (ddd) {
        case 61: console.log("Brasilia"); break;
        case 71: console.log("Salvador"); break;
        case 11: console.log("Sao Paulo"); break;
        case 21: console.log("Rio de Janeiro"); break;
        case 32: console.log("Juiz de Fora"); break;
        case 19: console.log("Campinas"); break;
        case 27: console.log("Vitoria"); break;
        case 31: console.log("Belo Horizonte"); break;
        default: console.log("DDD nao cadastrado"); break;
    }
    console.log("")
}

//#region Ex1848
function Ex1848() {
    var codigo
    var traducao

    var resultado = new Array(1000)
    var resultadoTemp = 0
    var index = 0

    var caw = 0
    var control = true;

    while (control) {
        codigo = prompt("Digite o codigo...")
        traducao = tradutor(codigo)

        if (traducao != 8 && traducao != 9) {
            resultadoTemp += traducao
        }
        if (traducao == 8) {
            resultado[index] = resultadoTemp
            resultadoTemp = 0
            index++
            caw++
        }
        if (caw >= 3) {
            for (let i = 0; i < index; i++) {
                console.log(resultado[i])
            }
            console.log("")
            control = false
        }
    }
}
function tradutor(codigo) {
    switch (codigo) {
        case "---": return 0; break;
        case "--*": return 1; break;
        case "-*-": return 2; break;
        case "-**": return 3; break;
        case "*--": return 4; break;
        case "*-*": return 5; break;
        case "**-": return 6; break;
        case "***": return 7; break;
        case "caw caw": return 8; break;
        default: return 9; break;
    }
}
//#endregion