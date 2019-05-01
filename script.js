const wrapButton = document.querySelector('.wrap_button');

wrapButton.addEventListener('click', hourseMove);

function hourseMove() {
    event.preventDefault();
    const wrapFirstNumber = document.querySelector('.wrap_first_number');    

    const div = document.createElement('div');
    div.className = "result";
    div.innerHTML = `Возможные варианты хода: ${move()} `;
    const wrap = document.querySelector('.wrap');
    const elem = wrap.appendChild(div);

    wrapButton.disabled = true;

    const button = document.createElement('button');
    button.className = "result_button";
    button.innerHTML = 'ok';
    const elemButton = div.appendChild(button);
    
    elemButton.addEventListener('click', close);

    function close() {
        elem.remove();
        wrapButton.disabled = false;
    }

    function move() {
        const chessX = ['a','b','c','d','e','f','g','h'];                
        const init = wrapFirstNumber.value.toLowerCase().split(''); 
        let indexX = chessX.indexOf(init[0]);
        let hourseY = +init[1];  

            if(indexX===-1 ||hourseY<1||hourseY>8) 
             throw alert ("Не верно введено поле"); 
        
        const moves = [];    

        const move = [
          [indexX - 2,hourseY + 1],
          [indexX - 2,hourseY - 1],
          [indexX - 1,hourseY - 2],
          [indexX - 1,hourseY + 2],
          [indexX + 2,hourseY + 1],
          [indexX + 2,hourseY - 1],
          [indexX + 1,hourseY - 2],
          [indexX + 1,hourseY + 2],
        ]    


      move.forEach(function(e) {           

         if (e[0] >= 0 && e[0]  <=7 && e[1]  > 0 && e[1]  < 9)
         {
           let x = chessX[e[0]];
           let y = e[1]
           moves.push(x+y);
           
         };  
      }); 
            
     return moves;    

 }
    return elem;
}




