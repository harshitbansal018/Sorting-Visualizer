async function mergeSort() {
    async function merge(arr, l, m, r) {
        const n1 = m - l + 1;
        const n2 = r - m;

        let left = new Array(n1);
        let right = new Array(n2);

        for (let i = 0; i < n1; i++)
            left[i] = parseInt(arr[l + i].innerHTML);
        for (let j = 0; j < n2; j++)
            right[j] = parseInt(arr[m + 1 + j].innerHTML);

        let i = 0, j = 0, k = l;

        while (i < n1 && j < n2) {
            await sleep(500 / arraySpeed);

            if (left[i] <= right[j]) {
                arr[k].innerHTML = left[i];
                i++;
            } else {
                arr[k].innerHTML = right[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            await sleep(500 / arraySpeed);
            arr[k].innerHTML = left[i];
            i++;
            k++;
        }

        while (j < n2) {
            await sleep(500 / arraySpeed);
            arr[k].innerHTML = right[j];
            j++;
            k++;
        }
    }

    async function mergeSortHelper(arr, l, r) {
        if (l >= r) return;

        let m = l + Math.floor((r - l) / 2);

        await mergeSortHelper(arr, l, m);
        await mergeSortHelper(arr, m + 1, r);
        await merge(arr, l, m, r);

        for (let i = l; i <= r; i++) {
            arr[i].style.backgroundColor = 'green';
        }
    }

    const elements = document.querySelectorAll('.array-element');
    await mergeSortHelper(elements, 0, elements.length - 1);
}
