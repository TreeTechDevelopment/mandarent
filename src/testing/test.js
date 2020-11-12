const img1 = require('../../assets/testing/img1.jpg')
const img2 = require('../../assets/testing/img2.jpg')
const img3 = require('../../assets/testing/img3.jpg')

const listingsLender = [{ 
    name: 'Product Name', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
    id: '1', 
    images: [img1, img2, img3], 
    url: 'https://facebook.com',
    location: {
        name: 'Baku, Narinov',
        city: 'Baku-Absheron',
        district: 'Nərimanov',
        street: 'Böyükşor',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    price: {
        daily: '10',
        weekly: '50',
        hourly: '5'
    },
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img1,
            username: 'Username'
        }
    }],
    category1: 'Drones',
    category2: 'Electronics',
    rentPeriod:{
        hour: '10',
        day: '2'
    },
    discount:{
        weeklyDiscount: '3',
        monthlyDiscount: '5'
    },
    lender: userExample
},{ 
    name: 'Product Name',  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',  
    id: '2', 
    images: [img2, img1, img3], 
    url: 'https://facebook.com',
    price: {
        daily: '10',
        weekly: '50',
        hourly: '5'
    },
    location: {
        name: 'Baku, Narinov',
        city: 'Agdash',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img2,
            username: 'Username'
        }
    }],
    category1: 'Fitness',
    category2: 'Hobbies',
    rentPeriod:{
        hour: '10',
        day: '2'
    },
    discount:{
        weeklyDiscount: '3',
        monthlyDiscount: '5'
    },
    lender: userExample
},{ 
    name: 'Product Name', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
    id: '3', 
    images: [img3, img1, img2], 
    url: 'https://facebook.com',
    location: {
        name: 'Baku, Narinov',
        city: 'Qubadli',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    price: {
        daily: '10',
        weekly: '50',
        hourly: '5'
    },
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img3,
            username: 'Username'
        }
    }],
    category1: 'Garden',
    category2: 'Hobbies',
    rentPeriod:{
        hour: '10',
        day: '2'
    },
    discount:{
        weeklyDiscount: '3',
        monthlyDiscount: '5'
    },
    lender: userExample
}]

const userExample = {
    image: img1,
    name: 'Name',
    surname: 'Surname',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    stars: 4.7,
    phone: '1234567890',
    birth: 1603673744424,
    email: 'example@gmail.com',
    location:{
        name: 'Baku, Narinov',
        city: 'Baku-Absheron',
        district: 'Nərimanov',
        street: 'Böyükşor',
    },
    reviews: [{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img2,
            username: 'Username',
            name: 'Name'
        },
        id: '1',
        stars: 3,
        date: 1603673744424
    },{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img3,
            username: 'Username',
            name: 'Name 1'
        },
        id: '2',
        stars: 1,
        date: 1603673744424
    },{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img2,
            username: 'Username',
            name: 'Name 2'
        },
        id: '3',
        stars: 4,
        date: 1603673744424
    }],
    listings: listingsLender
}

export const userTest = {
    image: img1,
    name: 'Name',
    surname: 'Surname',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    stars: 4.7,
    phone: '1234567890',
    birth: 1603673744424,
    email: 'example@gmail.com',
    location:{
        name: 'Baku, Narinov',
        city: 'Baku-Absheron',
        district: 'Nərimanov',
        street: 'Böyükşor',
    },
    reviews: [{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img2,
            username: 'Username',
            name: 'Name'
        },
        id: '1',
        stars: 3,
        date: 1603673744424
    },{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img3,
            username: 'Username',
            name: 'Name 1'
        },
        id: '2',
        stars: 1,
        date: 1603673744424
    },{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img2,
            username: 'Username',
            name: 'Name 2'
        },
        id: '3',
        stars: 4,
        date: 1603673744424
    }],
    listings: listingsLender
}

export const products = [{ 
    name: 'Product Name', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
    id: '1', 
    images: [img1, img2, img3], 
    url: 'https://facebook.com',
    location: {
        name: 'Baku, Narinov',
        city: 'Baku-Absheron',
        district: 'Nərimanov',
        street: 'Böyükşor',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    price: {
        daily: '10',
        hourly: '5'
    },
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img1,
            username: 'Username'
        }
    }],
    category1: 'Drones',
    category2: 'Electronics',
    rentPeriod:{
        hour: '10',
        day: '2'
    },
    discount:{
        weeklyDiscount: '3',
        monthlyDiscount: '5'
    },
    lender: userExample
},{ 
    name: 'Product Name',  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',  
    id: '2', 
    images: [img2, img1, img3], 
    url: 'https://facebook.com',
    price: {
        daily: '10',
        hourly: '5'
    },
    location: {
        name: 'Baku, Narinov',
        city: 'Agdash',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img2,
            username: 'Username'
        }
    }],
    category1: 'Fitness',
    category2: 'Hobbies',
    rentPeriod:{
        hour: '10',
        day: '2'
    },
    discount:{
        weeklyDiscount: '3',
        monthlyDiscount: '5'
    },
    lender: userExample
},{ 
    name: 'Product Name', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
    id: '3', 
    images: [img3, img1, img2], 
    url: 'https://facebook.com',
    location: {
        name: 'Baku, Narinov',
        city: 'Qubadli',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    price: {
        daily: '10',
        hourly: '5'
    },
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img3,
            username: 'Username'
        }
    }],
    category1: 'Garden',
    category2: 'Hobbies',
    rentPeriod:{
        hour: '10',
        day: '2'
    },
    discount:{
        weeklyDiscount: '3',
        monthlyDiscount: '5'
    },
    lender: userExample
}]

export const recommendationsTest = [{
    image: img1,
    name: 'Demanded',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    id: '1'
},{
    image: img2,
    name: 'Recommendation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    id: '2'
}]

export const rentOffersTest = [{
    status: 'Soon',
    lender:{
        image: img3,
        username: 'Username1',
        stars: 4.3
    },
    customer:{
        image: img3,
        username: 'Username',
        stars: 4.3
    },
    id: '1',
    product:{
        name: 'Product Name', 
        images: [img2, img1, img3]
    },
    date:{
        from:{
            hour: '18:00',
            day: '17.11.2020'
        },
        to:{
            hour: '12:00',
            day: '23.11.2020'
        }
    },
    total: 20
},{
    lender:{
        image: img2,
        username: 'Username',
        stars: 4.3
    },
    customer:{
        image: img2,
        username: 'Username2',
        stars: 4.3
    },
    id: '2',
    product:{
        name: 'Product Name', 
        images: [img1, img1, img3]
    },
    date:{
        from:{
            hour: '10:00',
            day: '21.11.2020'
        },
        to:{
            hour: '12:00',
            day: '30.11.2020'
        }
    },
    total: 20,
    status: 'Soon',
}]

export const shopCartItemsTest = [{
    listing: {...listingsLender[0], lender: { name: 'Name' }},
    from:{
        date: '2020-11-02',
        hour: 10
    },
    to: {
        date: '2020-11-03',
        hour: 10
    },
    id: '1'
},{
    listing: {...listingsLender[1], lender: { name: 'Name' }},
    from:{
        date: '2020-10-30',
        hour: 10
    },
    to: {
        date: '2020-11-10',
        hour: 20
    },
    id: '2'
}]

export const demandedItemsTest = [{
    user: userExample,
    item:{
        name: 'Item Demanded',
        category1: 'Drones',
        category2: 'Electronics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
    },
    from:{
        date: '2020-10-30',
        hour: 10
    },
    to: {
        date: '2020-11-10',
        hour: 20
    },
    id: '1'
}]

export const chatsTest = [{
    from:{
        username: 'Username1',
        image: img1
    },
    to:{
        username: 'Username',
        image: img2
    },
    chat:[{
        time: 1603673744424,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        from:{
            image: img1
        }
    }],
    id: '1'
}]
