class Statement {
    constructor (title, contactPersonName, contactPersonNumber, adress, description, pet, price, img) {
        this.title = title;
        this.contactPersonName = contactPersonName;
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

// let statements;
// if(JSON.parse(localStorage.getItem('statements')) === null) {
//     statements = [];
// }else {
//     statements = JSON.parse(localStorage.getItem('statements'))
// } roca localstorage-dan mogvaqvs