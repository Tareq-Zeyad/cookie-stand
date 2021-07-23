'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// from W3 schools
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let shops = [];

// constructor function
function Shop(location, CustomerMin, CustomerMax, avgperSale) {
    this.cityLocation = location;
    this.min = CustomerMin;
    this.max = CustomerMax;
    this.avg = avgperSale;
    this.randomCustomers = [];
    this.avgCOOKIES = [];
    this.total = 0;
    shops.push(this);

}

let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);



Shop.prototype.count = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomCustomers.push(random(this.min, this.max))
    }
}


Shop.prototype.sellCookies = function () {
    for (let i = 0; i < hours.length; i++) {

        this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avg))
        this.total += this.avgCOOKIES[i];

    }
}



// global table for all elements
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);
console.log(parent);

// function for header
function makeHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let firstHeader = document.createElement('th');
    headerRow.appendChild(firstHeader);
    firstHeader.textContent = 'Shop';

    for (let i = 0; i < hours.length; i++) {
        let hoursRow = document.createElement('th');
        headerRow.appendChild(hoursRow);
        hoursRow.textContent = hours[i];

    }
    let lastHeader = document.createElement('th');
    headerRow.appendChild(lastHeader);
    lastHeader.textContent = 'Daily location totoal';

}

makeHeader();





// render method function for table
Shop.prototype.render = function () {
    let cityRow = document.createElement('tr');
    table.appendChild(cityRow);

    let cityName = document.createElement('td');
    cityRow.appendChild(cityName);

    cityName.textContent = this.cityLocation;

    for (let i = 0; i < hours.length; i++) {
        let cookiesTd = document.createElement('td');
        cityRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.avgCOOKIES[i];

    }
    let totalTd = document.createElement('td');
    cityRow.appendChild(totalTd);

    totalTd.textContent = this.total;


}

// get form by id
let cookieshop = document.getElementById('form');

// add event listener
cookieshop.addEventListener('submit', submitter);

function submitter (event) {
    console.log(event);
    event.preventDefault();

    let city= event.target.LocationName.value;
    console.log(city)

    let maxCustomer= parseInt (event.target.MaxCustomer.value);
    console.log(maxCustomer)

    let minCustomer= parseInt (event.target.MinCustomer.value);
    console.log(minCustomer)

    let Avgcookies= parseInt (event.target.Avg.value);
    console.log(Avgcookies)

    let addCity= new Shop(city, maxCustomer, minCustomer, Avgcookies);

    

    table.textContent="";
    addCity.count();
    addCity.sellCookies();

    makeHeader();

    for (let i = 0; i < shops.length; i++) {
       
        shops[i].render();
    
    }

    makeFooter();

    
}





// making for loop to call each method for each location
for (let i = 0; i < shops.length; i++) {
    shops[i].count();
    shops[i].sellCookies();
    shops[i].render();

}



function makeFooter() {
    // make the row
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    let firstCell = document.createElement('th');

    footerRow.appendChild(firstCell);
    firstCell.textContent = 'Totals';

    let totalOfTotals = 0;

    for (let i = 0; i < hours.length; i++) {
        let total = 0;
        for (let j = 0; j < shops.length; j++) {
            total += shops[j].avgCOOKIES[i];

            totalOfTotals += shops[j].avgCOOKIES[i];

        }
        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = total;

    }
    let lastTh = document.createElement('th');
    footerRow.appendChild(lastTh);
    lastTh.textContent = totalOfTotals;
}
makeFooter();







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
