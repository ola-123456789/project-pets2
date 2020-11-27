

// const Statement1 = new Statement ('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

// const Statement2 = new Statement ('ჩუქდება თეთრი კნუტი, 2 თვის', 'ლუკა 2', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

// const Statement3 = new Statement ('ჩუქდება თეთრი კნუტი, 2 თვის', 'ლუკა 3', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');
// const Statement4 = new Statement ('ჩუქდება რუხი კნუტი, 4 თვის', 'ლუკა 4', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');
// const Statement5 = new Statement ('ჩუქდება რუხი კნუტი, 5 თვის', 'ლუკა 5', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

// const statementsArray = [Statement1, Statement2, Statement3, Statement4, Statement5];

const newsFeed = document.querySelector('.news-feed');

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
const statementsAsString = localStorage.getItem('statements');
const statementsAsObject = JSON.parse(statementsAsString);
console.log(statementsAsObject);

const appendStatements = (statement) => {
    const statementTemplate = `
        <div class="newsfeed-style">
        <p>${statement.title}</p>
        <img src= ${statement.img} alt="Dog images" class="image-style">
        <p>${statement.description}</p>
        <p class="author-info">${statement.contactPerson}</p>
        <p class="author-info">${statement.contactPersonNumber}</p>
    </div>`
    newsFeed.innerHTML += statementTemplate;
}

// const appendAllStatements = (statements) => {
//     for (const statement of statements) {
//         appendStatements(statement);
//     }
// }
// appendAllStatements(statementsAsObject);

for (let i = 0; i < statementsAsObject.length; i++) {
    appendStatements(statementsAsObject[i]);
}


// const searchInput = document.getElementById('searchInput');
// const searchBtn = document.getElementById('searchBtn');

// searchBtn.addEventListener('click', () => {
//     newsFeed.innerHTML = " ";
//     if (searchInput.value === '') {
//         appendAllStatements (statementsArray);
//         return;
//     }
//     const searchOnPage = statementsArray.filter((statement) => {
//         return statement.title.includes(searchInput.value);
//     });

//     console.log(searchOnPage);
//     appendAllStatements (searchOnPage);

// })

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






