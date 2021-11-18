async function newFormHandler(event) {
    event.preventDefault();
    const dishName = document.querySelector('#dish-name').value;
    const dishDesc = document.querySelector('#dish-desc').value;
    const prepTime = document.querySelector('#prep-time').value;
    const ingredients = document.querySelector('#ingredients').value;
    const directions = document.querySelector('#directions').value;
    const image = document.querySelector('#formfile').value;
    const nutritionFacts = document.querySelector('#nutrition-facts').value;
    // Send fetch request to add a new recipe
    const response = await fetch(`/`, {
      method: 'POST',
      body: JSON.stringify({
        dishName,
        dishDesc,
        prepTime,
        ingredients,
        directions,
        image,
        nutritionFacts
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the recipe is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add recipe');
    }
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
