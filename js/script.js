//pegando a class da imagem
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const jump = () => {
  //adicionando a classe jamp na imagem mario
  mario.classList.add('jump');  

  //removendo a class da imagem do mario
  setTimeout(() => {
    mario.classList.remove('jump')
  } , 500)
}

const loop = setInterval( () => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
} , 10)



//quando o usuario aperta alguma tecla a função jump será chamada.
document.addEventListener('keydown', jump);