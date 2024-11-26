"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.header__dropdown-toggle');
  const menu = document.querySelector('.header__dropdown-menu');

  toggle.addEventListener('click', (event) => {
      event.preventDefault(); 
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
     
      toggle.setAttribute('aria-expanded', !isExpanded);
   
      if (isExpanded) {
          menu.style.display = 'none';
      } else {
          menu.style.display = 'block';
      }
  });

  document.addEventListener('click', (event) => {
      if (!toggle.contains(event.target) && !menu.contains(event.target)) {
          menu.style.display = 'none';
          toggle.setAttribute('aria-expanded', 'false');
      }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('repo-list');
  
    // Пример данных (замените на API-запрос при необходимости)
    const repoData = [
      { name: '.github', type: 'folder', lastUpdated: '2 weeks ago' },
      { name: 'bin', type: 'folder', lastUpdated: '3 months ago' },
      { name: 'CHANGELOG.md', type: 'file', lastUpdated: '10 hours ago' },
    ];
  
    // Функция для отображения содержимого
    function displayRepoContents(data) {
      repoList.innerHTML = ''; // Очищаем список
  
      data.forEach(item => {
        // Создаем контейнер для элемента
        const itemDiv = document.createElement('div');
        itemDiv.className = `repo__item repo__item--${item.type}`;
  
        // Иконка
        const icon = document.createElement('span');
        icon.className = 'repo__item-icon';
        icon.textContent = item.type === 'folder' ? '📁' : '📄';
  
        // Имя файла/папки
        const name = document.createElement('span');
        name.className = 'repo__item-name';
        name.textContent = item.name;
  
        // Время последнего обновления
        const lastUpdated = document.createElement('span');
        lastUpdated.className = 'repo__item-updated';
        lastUpdated.textContent = item.lastUpdated;
  
        // Собираем элементы
        itemDiv.appendChild(icon);
        itemDiv.appendChild(name);
        itemDiv.appendChild(lastUpdated);
  
        // Добавляем элемент в список
        repoList.appendChild(itemDiv);
      });
    }
  
    // Отобразить данные
    displayRepoContents(repoData);
  });
  
  fetch('https://api.github.com/repos/<owner>/<repo>/contents')
  .then(response => response.json())
  .then(data => {
    const repoData = data.map(item => ({
      name: item.name,
      type: item.type === 'dir' ? 'folder' : 'file',
      lastUpdated: item.commit ? new Date(item.commit.author.date).toLocaleDateString() : 'Unknown',
    }));
    displayRepoContents(repoData);
  })
  .catch(error => console.error('Error fetching data:', error));

