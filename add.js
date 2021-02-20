const addBtn = document.getElementById('addBtn');
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const descriptionInput = document.getElementById('description');
const contactPersonNameInput = document.getElementById('contactPersonName');
const contactPersonNumberInput = document.getElementById('contactPersonNumber');
const imagePreviewDiv = document.getElementById('image-preview');
// const statements = JSON.parse(localStorage.getItem('statements'));
// let statements;
// if(JSON.parse(localStorage.getItem('statements')) === null) {
//     statements = [];
// }else {
//     statements = JSON.parse(localStorage.getItem('statements'))
// }
// if (statements === "null") {
//     statements = [];
//     addBtn.addEventListener('click', () => {
//         const addStatement = new Statement (titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imageInput.value);
//         if (titleInput.value === "" || contactPersonNameInput.value === "" || contactPersonNumberInput.value=== "" || descriptionInput.value==="" || imageInput.value==="") {
//             alert ('write required cell');
//             return;
//         } else { 
//             statements.push(addStatement);
//             localStorage.setItem('statements', JSON.stringify(statements));
//             window.location.href = 'index.html';
//             // document.location.href = 'index.html'; ერთი და იგივეა ეს და ზემოთ window.location.href
//             // console.log(addStatement);
//         }

//     })
// }else {
//     statements = JSON.parse(localStorage.getItem('statements'));
//     addBtn.addEventListener('click', () => {
//         const addStatement = new Statement (titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imageInput.value);
//         if (titleInput.value === "" || contactPersonNameInput.value === "" || contactPersonNumberInput.value=== "" || descriptionInput.value==="" || imageInput.value==="") {
//             alert ('write required cell');
//             return;
//         } else { 
//             statements.push(addStatement);
//             localStorage.setItem('statements', JSON.stringify(statements));
//             window.location.href = 'index.html';
//             // document.location.href = 'index.html'; ერთი და იგივეა ეს და ზემოთ window.location.href
//             // console.log(addStatement);
//         }

//     })
// }
// console.log(statements);

imageInput.addEventListener('change', function () {
    const imgPreviewInput = `<img src=${imageInput.value} alt="Image Preview" id="imagePreview"></img>`
    if (imageInput.value !== " ") {
        imagePreviewDiv.innerHTML += imgPreviewInput;
    }
    
    // const imagePreview = document.getElementById('imagePreview');
    // imagePreview.src = URL.createObjectURL(this.files[0]);

})

addBtn.addEventListener('click', () => {
    const addStatement = new Statement(titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imageInput.value);
    if (titleInput.value === "" || contactPersonNameInput.value === "" || contactPersonNumberInput.value === "" || descriptionInput.value === "" || imageInput.value === "") {
        alert('write required cell');
        return;
    // } else if (statements = []) {
    //     statements.push(addStatement);
    //     localStorage.setItem('statements', JSON.stringify(statements));
    //     window.location.href = 'index.html';
    //     // document.location.href = 'index.html'; ერთი და იგივეა ეს და ზემოთ window.location.href
    //     // console.log(addStatement);
    // } else {
    //     statements.push(addStatement);
    //     localStorage.setItem('statements', JSON.stringify(statements));
    //     window.location.href = 'index.html';
    //     // document.location.href = 'index.html'; ერთი და იგივეა ეს და ზემოთ window.location.href
    //     // console.log(addStatement);

    // } roca localstorage-ze vaketebt mashin gchirdeba, rom bagi ar iyos tan ise
    }else {
        addStatements(addStatement);
        
    }
})

const addStatements = (statement) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/statements",
        data: statement
      })
        .done(function( data ) {
          console.log(data);
          window.location.href='index.html';
        });
      
}

// addBtn.addEventListener('click', () => {
//     const addStatement = new Statement (titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imageInput.value);
//     if (titleInput.value === "" || contactPersonNameInput.value === "" || contactPersonNumberInput.value=== "" || descriptionInput.value==="" || imageInput.value==="") {
//         alert ('write required cell');
//         return;
//     } else { 
//         statements.push(addStatement);
//         localStorage.setItem('statements', JSON.stringify(statements));
//         window.location.href = 'index.html';
//         // document.location.href = 'index.html'; ერთი და იგივეა ეს და ზემოთ window.location.href
//         // console.log(addStatement);
//     }

// })

