const addBtn = document.getElementById('addBtn');
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const descriptionInput = document.getElementById('description');
const contactPersonNameInput = document.getElementById('contactPersonName');
const contactPersonNumberInput = document.getElementById('contactPersonNumber');
const imagePreviewDiv = document.getElementById('image-preview');
const statements = JSON.parse(localStorage.getItem('statements'));

imageInput.addEventListener('change', function() {
    const imgPreviewInput = `<img src=${imageInput.value} alt="Image Preview" id="imagePreview"></img>`
    imagePreviewDiv.innerHTML += imgPreviewInput;
    // const imagePreview = document.getElementById('imagePreview');
    // imagePreview.src = URL.createObjectURL(this.files[0]);
    
})

addBtn.addEventListener('click', () => {
    const addStatement = new Statement (titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imageInput.value);
    statements.push(addStatement);
    localStorage.setItem('statements', JSON.stringify(statements));
    window.location.href = 'index.html';
    // document.location.href = 'index.html'; ერთი და იგივეა ეს და ზემოთ window.location.href
    // console.log(addStatement);
})

