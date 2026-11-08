// let cars = ["BMW", "Toyota", "Audi", "Mercedes", "Ferrari", "Lamborghini", "Porsche", "Mehran", "Civic", "Honda" ];


// let car = {
//     name: "BMW",
//     brands: ["Toyota", "Audi", "Mercedes", "Ferrari", "Lamborghini", "Porsche", "Mehran", "Civic", "Honda" ]
// };

// console.log(car);


// let car1 = [
//     {
//         name: "Toyota",
//         brand: "Toyota"
//     },
//     {
//         name: "Audi",
//         brand: "Audi"
//     },
// ];

// console.log(car1);



// let subject_marks = [56, 78, 90, 45, 67];

// function totalMarks(subject_marks) {
//     let total = 0;
//     for (let i = 0; i < subject_marks.length; i++) {
//         total += subject_marks[i];
//     }
//     return total;
// }

// console.log(totalMarks(subject_marks));

// function totalpercentage(subject_marks) {
//     let total = totalMarks(subject_marks);
//     return (total / (500)) * 100;
// }

// console.log(totalpercentage(subject_marks));

// function grade(subject_marks) {
//     if (totalpercentage(subject_marks) >= 80) {
//         return "A+";
//     } else if (totalpercentage(subject_marks) >= 70) {
//         return "A";
//     } else if (totalpercentage(subject_marks) >= 60) {
//         return "B";
//     } else if (totalpercentage(subject_marks) >= 50) {
//         return "C";
//     } else {
//         return "F";
//     }
// }

// console.log(grade(subject_marks));


let products_price = [4000, 5000, 10000, 2000, 1000]

// calc total price 
function total_price(products_price) {
    let total = 0;
    for (let i = 0; i < products_price.length; i++) {
        total += products_price[i];
    }
    return total;
}

console.log(total_price(products_price));



function discount_price(products_price){
    let total = total_price (products_price)
    return (total * (20) / 100)
}
console.log(discount_price(products_price))

function after_discount(products_price){
    let total = total_price (products_price)
    return total - discount_price(products_price)
}
console.log(after_discount(products_price))