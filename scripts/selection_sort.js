async function selectionSort() {
    const elements = document.querySelectorAll('.array-element');
    for (let i = 0; i < elements.length; i++) {
        let minIndex = i;
        elements[i].style.backgroundColor = 'red';

        for (let j = i + 1; j < elements.length; j++) {
            elements[j].style.backgroundColor = 'yellow';

            await sleep(500 / arraySpeed);

            if (parseInt(elements[j].innerHTML) < parseInt(elements[minIndex].innerHTML)) {
                if (minIndex !== i) elements[minIndex].style.backgroundColor = 'lightblue';
                minIndex = j;
                elements[minIndex].style.backgroundColor = 'red';
            } else {
                elements[j].style.backgroundColor = 'lightblue';
            }
        }

        if (minIndex !== i) {
            swap(elements[minIndex], elements[i]);
            elements[minIndex].style.backgroundColor = 'lightblue';
        }

        elements[i].style.backgroundColor = 'green';
    }
}
