async function insertionSort() {
    const elements = document.querySelectorAll('.array-element');
    for (let i = 1; i < elements.length; i++) {
        let key = parseInt(elements[i].innerHTML);
        let j = i - 1;
        
        elements[i].style.backgroundColor = 'red';
        
        await sleep(500 / arraySpeed);
        
        while (j >= 0 && parseInt(elements[j].innerHTML) > key) {
            elements[j + 1].innerHTML = elements[j].innerHTML;
            j = j - 1;
            
            await sleep(500 / arraySpeed);
        }
        elements[j + 1].innerHTML = key;
        elements[i].style.backgroundColor = 'lightblue';
    }
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'green';
    }
}
