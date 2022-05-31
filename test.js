//bai 1
// const a = Number(prompt(`nhap so a`));
// const b = Number(prompt(`nhap so b`));

// for (let i = a; i < b; i++) {
//     if 
// }


// bai 2
// let oneRow = "";
// function numberOneTriangle(number)
// {
//         for(let i=0;i<=number;i++)
//     {
// 	    oneRow += "*"
//         console.log(oneRow)
// 	}
// }

// numberOneTriangle(4)



let a = parseInt(prompt('nhap so a: '))
let b = parseInt(prompt('nhap so b: '))

if (a> 0 && b >0 && ( a >= b || a == b)) {
    alert("Nhap lai a < b, a > 0 , b > 0")
} else {
    for (let i = a; i <= b; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                console.log(i);
            }
        }
    }
}


