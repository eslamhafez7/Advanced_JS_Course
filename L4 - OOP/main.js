// class Shape {
//     constructor(n, i, t) {
//         this.name = n,
//         this.id = i,
//         this.title = t
//     }
// }

class Person {
    constructor(name, color, status) {
        this.customName = name,
        this.customColor = color,
        this.customStauts = status
    }
    move() {
        console.log(this.customName + " is Moving")
    }
    jump() {
        console.log( this.customName +  " is jumping")
    }
}
let eslam = new Person("eslam", "Black", "Married");
let ahmed = new Person("ahmed", "red", "Married");
let khaled = new Person("khaled", "brown", "Married");
let mai = new Person("mai", "green", "Married");

eslam.move();
khaled.jump();

console.log(eslam.customName);
console.log(eslam.customColor);
console.log(eslam.customStauts);

console.log("#".repeat(10));

console.log(ahmed.customName);
console.log(ahmed.customColor);
console.log(ahmed.customStauts);

console.log("#".repeat(10));

console.log(khaled.customName);
console.log(khaled.customColor);
console.log(khaled.customStauts);

console.log("#".repeat(10));

console.log(mai.customName);
console.log(mai.customColor);
console.log(mai.customStauts);
console.log("Hello World");

