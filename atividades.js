////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade1() {
  // ATIVIDADE 01
  var nomeDoCarro = "Fusca";
  alert("Nome do Carro é " + nomeDoCarro);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade2() {
  // ATIVIDADE 02
  var nome = prompt("Qual o seu nome querido usuário?");
  alert(`Seu nome de usuário é ${nome}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade3() {
  // ATIVIDADE 03
  var nome = prompt("Qual o seu nome?");
  var idade = prompt("Qual a sua idade?");
  alert(`Seu Nome é ${nome}, e sua Idade é ${idade}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade4() {
  // ATIVIDADE 04
  var baseRetangulo = parseInt(prompt("Qual o número da base do retângulo?"));
  var alturaRetangulo = parseInt(
    prompt("Qual o número da altura do retângulo?")
  );
  var resultado01 = baseRetangulo * alturaRetangulo;
  alert("Resultado do Retângulo é " + resultado01);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade5() {
  // ATIVIDADE 04.2
  var lado01 = parseInt(prompt("Qual o valor do lado 01 do quadrado?"));
  var lado02 = parseInt(prompt("Qual o valor do lado 02 do quadrado?"));
  var resultado02 = lado01 * lado02;
  alert("Resultado do quadrado é " + resultado02);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade6() {
  // ATIVIDADE 04.3
  var diagonalMaior = parseInt(
    prompt("Digite o valor da Diagonal maior do losango")
  );
  var diagonalMenor = parseInt(
    prompt("Digite o valor da Diagonal menor do losango")
  );
  var resultado03 = (diagonalMaior * diagonalMenor) / 2;
  alert("O resultado do losango é " + resultado03);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade7() {
  // ATIVIDADE 04.4
  var baseMaior = parseInt(prompt("Digite o valor da Base maior do trapézio"));
  var baseMenor = parseInt(prompt("Digite o valor da Base menor do trapézio"));
  var alturaH = parseInt(prompt("Digite o valor da Altura do trapézio"));
  var resultado04 = ((baseMaior + baseMenor) * alturaH) / 2;
  alert("O resultado do trapézio é " + resultado04);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade8() {
  // ATIVIDADE 04.5
  var baseParalelogramo = parseInt(
    prompt("Qual o número da base do paralelogramo?")
  );
  var alturaParalelogramo = parseInt(
    prompt("Qual o número da altura do paralelogramo?")
  );
  var resultado05 = baseParalelogramo * alturaParalelogramo;
  alert("Resultado do Paralelogramo é " + resultado05);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade9() {
  // ATIVIDADE 04.6
  var baseTriangulo = parseInt(prompt("Qual o número da base do triângulo?"));
  var alturaTriangulo = parseInt(
    prompt("Qual o número da altura do triângulo?")
  );
  var resultado07 = (baseTriangulo * alturaTriangulo) / 2;
  alert("Resultado do Triângulo é " + resultado07);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder1Atividade10() {
  // ATIVIDADE 04.7
  var raio = parseInt(prompt("Qual o valor do raio do círculo?"));
  var PI = 3.1415926535898;
  var resultado08 = raio * raio * PI;
  alert("A área do Círculo é " + resultado08);
}
