'use strict';

let hours= ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Object literal for Seattle:
let Seatle={
    location:'Seatle',
    CustomerMin: 23,
    CustomerMax: 65,
    avgperSale: 6.3,
    randomCustomers:[],
    avgCOOKIES: [],
   


count:function(){
    for (let i=0; i<hours.length; i++){
    this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))
}
console.log(this.randomCustomers)
},
sellCookies:function(){
    for (let i=0; i<hours.length; i++){
        // let cookies=Math.round(this.avgCOOKIES)
        // let avgSale=console.log(Math.round(this.avgperSale));
    this.avgCOOKIES.push(random(this.randomCustomers[i]*6));
    }
    console.log(this.avgCOOKIES)
    // console.log(Math.round(6.3))
}
}
Seatle.count();
Seatle.sellCookies();
