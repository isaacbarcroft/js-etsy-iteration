

let priceAverage = [];
const price = items.forEach(function (number){
    priceAverage.push(number['price']);
    })
    console.log(priceAverage);


    function addUpNumbers(){
        let total =0; 
    for (number of priceAverage){
       total +=number;
    }
    console.log(Math.round(total / 25));
    return (total /25);
    }
    
addUpNumbers();

const middle = items.filter(function (element){
    
    return element.price >= 14 && element.price < 18;
})

console.log(middle);


// const gBP = items.filter(function (element){

//     console.log(element['currency_code']);
//     if(element['currency_code'] === 'GBP'){
//         return element['title'];
//     };
   
// })

const gBP = items.filter(function(element){
    return element['currency_code'] === 'GBP';
});


console.log(`${gBP[0].title} costs €${gBP[0].price}`);  


const woodMaterials = items.filter(function(element, index, arr){
    return element.materials.includes('wood');
});
console.log(woodMaterials);
woodMaterials.forEach(function (element){
    console.log(`${woodMaterials[0].title} is made of wood`);
})


const numberMaterials = items.filter(function (element){
    return element.materials.length >= 8;
})
console.log(numberMaterials);




const whoMade = items.filter(function (element){
    return element['who_made'] === "i_did";
})

console.log(whoMade);