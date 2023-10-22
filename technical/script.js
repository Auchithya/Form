document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sample-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const message = form.message.value;

        // You can add your validation logic here

        console.log('First Name:', fname);
        console.log('Last Name:', lname);
        console.log('Email Address:', email);
        console.log('Address:', message);

        // Clear the form fields
        form.reset();
    });
});
