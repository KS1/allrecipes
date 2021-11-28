async function newFormHandler(event) {
    event.preventDefault();
 
    const response = await fetch('/:id', {
      method: 'POST',
      body: JSON.stringify({
        dish,
        dishDesc,
        prepTime,
        ingredients,
        directions1,
        directions2,
        directions3,
        directions4,
        dishPic,
        nutrition_facts
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
 
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
