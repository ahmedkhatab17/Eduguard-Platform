document.querySelector('#sec-about form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
});
