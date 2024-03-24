const scriptURL = 'https://script.google.com/macros/s/AKfycbwmW0da4cLSHrub-WRrAbdEpJuWD3qan3CWOpDgSn7p1qCl07e1rZdCbPY6Cd8Oxxjr/exec'

const form = document.forms['contact-Us']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! Your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})