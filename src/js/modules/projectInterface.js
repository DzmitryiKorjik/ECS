// "use strict";

// // la gestion de l'interface et l'interaction avec le serveur
// const container = document.getElementById("file-container");
// const addFolderButton = document.getElementById("add-folder");
// const addFileButton = document.getElementById("add-file");

// let files = [
//     {id: 1, name: "ECS", type: "folder"},
//     {id: 2, name: "WORDPRESS", type: "folder"},
//     {id: 3, name: "Normalize", type: "folder"},
//     {id: 4, name: "Java", type: "folder"}
// ];

// function renderFiles() {
//     container.innerHTML = "";
//     files.forEach((file) => {
//         const item = document.createElement("div");
       
//         item.className = "item";
//         item.innerHTML = `
//             <h3 onclick="navigateTo(${file.id})">${file.name}</h3>
//             <span class="badge">${file.type}</span>
//             <button onclick="deleteFile(${file.id})" class="button">Delete</button>
//         `;
//         container.appendChild(item);
//     });
// }

// // Ajout d'un dossier
// addFolderButton.addEventListener("click", () => {
//     const folderName = prompt("Enter folder name: ");
//     if (folderName) {
//         files.push({id: Date.now(), name: folderName, type: "folder"});
//         renderFiles();
//     }
// });

// // Ajout des filles
// addFileButton.addEventListener("click", () => {
//     const fileName = prompt("Enter file name: ");
//     if(fileName) {
//         files.push({id: Date.now(), name: fileName, type: "file"});
//         renderFiles();
//     }
// });

// // Suppression d'un fichier/dossier
// function deleteFile(id) {
//     files = files.filter((file) => file.id !== id);
//     renderFiles();
// }

// // Passage à un dossier
// function navigateTo(id) {
//     alert(`Navigating to folder ID: ${id}`)
// }

// renderFiles();
