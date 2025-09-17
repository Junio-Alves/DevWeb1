const votos = {
    python: 0,
    php: 0,
    java: 0,
    cpp: 0
}

function votar(){
    const linguagem = document.querySelector('input[name="linguagem"]:checked').value;
    if(!linguagem){
        alert('Por favor, selecione uma linguagem de programação');
        return;
    }
    votos[linguagem]++;
    exibirResultado();
}

function exibirResultado(){
    const totalVotos = Object.values(votos).reduce((a, b) => a + b, 0);
    const resultadoDiv = document.getElementById("resultado");
    
    if(totalVotos === 0){
        resultadoDiv.innerHTML = "<div>Nenhum voto registrado ainda.</div>";
        return;
    }
    
    for(const linguagem in votos){
        const porcentagem = ((votos[linguagem] / totalVotos) * 100).toFixed(1);
        let cor;
        switch(linguagem){
            case 'python':
                cor = 'red';
                break;
            case 'php':
                cor = 'green';
                break;
            case 'java':
                cor = 'blue';
                break;
            case 'cpp':
                cor = 'yellow';
                break;
        }
        resultadoDiv.innerHTML += `
            <div>• ${linguagem}: ${porcentagem}%</div>
            <div style="width: ${porcentagem}%; height: 20px; background-color: ${cor};"></div>
        `;
    }
}

// Inicializar a exibição quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    exibirResultado();
});

