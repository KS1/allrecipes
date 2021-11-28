const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const password2 = document.querySelector('#password-signup2').value.trim();
  
    if (name && email && password && password2) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, password2}),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        document.location.replace('/account');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
