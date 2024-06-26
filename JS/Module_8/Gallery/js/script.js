
    const getImagesButton = document.getElementById('getImagesButton');
    const imageContainer = document.getElementById('image-container');
    async function getImages() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random/20'); 
            if (!response.ok) {
                throw new Error('Что-то пошло не так');
            }
            const data = await response.json();
            if (data) {
                const url = data.message;
                displayImages(url);
            }
        } catch (error) {
            console.error('Проблема с загрузкой:', error);
        }
    }
    function displayImages(images) {
        imageContainer.innerHTML = '';
        images.forEach(url => {
            const image = document.createElement('img');
            image.src = url;
            image.alt = 'Картинка с сервера';
            imageContainer.appendChild(image);
        });
    }
    getImagesButton.addEventListener('click', getImages);
