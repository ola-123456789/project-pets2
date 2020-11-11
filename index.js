class Statement {
    constructor (title, contactPerson, contactPersonNumber, adress, description, pet, price, img) {
        this.title = title;
        this.contactPerson = contactPerson;
        this.contactPersonNumber = contactPersonNumber;
        this. adress = adress;
        this. description = description;
        this.pet = pet;
        this. price = price;
        this.img = img;
    }

}

class Pets {
    constructor(category, age, gender) {
        this.category = category;
        this.age = age;
        this.gender = gender;
    }
}
class Cat extends Pets {
    constructor(name, age, toiletFriendly) {
        super(name, age);
    }
}

const Statement1 = new Statement ('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

const Statement2 = new Statement ('ჩუქდება თეთრი კნუტი, 2 თვის', 'ლუკა 2', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

const Statement3 = new Statement ('ჩუქდება თეთრი კნუტი, 3 თვის', 'ლუკა 3', '599931926', 'თბილისი', 'არის ძალიან საყვარელი',null,0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*');

const statementsArray = [Statement1, Statement2, Statement3];

const newsFeed = document.querySelector('.news-feed');

const appendStatements = (statement) => {
    for (let i = 0; i < statementsArray.length; i++) {
        const statementTemplate = `
        <div class="newsfeed-style">
        <p>${statement.title}</p>
        <img src= ${statement.img}>
        <p>${statement.description}</p>
        <p class="author-info">${statement.contactPerson}</p>
        <p class="author-info">${statement.contactPersonNumber}</p>
    </div>`
    newsFeed.innerHTML(statementTemplate);
    }
}



