function pyramideDiese(n) {
    for (let i = 1; i <= n; i++) {
        let pyramide = '';
        let Diese = '';
        
        for (let j = 1; j <= n - i; j++) {
            pyramide += ' ';
        }
        
        for (let k = 1; k <= i; k++) {
            Diese += '#';
        }
        
        console.log(pyramide + Diese + '  ' + Diese + pyramide);
    }
}

pyramideDiese(4);
