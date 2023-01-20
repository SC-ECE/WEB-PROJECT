const bubbleSort = async () => {
    let bars = document.querySelectorAll('.bar'); 

    for(let i = 0; i < bars.length -1; i++) {
        for(let j = 0; j < bars.length-i-1; j++){
            
            //When two elements are compared their colors are set to blue...
            bars[j].style.background = 'blue'; 
            bars[j+1].style.background = 'blue'; 
            if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)) {
                await sleep(delay); 
                swapElements(bars[j], bars[j+1]); 
            }
            // Whzn two elements are swap their color change to red...
            bars[j].style.background = 'red'; 
            bars[j+1].style.background = 'red' ; 
        }
        bars[bars.length-i-1].style.background = 'green'; // The color of the last element is set to green, because he is sorted...
    }

    bars[0].style.background = 'green'; 
}

const bubbleSortBtn = document.querySelector('.bubbleSort'); 

bubbleSortBtn.addEventListener('click', async() => {
    disableBtn(); 
    disableSlideInputs(); 
    await bubbleSort(); 
   algoInfo.innerHTML = `  <p>Bubble Sort: </p> 
                           <p> Space Complexity: O(1)</p> 
                          <p> Time Complexity:  O(n^2) </p>`
    enableBtn(); 
    enableSlideInputs(); 
})