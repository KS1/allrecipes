async function newFormHandler(event) {
    event.preventDefault();
 
    const response = await fetch('/:id', {
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
 
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
