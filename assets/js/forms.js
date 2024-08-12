const formHTML = document.querySelector('#contact-form') || document.querySelector('form');

formHTML.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity()) {
        const formData = new FormData(form)

        const email = formData.get('email')
        const name = formData.get('name')
        const title = formData.get('subject')
        const message = formData.get('message')
        const phone = formData.get('phone')

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const body = JSON.stringify({
            name,
            email,
            message,
            title,
            phone
        });

        const opts = {
            method: "POST",
            headers,
            body,
            redirect: "follow"
        };
        // max request = 1 per user
        fetch("https://byteestudio.com/api/dreamvillians/send-contact-info", opts)
            .then(response => response.text())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    } else {
        alert("Please fill out all required fields.")
    }
});
