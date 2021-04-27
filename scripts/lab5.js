function manipulate(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 50 - 25));
    }
    document.getElementById("inputArr").setAttribute("value", JSON.stringify(arr));
    document.getElementById("sumOfEven").setAttribute("value", getSumOfEven(arr));
    document.getElementById("productOfNegative").setAttribute("value", getProductOfNegative(arr));
    const maxElemWithIndexOfPositive = getMaxWithIndexOfPositive(arr);
    document.getElementById("maxElemWithIndexOfPositive").setAttribute("value", `Індекс: ${maxElemWithIndexOfPositive.get("index")}, Значення: ${maxElemWithIndexOfPositive.get("element")}`);
    const minElemWithIndexOfUneven = getMinWithIndexOfUneven(arr);
    document.getElementById("minElementWithIndexOfUneven").setAttribute("value", `Індекс: ${minElemWithIndexOfUneven.get("index")}, Значення: ${minElemWithIndexOfUneven.get("element")}`);
    document.getElementById("sortedArr").setAttribute("value", JSON.stringify(bubbleSort(arr)));
}

function getSumOfEven(arr) {
    let sumOfEven = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sumOfEven += arr[i];
    }
    return sumOfEven;
}

function getProductOfNegative(arr) {
    let productOfNegative = 1;
    arr.forEach(element => {
        if (element < 0) {
            productOfNegative = productOfNegative * element;
        }
    });
    return productOfNegative;
}

function getMaxWithIndexOfPositive(arr) {
    let indexesOFPositive = arr.reduce((ret_arr, number, index) => {
        if (number >= 0) ret_arr.push(index)
        return ret_arr
    }, [])
    let maxPositive = arr[indexesOFPositive[0]];
    let maxIndex = indexesOFPositive[0]
    for (let i = 0; i < indexesOFPositive.length; i++) {
        if (arr[indexesOFPositive[i]] > maxPositive) {
            maxPositive = arr[indexesOFPositive[i]];
            maxIndex = indexesOFPositive[i];
        }
    }
    const map = new Map();
    map.set("element", maxPositive);
    map.set("index", maxIndex);
    return map;
}

function getMinWithIndexOfUneven(arr) {
    let minUneven = arr[1];
    let minIndex = 1;
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] < minUneven) {
            minUneven = arr[i];
            minIndex = i;
        }
    }
    const map = new Map();
    map.set("element", minUneven);
    map.set("index", minIndex);
    return map;
}

function bubbleSort(arr) {
    let sortedArr = arr;;
    for (var i = 0; i < sortedArr.length; i++) {
        for (var j = 0; j < sortedArr.length - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                var temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}

function dropDown() {
    document.getElementById("dropdown").classList.toggle("show");
}

function dropDownVert() {
    document.getElementById("dropdown-vert").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("dropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
        var myDropdown = document.getElementById("dropdown-vert");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}