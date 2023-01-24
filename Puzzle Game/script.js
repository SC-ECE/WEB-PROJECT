const bgs = document.querySelectorAll('.bg');
const boxes = document.querySelectorAll('.box');
let moves = 15;
let temp = undefined;
setInterval(() => {
    setTimeout(() => {
        
    }, 1000);
}, 10000);
for(const bg of bgs){
    bg.addEventListener('dragstart',dragStart);
    bg.addEventListener('dragend',dragEnd);
}
for(const box of boxes){
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',dragDrop);
}

function dragStart() 
{
     temp = this.className;
     moves = moves-1;
    document.querySelector('.moves').innerHTML = `${moves} moves left`
    
}

function dragEnd(){
    this.className = temp;
    if(moves === 0){
        document.querySelector('.modal').style.display = 'flex'
        document.querySelector('.info').innerHTML = 'you lost moves completed...'
    }
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered'
}

function dragLeave(){
    this.className = 'box'
}

function dragDrop(){
    this.className = 'box'
    this.innerHTML = `<div class="${temp}"></div>`
    let y = document.querySelectorAll('.box');
    let v = 0;
    let count = 0;
    for(let u of y){
        v=v+1;
        if(u.innerHTML.substring(17,18) == v){
            count = count + 1;
        }
        else{
            break
        }
        if(count == 9){
            document.querySelector('.modal').style.display = 'flex'
            document.querySelector('.info').innerHTML = 'you won the game...'
        }
    }
}

