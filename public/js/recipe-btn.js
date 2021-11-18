async function newFormHandler(event) {
    event.preventDefault();
    const dishName = document.querySelector('#recipe-btn').value;
 
    const response = await fetch(`/api/recipe`, {
      method: 'POST',
      body: JSON.stringify({
        dishName,
        dishDesc,
        prepTime,
        ingredients,
        directions,
        image,
        dishPic,
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
