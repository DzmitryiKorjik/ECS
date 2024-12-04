document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const addFileBtn = document.getElementById('addFileBtn');
    const fileList = document.getElementById('fileList');

    addFileBtn.addEventListener('click', () => {
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select a file first!');
            return;
        }
        addFileToList(file);
        fileInput.value = ''; // Reset file input
    });

    function addFileToList(file) {
        const li = document.createElement('li');
        li.classList.add('file-item');

        const fileName = document.createElement('span');
        fileName.textContent = file.name;

        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = 'Download';
        downloadBtn.classList.add('download-btn');
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(file);
            link.download = file.name;
            link.click();
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => {
            const newName = prompt('Edit file name:', file.name);
            if (newName) {
                fileName.textContent = newName;
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            fileList.removeChild(li);
        });

        li.appendChild(fileName);
        li.appendChild(downloadBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        fileList.appendChild(li);
    }
});
