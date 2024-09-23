const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

// -----contact---

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); 

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Form submitted and cleared!');
});

