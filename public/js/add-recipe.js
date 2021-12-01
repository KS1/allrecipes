async function newFormHandler(event) {
  event.preventDefault();
  console.log("inside")
  const dish = document.querySelector('#dish-name').value.trim();
  const dishDesc = document.querySelector('#dish-desc').value.trim();
  const prepTime = document.querySelector('#prep-time').value.trim();
  const ingredients = document.querySelector('#ingredients').value.trim();
  const directions1 = document.querySelector('#directions1').value.trim();
  const directions2 = document.querySelector('#directions2').value.trim();
  const directions3 = document.querySelector('#directions3').value.trim();
  const directions4 = document.querySelector('#directions4').value.trim();
  const chefName = document.querySelector('#chef-name').value.trim();
  const idName = document.querySelector('#id-name').value.trim();
  // const image = document.querySelector('#formfile').value;
  const dishPic ="/image/classic-shrimp-scampi.jpeg"
  const nutrition_facts = document.querySelector('#nutrition-facts').value.trim();
  // Send fetch request to add a new recipe
  const response = await fetch(`/api/add-recipe`, {
    method: 'POST',
    body: JSON.stringify({
      chefName,
      dish,
      idName,
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
  //if the recipe is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/account-recipe');
  } else {
    alert('Failed to add recipe');
  }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
console.log("outside")
