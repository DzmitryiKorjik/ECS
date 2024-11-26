fetch('../pages/header.html')
  .then(response => {
    if(!response.ok) {
      throw new Error(`Erreur de telecharegement ${response.status}`);
    }
    return response.text();
  })
.then(data => {
    document.getElementById('header').innerHTML = data;
  })
.catch(error => console.error('Erreur:', error));

fetch('../pages/sidebar.html')
  .then(response => {
    if(!response.ok) {
      throw new Error(`Erreur de telecharegement ${response.status}`);
    }
    return response.text();
  })
.then(data => {
    document.getElementById('sidebar').innerHTML = data;
  })
.catch(error => console.error('Erreur:', error));