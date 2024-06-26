async function bubbleSort() {
    const elements = document.querySelectorAll('.array-element');
    for (let i = 0; i < elements.length - 1; i++) {
        for (let j = 0; j < elements.length - i - 1; j++) {
            elements[j].style.backgroundColor = 'red';
            elements[j + 1].style.backgroundColor = 'red';

            await sleep(500 / arraySpeed);

            if (parseInt(elements[j].innerHTML) > parseInt(elements[j + 1].innerHTML)) {
                swap(elements[j], elements[j + 1]);
            }

            elements[j].style.backgroundColor = 'lightblue';
            elements[j + 1].style.backgroundColor = 'lightblue';
        }
        elements[elements.length - i - 1].style.backgroundColor = 'green';
    }
    elements[0].style.backgroundColor = 'green';
}
