
fibonacci = n => {
    if (n <= 1) {
        console.log(0);
        return;
    }

    console.log(0);
    console.log(1);

    let pre = 0;
    let next = 1;

    for (let i = 2; i < n; i++) {
        console.log(pre + next);

        let temp = next;
        next = pre + next;
        pre = temp;
    }
}

fibonacci(7);