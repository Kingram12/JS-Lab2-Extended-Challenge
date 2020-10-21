"use strict";

// const printSquare = (width) => {
//     for (let i = 0; i< width, i++) {
//         let s = "#".repeat(width);
//         console.log(s);
//     }
// };

// printSquare(3);

const printSquare = (width) => {
    for(let i = 0; i < width; i++) {
        let row = "";
        for(let j = 0; j < width; j++){
            row+= "#"
        }
        console.log(row);
    }
}

printSquare(3);

// row = row + "#"

const printTriangle = (width) => {
let row ="";
for(let i = 0; i < width; i++) {
    row += "#";
    console.log(row);
 }
}

printTriangle(5);