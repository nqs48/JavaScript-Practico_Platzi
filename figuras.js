//Función Para calcular datos del cuadrado

const calcularPerimetroCuadrado = () => {
  let input = document.getElementById("InputCuadrado");
  let lado = input.value;
  let perimetro = lado * 4;
  alert(`El perímetro del triangulo es ${perimetro} cm`);
};

const calcularAreaCuadrado = () => {
  let input = document.getElementById("InputCuadrado");
  let lado = input.value;
  let area = lado * lado;
  alert(`El area del triangulo es ${area}`);
};

//Cálculos Triangulo
const calcularPerimetroTriangulo = () => {
  let lado1 = parseInt(document.getElementById("InputL1Triangulo").value);
  let lado2 = parseInt(document.getElementById("InputL2Triangulo").value);
  let base = parseInt(document.getElementById("InputBTriangulo").value);
  let perimetro = lado1 + lado2 + base;
  alert(`El perímetro del triangulo es ${perimetro} cms`);
};

const calcularAreaTriangulo = () => {
  let base = parseInt(document.getElementById("InputBTriangulo").value);
  let altura= parseInt(document.getElementById("InputATriangulo").value);
  const area = (base * altura) / 2;
  alert(`El area del triangulo es ${area} cms`)
};

//Cálculos Circulo
const calcularAreaCirculo = () => {
  let radio = parseInt(document.getElementById("InputRCirculo").value);
  const areaCirculo = Math.PI * radio ** 2;
  alert(`El area del circulo es ${areaCirculo} cms`);
};

const calcularDiametroCirculo = () => {
  let radio = parseInt(document.getElementById("InputRCirculo").value);
  const diametroCirculo= radio*2;
  alert(`El diámetro del circulo es ${diametroCirculo} cms`);
};

const calcularPerimetroCirculo = () => {
  let radio = parseInt(document.getElementById("InputRCirculo").value);
  const perimetroCirculo = Math.round(2 * Math.PI * radio,-1);
  alert(`El perimetro del circulo es ${perimetroCirculo} cms`);
};