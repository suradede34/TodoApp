

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    this.classList.toggle('active'); 
    if (this.classList.contains('active')) {
        this.innerHTML = ''; 
    } else {
        this.innerHTML = ''; 
    }
});



const toggleButtons = document.querySelectorAll('.toggle');
const container = document.querySelector('.container', 'todoItem2' );

function toggleBackgroundColor() {
    if (container.style.backgroundColor === 'white' || container.style.backgroundColor === '') {
        container.style.backgroundColor = '#171823';
    } else {
        container.style.backgroundColor = 'white'; 
    }
}

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        toggleBackgroundColor();
    });
});

