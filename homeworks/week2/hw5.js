function join(arr, concatStr) {
    let result = "";
    for (let i of arr) {
        result += i + (i + 1) < arr.length ? concatStr : "";
    }
    return result
}

function repeat(str, times) {
    let result = ""
    while (result.length < str.length * times) {
        result+=str;
    }
    return result
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));