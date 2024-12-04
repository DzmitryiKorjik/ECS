document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const fileBtn = document.querySelector('.file__btn');
    const fileList = document.querySelector('.file-list');

    // Открываем окно выбора файлов при клике на кнопку
    fileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Обработка выбранных файлов
    fileInput.addEventListener('change', (event) => {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Создаем элемент списка для файла
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${file.name}</span>
                <button class="delete-btn">Delete</button>
            `;

            // Добавляем обработчик для кнопки удаления
            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                listItem.remove();
            });

            // Добавляем элемент в список
            fileList.appendChild(listItem);
        }

        // Очищаем fileInput, чтобы можно было загружать те же файлы повторно
        fileInput.value = '';
    });
});
