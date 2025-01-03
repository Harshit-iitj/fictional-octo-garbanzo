        // Zoom functionality for the first image
        let imageZoom = document.getElementById('imageZoom');
        imageZoom.addEventListener('mousemove', (event) => {
            imageZoom.style.setProperty('--display', 'block');
            let pointer = {
                x:  (event.offsetX * 100) / imageZoom.offsetWidth,
                y:  (event.offsetY * 100) / imageZoom.offsetHeight
            }
            imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
            imageZoom.style.setProperty('--zoom-y', pointer.y + '%');
        });
        imageZoom.addEventListener('mouseout', () => {
            imageZoom.style.setProperty('--display', 'none');
        });

        // Zoom functionality for the second image
        let secondImage = document.getElementById('secondimage');
        secondImage.addEventListener('mousemove', (event) => {
            secondImage.style.setProperty('--display', 'block');
            let pointer = {
                x:  (event.offsetX * 100) / secondImage.offsetWidth,
                y:  (event.offsetY * 100) / secondImage.offsetHeight
            }
            secondImage.style.setProperty('--zoom-x', pointer.x + '%');
            secondImage.style.setProperty('--zoom-y', pointer.y + '%');
        });
        secondImage.addEventListener('mouseout', () => {
            secondImage.style.setProperty('--display', 'none');
        });