for(var i = 1; i < 21; i++){
    if(i % 2 !== 0){            // 1
        console.log(i)
    }
}

for(var i = 100; i >= 0; i-=3){
    if(i % 3 !== 0){            // 2
        console.log(i)
    }
}

for(var i = 4; i >= -3.5; i-=1.5){
    console.log(i)                  // 3
}

var sum = 0
for(var i = 1; i < 101; i++){       // 4
    sum += i
    console.log(sum);
}

var product = 1
for(var i = 1; i <= 12; i++){       // 5
    product = product * i
    console.log(product)
}