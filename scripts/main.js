let array = [];
let arraySize = document.getElementById('a_size').value;
let arraySpeed = document.getElementById('a_speed').value;
let arrayContainer = document.getElementById('array_container');

document.getElementById('a_generate').addEventListener('click', generateNewArray);
document.querySelectorAll('.algos button').forEach(button => {
    button.addEventListener('click', () => {
        let algo = button.innerText.toLowerCase();
        switch(algo) {
            case 'bubble': bubbleSort(); break;
            case 'selection': selectionSort(); break;
            case 'insertion': insertionSort(); break;
            case 'merge': mergeSort(); break;
           
        }
    });
});

function generateNewArray() {
    arrayContainer.innerHTML = '';
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    displayArray();
}

function displayArray() {
    arrayContainer.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div');
        div.classList.add('array-element');
        div.innerHTML = array[i];
        arrayContainer.appendChild(div);
    }
}

function swap(el1, el2) {
    let temp = el1.innerHTML;
    el1.innerHTML = el2.innerHTML;
    el2.innerHTML = temp;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener('DOMContentLoaded', function() {
    const algoButtons = document.querySelectorAll('.algos button');
    const description = document.getElementById('description');
    const complexity = document.getElementById('complexity');

    const algoDetails = {
        bubble: {
            description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
            complexity: 'Time Complexity: O(n^2) | Space Complexity: O(1)'
        },
        selection: {
            description: 'Selection Sort is an in-place comparison sorting algorithm. It has an O(n^2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.',
            complexity: 'Time Complexity: O(n^2) | Space Complexity: O(1)'
        },
        insertion: {
            description: 'Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
            complexity: 'Time Complexity: O(n^2) | Space Complexity: O(1)'
        },
        merge: {
            description: 'Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the order of equal elements is the same in the input and output.',
            complexity: 'Time Complexity: O(n log n) | Space Complexity: O(n)'
        },
        quick: {
            description: 'Quick Sort is an efficient, in-place, comparison-based, divide and conquer sorting algorithm. It can be faster than merge sort and heap sort on average cases.',
            complexity: 'Time Complexity: O(n log n) | Space Complexity: O(log n)'
        },
        heap: {
            description: 'Heap Sort is a comparison-based sorting algorithm. Heap sort is part of the selection sort family. Although somewhat slower in practice on most machines than a good implementation of quicksort, it has the advantage of a more favorable worst-case O(n log n) runtime.',
            complexity: 'Time Complexity: O(n log n) | Space Complexity: O(1)'
        }
    };

    algoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const algo = button.getAttribute('data-algo');
            const details = algoDetails[algo];
            if (details) {
                description.textContent = details.description;
                complexity.textContent = details.complexity;
            }
        });
    });
});
