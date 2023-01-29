//Vitor Costa Farias 29/01/2003

function calcularMedia(atleta){
//Essa função calcula a média dos três valores do meio das notas, retirando a maior e menor nota
//de cada atleta. É armazenado dentro de atleta.notas a matriz que possui as notas do atleta.
//A variável soma vai sendo incrementada ao longo da função com cada o valor de cada uma das notas.
//foiMaior e foiMenor armazenam a informação de se já foi checado o maior e o menor número da lista
//respectivamente. Os valores que são os maiores ou menores, são subtraídos da variável soma.
//Caso tenhamos mais de um número 10, apenas um deles é contabilizado como o maior.
    let soma = 0
    let foiMaior = false
    let foiMenor = false
    atleta.notas.forEach(function(nota1){
        soma += nota1
        let contadorMaiorQue = 0
        atleta.notas.forEach(function(nota2){
            if ((nota1 > nota2) || (nota2 === 10 && nota1 === nota2)){
                contadorMaiorQue += 1
            }})
        if ((contadorMaiorQue >= 4) && (foiMaior === false)){
            soma -= nota1
            foiMaior = true
        }
        if ((contadorMaiorQue === 0) && (foiMenor === false)){
            soma -= nota1
            foiMenor = true
        }
    })
    return (soma/(atleta.notas.length-2))
}

function mostrarResultado(matriz){
//Essa função percorre a matriz de objetos "atletas" e mostra no console o nome, as notas e a média
//de cada um dos atletas. A média válida aqui é calculada usando a função calcularMedia que definimos.
    for (let i = 0; i < matriz.length; i++) {
        console.log(`Atleta: ${matriz[i].nome}
Notas Obtidas: ${matriz[i].notas.join(", ")}
Média Válida: ${calcularMedia(matriz[i])}
        `);
    }
}


let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


mostrarResultado(atletas)