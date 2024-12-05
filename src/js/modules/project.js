document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const fileBtn = document.querySelector('.file__btn');
    const fileList = document.querySelector('.file-list');

    // Ouvrez la fenêtre de sélection des fichiers en cliquant sur le bouton
    fileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Traitement des fichiers sélectionnés
    fileInput.addEventListener('change', (event) => {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Créer un élément de liste pour un fichier
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${file.name}</span>
                <button class="delete-btn">Delete</button>
            `;

            // Ajouter un gestionnaire pour le bouton de suppression
            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                listItem.remove();
            });

            // Ajouter un élément à la liste
            fileList.appendChild(listItem);
        }

        // Effacer fileInput pour que les mêmes fichiers puissent être téléchargés à nouveau
        fileInput.value = '';
    });
});
