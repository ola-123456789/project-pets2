const addBtn = document.getElementById('addBtn');
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const descriptionInput = document.getElementById('description');
const contactPersonNameInput = document.getElementById('contactPersonName');
const contactPersonNumberInput = document.getElementById('contactPersonNumber');

addBtn.addEventListener('click', () => {
    const addStatement = new Statement (titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imageInput.value);
    console.log(addStatement);
})

