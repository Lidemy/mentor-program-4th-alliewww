function printStars(n) {
    if (isNaN(n)) return
    for (let i = 0; i < n; i++) {
        console.log("*");
    }
}

printStars(5);
