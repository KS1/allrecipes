const delButtonHandler = async (event) => {
    console.log("hello 1")
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log("hello2")
        const response = await fetch(`/api/recipe/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/account-recipe');
        } else {
            alert('Failed to delete this recipe, please try it later.');
        }
    }
};


document
    .querySelector('.recipe-list')
    .addEventListener('click', delButtonHandler);

