// "use strict";

// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// let files = [
//   { id: 1, name: "ECS", type: "folder" },
//   { id: 2, name: "WORDPRESS", type: "folder" },
//   { id: 3, name: "Normalize", type: "folder" },
//   { id: 4, name: "JAVA_GB", type: "folder" },
// ];

// // Obtenir la liste des fichiers
// app.get("/files", (req, res) => {
//   res.json(files);
// });

// // Ajout d'un nouveau fichier/dossier
// app.post("/files", (req, res) => {
//   const { name, type } = req.body;
//   files.push({ id: Date.now(), name, type });
//   res.json({ message: "File added" });
// });

// //  Delete fichier/dossier
// app.delete("/files/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   files = files.filter((file) => file.id !== id);
//   res.json({ message: "File deleted" });
// });

// //  Navigate to folder
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


// // Получение данных с сервера
// async function fetchFiles() {
//     const response = await fetch("http://localhost:5000/files");
//     files = await response.json();
//     renderFiles();
//   }
  
//   // Добавление файла/папки
//   async function addFileOrFolder(name, type) {
//     await fetch("http://localhost:5000/files", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, type }),
//     });
//     fetchFiles();
//   }
  
//   // Удаление файла/папки
//   async function deleteFile(id) {
//     await fetch(`http://localhost:5000/files/${id}`, { method: "DELETE" });
//     fetchFiles();
//   }
  
//   // Переход на папку (реализация логики)
//   function navigateTo(id) {
//     console.log(`Navigate to folder ${id}`);
//   }
  
//   // Инициализация
//   fetchFiles();
  