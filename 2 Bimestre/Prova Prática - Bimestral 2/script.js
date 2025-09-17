function calcular(){
    const precoGasolina = document.getElementById("precoGasolina").value;
    const distancia = document.getElementById("distancia").value;
    const consumo = document.getElementById("consumo").value;
    //Retorna se algum campo estiver vazio
    if(precoGasolina == "" || distancia == "" || consumo == ""){
        alert("Preencha todos os campos");
        return;
    }
    //Anima o carro
    const carro = document.getElementById("carro");
    carro.classList.remove("animar");
    carro.offsetWidth;
    carro.classList.add("animar");

    //Calcula o custo da viagem
    const litros = distancia / consumo;
    const custo = precoGasolina * litros;

    //Torna o resultado visível e msotra
    const resultado = document.getElementById("resultado");
    resultado.classList.remove("hidden");
    resultado.querySelector("#litros").innerText = litros.toFixed(2) + " L";
    resultado.querySelector("#custo").innerText = "R$ " + custo.toFixed(2);
}