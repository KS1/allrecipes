const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/acount-recipe/${id}`, {
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
    .addEventListener('#delete', delButtonHandler);
