

// const Statement1 = new Statement ('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

// const Statement2 = new Statement ('ჩუქდება თეთრი კნუტი, 2 თვის', 'ლუკა 2', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

// const Statement3 = new Statement ('ჩუქდება თეთრი კნუტი, 2 თვის', 'ლუკა 3', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');
// const Statement4 = new Statement ('ჩუქდება რუხი კნუტი, 4 თვის', 'ლუკა 4', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');
// const Statement5 = new Statement ('ჩუქდება რუხი კნუტი, 5 თვის', 'ლუკა 5', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

// const statementsArray = [Statement1, Statement2, Statement3, Statement4, Statement5];

const newsFeed = document.querySelector('.news-feed');
let deleteBtn;
// document.querySelectorAll(".deleteBtn")
// const appendStatements = (statement) => {
//     for (let i = 0; i < statementsArray.length; i++) {
//         const statementTemplate = `
//         <div class="newsfeed-style">
//         <p>${statement[i].title}</p>
//         <img src= ${statement[i].img} alt="Dog images" class="image-style">
//         <p>${statement[i].description}</p>
//         <p class="author-info">${statement[i].contactPerson}</p>
//         <p class="author-info">${statement[i].contactPersonNumber}</p>
//     </div>`
//     newsFeed.innerHTML += statementTemplate;
//     }
// }
// appendStatements (statementsArray);
// const statementsAsString = localStorage.getItem('statements');
// const statementsAsObject = statements; localstorage-dan roca aris

// const statementsAsObject = statements; roca localstorage-dan mogvaqvs


// console.log(statementsAsObject);
let statementsArray = [];
const appendStatements = (statement) => {
    const statementTemplate = `
        <div class="newsFeed-style">
        <p>${statement.title}</p>
        <img src= ${statement.img} alt="Dog images" class="image-style">
        <p>${statement.description}</p>
        <p class="author-info">${statement.contactPersonName}</p>
        <p class="author-info">${statement.contactPersonNumber}<span class="span-class"><button type="button"class="deleteBtn"  id=${statement.id}>DELETE</button></span></p>
    </div>`
    newsFeed.innerHTML += statementTemplate;
}

// 
const getPosts = () => {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/statements"
        // data: { name: "John", location: "Boston" }
    })
        .done(function (posts) {
            statementsArray = posts;
            appendAllStatements(posts);
            deleteBtn = document.querySelectorAll('.deleteBtn');
            // console.log(deleteBtn);
            for (let i = 0; i < deleteBtn.length; i++) {
                deleteBtn[i].addEventListener('click', () => {
                    $.ajax({
                        method: "DELETE",
                        url: `http://localhost:3000/statements/${deleteBtn[i].id}`
                        // data: { name: "John", location: "Boston" }
                    })
                        .done(function (posts) {
                            statementsArray = posts;
                            alert('statement has been deleted');
                            getPosts();

                            console.log(posts);
                        });
                })

            }
            // console.log(posts);
            // console.log(deleteBtn);
        });
}
getPosts();

const appendAllStatements = (statements) => {
    newsFeed.innerHTML = " ";
    for (let statement of statements) {
        appendStatements(statement);
    }
}
// let deleteBtn = document.querySelectorAll('.deleteBtn');

// console.log(deleteBtn);
// console.log(deleteBtn);
// for (let i = 0; i < deleteBtn.length; i++) {
//     deleteBtn[i].addEventListener('click', () => {
//         $.ajax({
//             method: "DELETE",
//             url: `http://localhost:3000/statements/${deleteBtn[i].id}`
//             // data: { name: "John", location: "Boston" }
//         })
//             .done(function (posts) {
//                 statementsArray = posts;
//                 alert('statement has been deleted');
//                 getPosts();

//                 console.log(posts);
//             });
//     })

// }





// appendAllStatements(statementsAsObject);




// for (let i = 0; i < statementsAsObject.length; i++) {
//     appendStatements(statementsAsObject[i]);
// }


const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    newsFeed.innerHTML = " ";
    if (searchInput.value === '') {
        appendAllStatements(statementsArray);
        return;
    }
    const searchOnPage = statementsArray.filter((statement) => {
        return statement.title.includes(searchInput.value);
    });

    console.log(searchOnPage);
    appendAllStatements(searchOnPage);

})


//igivea rac: 
// searchBtn.addEventListener('click', () => {
//     newsFeed.innerHTML = " ";
//     const searchOnPage = statementsArray.filter((statement) => {
//       if (statement.title === searchInput.value) {
//           return true;
//       }else {
//           return false;
//       }
//     });

//     console.log(searchOnPage);
//     appendAllStatements (searchOnPage);

// })






