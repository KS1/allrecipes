async function newFormHandler(event) {
    event.preventDefault();
    const dishName = document.querySelector('#dish-name').value.trim();
    const dishDesc = document.querySelector('#dish-desc').value.trim();
    const prepTime = document.querySelector('#prep-time').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const directions1 = document.querySelector('#directions1').value.trim();
    const directions2 = document.querySelector('#directions2').value.trim();
    const directions3 = document.querySelector('#directions3').value.trim();
    const directions4 = document.querySelector('#directions4').value.trim();
    const image = document.querySelector('#formfile').value;
    const nutritionFacts = document.querySelector('#nutrition-facts').value.trim();
    // Send fetch request to add a new recipe
    const response = await fetch(`/api/addRecipe`, {
      method: 'POST',
      body: JSON.stringify({
        dishName,
        dishDesc,
        prepTime,
        ingredients,
        directions1,
        directions2,
        directions3,
        directions4,
        image,
        nutritionFacts
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the recipe is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/api/userRecipe');
    } else {
      alert('Failed to add recipe');
    }
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
