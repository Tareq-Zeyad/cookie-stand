'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// from W3 schools
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Object literal for Seattle:
let Seatle = {
    location: 'Seatle',
    CustomerMin: 23,
    CustomerMax: 65,
    avgperSale: 6.3,
    randomCustomers: [],
    avgCOOKIES: [],
    total: 0,



    count: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

        }

        console.log(this.randomCustomers)

    },

    sellCookies: function () {
        for (let i = 0; i < hours.length; i++) {

            this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
            this.total += this.avgCOOKIES[i];

        }
        console.log(this.avgCOOKIES)


    },

    render: function () {
        // get the parent elemnt from HTMl
        let parent = document.getElementById('parent');
        console.log(parent)

        // making the name tag.
        let nameElement = document.createElement('h2');
        console.log(nameElement)

        // append to the parent.
        parent.appendChild(nameElement);

        // Text content.
        nameElement.textContent = this.location;

        // Making the list
        let unorderedList = document.createElement('ul');

        // appending to parent
        parent.appendChild(unorderedList);

        // start making list items.
        for (let i = 0; i < hours.length; i++) {
            // create the li
            let LiElement = document.createElement('li');

            // appent 
            unorderedList.appendChild(LiElement);

            // text content
            // 6am: 16 cookies
            LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


        }

        // make total
        let totalElement = document.createElement('li');
        // append 
        unorderedList.appendChild(totalElement);
        //test content
        totalElement.textContent = `Total: ${this.total} cookies`;

    }
}


Seatle.count();
Seatle.sellCookies();
Seatle.render();


// Object literal for Tokyo:
let Tokyo = {
    location: 'Tokyo',
    CustomerMin: 3,
    CustomerMax: 24,
    avgperSale: 1.2,
    randomCustomers: [],
    avgCOOKIES: [],
    total: 0,



    count: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

        }

        console.log(this.randomCustomers)

    },

    sellCookies: function () {
        for (let i = 0; i < hours.length; i++) {

            this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
            this.total += this.avgCOOKIES[i];

        }
        console.log(this.avgCOOKIES)


    },

    render: function () {
        // get the parent elemnt from HTMl
        let parent = document.getElementById('parent');
        console.log(parent)

        // making the name tag.
        let nameElement = document.createElement('h2');
        console.log(nameElement)

        // append to the parent.
        parent.appendChild(nameElement);

        // Text content.
        nameElement.textContent = this.location;

        // Making the list
        let unorderedList = document.createElement('ul');

        // appending to parent
        parent.appendChild(unorderedList);

        // start making list items.
        for (let i = 0; i < hours.length; i++) {
            // create the li
            let LiElement = document.createElement('li');

            // appent 
            unorderedList.appendChild(LiElement);

            // text content
            // 6am: 16 cookies
            LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


        }

        // make total
        let totalElement = document.createElement('li');
        // append 
        unorderedList.appendChild(totalElement);
        //test content
        totalElement.textContent = `Total: ${this.total} cookies`;

    }
}


Tokyo.count();
Tokyo.sellCookies();
Tokyo.render();


// Object literal for Dubai:
let Dubai = {
    location: 'Dubai',
    CustomerMin: 11,
    CustomerMax: 38,
    avgperSale: 3.7,
    randomCustomers: [],
    avgCOOKIES: [],
    total: 0,



    count: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

        }

        console.log(this.randomCustomers)

    },

    sellCookies: function () {
        for (let i = 0; i < hours.length; i++) {

            this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
            this.total += this.avgCOOKIES[i];

        }
        console.log(this.avgCOOKIES)


    },

    render: function () {
        // get the parent elemnt from HTMl
        let parent = document.getElementById('parent');
        console.log(parent)

        // making the name tag.
        let nameElement = document.createElement('h2');
        console.log(nameElement)

        // append to the parent.
        parent.appendChild(nameElement);

        // Text content.
        nameElement.textContent = this.location;

        // Making the list
        let unorderedList = document.createElement('ul');

        // appending to parent
        parent.appendChild(unorderedList);

        // start making list items.
        for (let i = 0; i < hours.length; i++) {
            // create the li
            let LiElement = document.createElement('li');

            // appent 
            unorderedList.appendChild(LiElement);

            // text content
            // 6am: 16 cookies
            LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


        }

        // make total
        let totalElement = document.createElement('li');
        // append 
        unorderedList.appendChild(totalElement);
        //test content
        totalElement.textContent = `Total: ${this.total} cookies`;

    }
}


Dubai.count();
Dubai.sellCookies();
Dubai.render();

// Object literal for Paris:
let Paris = {
    location: 'Paris',
    CustomerMin: 20,
    CustomerMax: 38,
    avgperSale: 2.3,
    randomCustomers: [],
    avgCOOKIES: [],
    total: 0,



    count: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

        }

        console.log(this.randomCustomers)

    },

    sellCookies: function () {
        for (let i = 0; i < hours.length; i++) {

            this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
            this.total += this.avgCOOKIES[i];

        }
        console.log(this.avgCOOKIES)


    },

    render: function () {
        // get the parent elemnt from HTMl
        let parent = document.getElementById('parent');
        console.log(parent)

        // making the name tag.
        let nameElement = document.createElement('h2');
        console.log(nameElement)

        // append to the parent.
        parent.appendChild(nameElement);

        // Text content.
        nameElement.textContent = this.location;

        // Making the list
        let unorderedList = document.createElement('ul');

        // appending to parent
        parent.appendChild(unorderedList);

        // start making list items.
        for (let i = 0; i < hours.length; i++) {
            // create the li
            let LiElement = document.createElement('li');

            // appent 
            unorderedList.appendChild(LiElement);

            // text content
            // 6am: 16 cookies
            LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


        }

        // make total
        let totalElement = document.createElement('li');
        // append 
        unorderedList.appendChild(totalElement);
        //test content
        totalElement.textContent = `Total: ${this.total} cookies`;

    }
}


Paris.count();
Paris.sellCookies();
Paris.render();


// Object literal for Lima:
let Lima = {
    location: 'Lima',
    CustomerMin: 2,
    CustomerMax: 16,
    avgperSale: 4.6,
    randomCustomers: [],
    avgCOOKIES: [],
    total: 0,



    count: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(random(this.CustomerMin, this.CustomerMax))

        }

        console.log(this.randomCustomers)

    },

    sellCookies: function () {
        for (let i = 0; i < hours.length; i++) {

            this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avgperSale))
            this.total += this.avgCOOKIES[i];

        }
        console.log(this.avgCOOKIES)


    },

    render: function () {
        // get the parent elemnt from HTMl
        let parent = document.getElementById('parent');
        console.log(parent)

        // making the name tag.
        let nameElement = document.createElement('h2');
        console.log(nameElement)

        // append to the parent.
        parent.appendChild(nameElement);

        // Text content.
        nameElement.textContent = this.location;

        // Making the list
        let unorderedList = document.createElement('ul');

        // appending to parent
        parent.appendChild(unorderedList);

        // start making list items.
        for (let i = 0; i < hours.length; i++) {
            // create the li
            let LiElement = document.createElement('li');

            // appent 
            unorderedList.appendChild(LiElement);

            // text content
            // 6am: 16 cookies
            LiElement.textContent = `${hours[i]}: ${this.avgCOOKIES[i]} cookies`;


        }

        // make total
        let totalElement = document.createElement('li');
        // append 
        unorderedList.appendChild(totalElement);
        //test content
        totalElement.textContent = `Total: ${this.total} cookies`;

    }
}


Lima.count();
Lima.sellCookies();
Lima.render();
