const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/userRecipe');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-from')
  .addEventListener('submit', signupFormHandler);
