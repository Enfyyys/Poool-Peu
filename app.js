// Import des fonctions nécessaires
import { generateArrayNumber } from "./functions.js";
import { createTxtFile } from "./generator.js";

// Définition de la fonction de génération du pool
export function generatePool() {

    let running = false;

    const start = () => {
        if (!running) {
            running = true;
            console.log("Processus démarré.");
            // Fonction interne pour générer le fichier
            const generateFile = () => {
                const  {chaineDeNombres, array}  = generateArrayNumber();
                createTxtFile(chaineDeNombres, array);
                console.log(`Fichier ${chaineDeNombres} généré.`);
                // Appel récursif pour continuer le processus tant que "stop" n'est pas reçu
                if (running) {
                    setTimeout(generateFile, 500); // Exemple : répétition toutes les 1 seconde
                }
            };
            generateFile(); 
        } else {
            console.log("Le processus est déjà en cours.");
        }
    };

    const stop = () => {
        if (running) {
            running = false;
            console.log("Processus arrêté.");
        } else {
            console.log("Le processus n'est pas en cours.");
        }
    };

    return { start, stop };
}
