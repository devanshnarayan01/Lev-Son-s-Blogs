fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=technology')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('technology').src = imageSrc; 
  })
  .catch(error => console.error(error));

  fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=nutrition')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('nutrition').src = imageSrc; 
  })
  .catch(error => console.error(error));

  fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=travel')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('travel').src = imageSrc; 
  })
  .catch(error => console.error(error));

  fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=productivity')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('productivity').src = imageSrc; 
  })
  .catch(error => console.error(error));



  fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=mindfulness')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('mindfulness').src = imageSrc; 
  })
  .catch(error => console.error(error));


  fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=interior')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('interior').src = imageSrc; 
  })
  .catch(error => console.error(error));


  fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=environment')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('environment').src = imageSrc; 
  })
  .catch(error => console.error(error));


  fetch('https://api.unsplash.com/photos/random?client_id=aAJbyOLWmOwKAO7z0SaKtS47SvQzpDCUAl5s8fGLYqo&count=1&query=positivity')
  .then(response => response.json())
  .then(data => {
    const imageSrc = data[0].urls.regular; 
    document.getElementById('positivity').src = imageSrc; 
  })
  .catch(error => console.error(error));