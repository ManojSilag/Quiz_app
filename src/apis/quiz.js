import axios from 'axios';

export default axios.create({
    baseURL:'https://opentdb.com/api.php?amount=10/',
    params:{
        amount: 10,
        catcategory: 9,
        difficulty: "medium",
    }
})


//https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple