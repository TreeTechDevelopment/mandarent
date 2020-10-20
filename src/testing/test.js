const img1 = require('../../assets/testing/img1.jpg')
const img2 = require('../../assets/testing/img2.jpg')
const img3 = require('../../assets/testing/img3.jpg')

export const products = [{ 
    name: 'Product Name', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
    id: '1', 
    images: [img1, img2, img3], 
    link: 'https://facebook.com',
    location: {
        name: 'Baku, Narinov',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    price: {
        daily: 10,
        weekly: 50
    },
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img1,
            username: 'Username'
        }
    }]
},{ 
    name: 'Product Name',  
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
    id: '2', 
    images: [img2, img1, img3], 
    link: 'https://facebook.com',
    price: {
        daily: 10,
        weekly: 50
    },
    location: {
        name: 'Baku, Narinov',
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
    }]
},{ 
    name: 'Product Name', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
    id: '3', 
    images: [img3, img1, img2], 
    link: 'https://facebook.com',
    location: {
        name: 'Baku, Narinov',
        coordinates:{
            lat: 25.549667,
            lng: -103.511545
        }
    },
    stars: 5.3,
    price: {
        daily: 10,
        weekly: 50
    },
    reviews:[{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        user:{
            image: img3,
            username: 'Username'
        }
    }]
}]

export const recommendationsTest = [{
    image: img1,
    name: 'Recommendation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    id: '1'
},{
    image: img2,
    name: 'Recommendation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    id: '2'
}]