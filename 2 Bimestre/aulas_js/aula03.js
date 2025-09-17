let a = document.getElementById('nome');

Cor.onclick = () =>  {  
    a.style.background = 'blue';
}
Texto.onclick = () => {
    a.style.color = 'white';       
}         

Formatacao.onclick = () => {
    let dados = document.querySelector('.texto');  
    dados.classList.remove('active2');    
}
    

Formatacao2.onclick = () => {
    let dados = document.querySelector('.texto'); 
    dados.classList.add('active2');    
}