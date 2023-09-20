let etoile = "";
function afficherEtoile(n) {
    if (n <= 0) {
        console.log("Mettez une taille valide !!");
    } else {
        for (let y = 0; y <= n * 4; y++) {
            for (let x = 0; x <= n * 8; x++) {
                // Côté du haut
                if (x == n * 4 + y && y <= n) {
                    etoile += "*";
                } else if (x == n * 4 - y && y <= n) {
                    etoile += "*";
                } else if ((y == n && x <= n* 3) || (y == n && x >= n * 5)) {
                    etoile += "*";
                }
                // Côté droit
                else if (x == n * 9 - y && y <= n * 2 - 1) {
                    etoile += "*";
                } else if (x == n * 5 + y && y >= n * 2) {
                    etoile += "*"; 
                }
                // Côté gauche
                else if ((y == n * 3 && x <= n * 3) || (y == n * 3 && x >= n* 5)) {
                    etoile += "*";
                } else if (x == n * 3 - y && y >= n * 2) {
                    etoile += "*";
                } else if (x == y - n && y <= n * 2) {
                    etoile += "*";
                }
                // Côté bas
                else if (x == n + y - n && y >= n* 3) {
                    etoile += "*";
                } else if (x == n * 8 - y && y >= n * 3) {
                    etoile += "*";
                } else {
                    etoile += " ";
                }
            }
            etoile += "\n";
        }
        console.log(etoile);
    }
}
afficherEtoile(3);