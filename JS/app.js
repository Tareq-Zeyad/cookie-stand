'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// from W3 schools
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// constructor function
function Shops(location, CustomerMin, CustomerMax, avgperSale) {
    this.cityLocation = location;
    this.min = CustomerMin;
    this.max = CustomerMax;
    this.avg = avgperSale;
    this.randomCustomers = [];
    this.avgCOOKIES = [];
    this.total = 0;

}

let Seattle = new Shops('Seattle', 23, 65, 6.3);
// console.log(Seattle);
let Tokyo = new Shops('Tokyo', 3, 24, 1.2);
let Dubai = new Shops('Dubai', 11, 38, 3.7);
let Paris = new Shops('Paris', 20, 38, 2.3);
let Lima = new Shops('Lima', 2, 16, 4.6);



Shops.prototype.count = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomCustomers.push(random(this.min, this.max))
    }
}
Seattle.count();
Tokyo.count();
Dubai.count();
Paris.count();
Lima.count();

Shops.prototype.sellCookies = function () {
    for (let i = 0; i < hours.length; i++) {

        this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avg))
        this.total += this.avgCOOKIES[i];

    }
}
Seattle.sellCookies();
Tokyo.sellCookies();
Dubai.sellCookies();
Paris.sellCookies();
Lima.sellCookies();

Shops.prototype.render = function () {



    //Table part
    let parent = document.getElementById('dailyLocationsTotal');

    //create table
    let table = document.createElement('table');

    // Append
    parent.appendChild(table);

    // creating the header row
    let headerRow = document.createElement('tr');

    //Append
    table.appendChild(headerRow);

    // make the heading

    for (let i = 0; i < hours.length; i++) {
        let Header = document.createElement('th');
        headerRow.appendChild(Header);
        // text content
        Header.textContent = hours[i]

    }

    // the Data rows
    let shopLocation = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

    for (let i = 0; i < shopLocation.length; i++) {
        let shopsRow = document.createElement('tr');
        table.appendChild(shopsRow);

        let Data = document.createElement('td');
        shopsRow.appendChild(Data);

        Data.textContent = shopLocation[i];

    }





}

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();






// This is for previous lab06
// Object literal for Seattle:
// let Seattle = {
//     location: 'Seattle',
//     CustomerMin: 23,
//     CustomerMax: 65,
//     avgperSale: 6.3,
//     randomCustomers: [],
//     avgCOOKIES: [],
//     total: 0,



//     count: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

//         }

//         console.log(this.randomCustomers)

//     },

//     sellCookies: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
//             this.total += this.avgCOOKIES[i];

//         }
//         console.log(this.avgCOOKIES)


//     },

//     render: function () {
//         // get the parent elemnt from HTMl
//         let parent = document.getElementById('parent');
//         console.log(parent)

//         // making the name tag.
//         let nameElement = document.createElement('h2');
//         console.log(nameElement)

//         // append to the parent.
//         parent.appendChild(nameElement);

//         // Text content.
//         nameElement.textContent = this.location;

//         // Making the list
//         let unorderedList = document.createElement('ul');

//         // appending to parent
//         parent.appendChild(unorderedList);

//         // start making list items.
//         for (let i = 0; i < hours.length; i++) {
//             // create the li
//             let LiElement = document.createElement('li');

//             // appent 
//             unorderedList.appendChild(LiElement);

//             // text content
//             // 6am: 16 cookies
//             LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


//         }

//         // make total
//         let totalElement = document.createElement('li');
//         // append 
//         unorderedList.appendChild(totalElement);
//         //test content
//         totalElement.textContent = `Total: ${this.total} cookies`;

//     }
// }


// Seattle.count();
// Seattle.sellCookies();
// Seattle.render();


// // Object literal for Tokyo:
// let Tokyo = {
//     location: 'Tokyo',
//     CustomerMin: 3,
//     CustomerMax: 24,
//     avgperSale: 1.2,
//     randomCustomers: [],
//     avgCOOKIES: [],
//     total: 0,



//     count: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

//         }

//         console.log(this.randomCustomers)

//     },

//     sellCookies: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
//             this.total += this.avgCOOKIES[i];

//         }
//         console.log(this.avgCOOKIES)


//     },

//     render: function () {
//         // get the parent elemnt from HTMl
//         let parent = document.getElementById('parent');
//         console.log(parent)

//         // making the name tag.
//         let nameElement = document.createElement('h2');
//         console.log(nameElement)

//         // append to the parent.
//         parent.appendChild(nameElement);

//         // Text content.
//         nameElement.textContent = this.location;

//         // Making the list
//         let unorderedList = document.createElement('ul');

//         // appending to parent
//         parent.appendChild(unorderedList);

//         // start making list items.
//         for (let i = 0; i < hours.length; i++) {
//             // create the li
//             let LiElement = document.createElement('li');

//             // appent 
//             unorderedList.appendChild(LiElement);

//             // text content
//             // 6am: 16 cookies
//             LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


//         }

//         // make total
//         let totalElement = document.createElement('li');
//         // append 
//         unorderedList.appendChild(totalElement);
//         //test content
//         totalElement.textContent = `Total: ${this.total} cookies`;

//     }
// }


// Tokyo.count();
// Tokyo.sellCookies();
// Tokyo.render();


// // Object literal for Dubai:
// let Dubai = {
//     location: 'Dubai',
//     CustomerMin: 11,
//     CustomerMax: 38,
//     avgperSale: 3.7,
//     randomCustomers: [],
//     avgCOOKIES: [],
//     total: 0,



//     count: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

//         }

//         console.log(this.randomCustomers)

//     },

//     sellCookies: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
//             this.total += this.avgCOOKIES[i];

//         }
//         console.log(this.avgCOOKIES)


//     },

//     render: function () {
//         // get the parent elemnt from HTMl
//         let parent = document.getElementById('parent');
//         console.log(parent)

//         // making the name tag.
//         let nameElement = document.createElement('h2');
//         console.log(nameElement)

//         // append to the parent.
//         parent.appendChild(nameElement);

//         // Text content.
//         nameElement.textContent = this.location;

//         // Making the list
//         let unorderedList = document.createElement('ul');

//         // appending to parent
//         parent.appendChild(unorderedList);

//         // start making list items.
//         for (let i = 0; i < hours.length; i++) {
//             // create the li
//             let LiElement = document.createElement('li');

//             // appent 
//             unorderedList.appendChild(LiElement);

//             // text content
//             // 6am: 16 cookies
//             LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


//         }

//         // make total
//         let totalElement = document.createElement('li');
//         // append 
//         unorderedList.appendChild(totalElement);
//         //test content
//         totalElement.textContent = `Total: ${this.total} cookies`;

//     }
// }


// Dubai.count();
// Dubai.sellCookies();
// Dubai.render();

// // Object literal for Paris:
// let Paris = {
//     location: 'Paris',
//     CustomerMin: 20,
//     CustomerMax: 38,
//     avgperSale: 2.3,
//     randomCustomers: [],
//     avgCOOKIES: [],
//     total: 0,



//     count: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

//         }

//         console.log(this.randomCustomers)

//     },

//     sellCookies: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
//             this.total += this.avgCOOKIES[i];

//         }
//         console.log(this.avgCOOKIES)


//     },

//     render: function () {
//         // get the parent elemnt from HTMl
//         let parent = document.getElementById('parent');
//         console.log(parent)

//         // making the name tag.
//         let nameElement = document.createElement('h2');
//         console.log(nameElement)

//         // append to the parent.
//         parent.appendChild(nameElement);

//         // Text content.
//         nameElement.textContent = this.location;

//         // Making the list
//         let unorderedList = document.createElement('ul');

//         // appending to parent
//         parent.appendChild(unorderedList);

//         // start making list items.
//         for (let i = 0; i < hours.length; i++) {
//             // create the li
//             let LiElement = document.createElement('li');

//             // appent 
//             unorderedList.appendChild(LiElement);

//             // text content
//             // 6am: 16 cookies
//             LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


//         }

//         // make total
//         let totalElement = document.createElement('li');
//         // append 
//         unorderedList.appendChild(totalElement);
//         //test content
//         totalElement.textContent = `Total: ${this.total} cookies`;

//     }
// }


// Paris.count();
// Paris.sellCookies();
// Paris.render();


// // Object literal for Lima:
// let Lima = {
//     location: 'Lima',
//     CustomerMin: 2,
//     CustomerMax: 16,
//     avgperSale: 4.6,
//     randomCustomers: [],
//     avgCOOKIES: [],
//     total: 0,



//     count: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

//         }

//         console.log(this.randomCustomers)

//     },

//     sellCookies: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
//             this.total += this.avgCOOKIES[i];

//         }
//         console.log(this.avgCOOKIES)


//     },

//     render: function () {
//         // get the parent elemnt from HTMl
//         let parent = document.getElementById('parent');
//         console.log(parent)

//         // making the name tag.
//         let nameElement = document.createElement('h2');
//         console.log(nameElement)

//         // append to the parent.
//         parent.appendChild(nameElement);

//         // Text content.
//         nameElement.textContent = this.location;

//         // Making the list
//         let unorderedList = document.createElement('ul');

//         // appending to parent
//         parent.appendChild(unorderedList);

//         // start making list items.
//         for (let i = 0; i < hours.length; i++) {
//             // create the li
//             let LiElement = document.createElement('li');

//             // appent 
//             unorderedList.appendChild(LiElement);

//             // text content
//             // 6am: 16 cookies
//             LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


//         }

//         // make total
//         let totalElement = document.createElement('li');
//         // append 
//         unorderedList.appendChild(totalElement);
//         //test content
//         totalElement.textContent = `Total: ${this.total} cookies`;

//     }
// }


// Lima.count();
// Lima.sellCookies();
// Lima.render();
