const fs = require('fs');

function createTxtFile(fileName) {
    const content = generateFileContent(fileName);

    fs.writeFile(fileName, content, err => {
        if (err) {
            console.error("Une erreur s'est produite lors de la création du fichier :", err);
            return;
        }
        console.log(`Le fichier ${fileName} a été créé avec succès.`);
    });
}

function generateFileContent(fileName) {
    let content = '';
    
    // Génère 2048 lignes avec le même nom suivi d'un numéro différent
    for (let i = 1; i <= 2048; i++) {
        content += `${fileName}-${i}\n`;
    }

    return content;
}



