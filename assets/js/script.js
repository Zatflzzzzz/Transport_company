const modal = document.getElementById('orderModal');
const orderButtons = document.querySelectorAll('.btn-order');
const closeModal = document.querySelector('.modal-close');

orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelector('.btn-callback').addEventListener('click', function() {
    document.getElementById('orderModal').style.display = 'block';
});
