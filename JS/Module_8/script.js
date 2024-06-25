document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  const serverEndpoint = 'https://dog.ceo/api/breeds/image/random/20'; // Replace with your server endpoint

  // Fetch images from the server
  fetch(serverEndpoint)
    .then(response => response.json())
    .then(images => {
      images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Image from server";
        gallery.appendChild(img);
      });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
});
