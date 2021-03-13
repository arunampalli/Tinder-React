//Database schema

import express from 'express';
import mongoose from 'mongoose';

const cardSchema= mongoose.Schema({
    name:String,
    imgUrl:String
})

export default mongoose.model('cards',cardSchema);


// [
//     {
//         "name": "Tom and Jerry",
//         "imgurl": "https://image.shutterstock.com/image-vector/tom-jerry-vector-design-260nw-1146743228.jpg"
//     },
//     {
//         "name": "Mr Bean",
//         "imgurl": "https://img.favpng.com/13/8/12/youtube-coloring-book-character-cartoon-png-favpng-bUBvqLNism6M6nHeXHVsNsrqF.jpg"
//     },
//     {
//         "name": "Mickey-Minnie",
//         "imgurl": "https://image.shutterstock.com/image-photo/philadelphia-pa-usa-november-26-260nw-1186494145.jpg"
//     },
//     {
//         "name": "Dora",
//         "imgurl": "https://www.viacomcbsanz.com/wp-content/uploads/2020/08/Dora-The-Explorer-20th-Anniversary-2-SQ.jpg"
//     },
//     {
//         "name": "Oswald",
//         "imgurl": "https://i.pinimg.com/236x/7e/9a/31/7e9a317d5d02e0c614ad6533ed7b3e4a--s-kids-my-childhood.jpg"
//     },
//     {
//         "name": "Chota Bheem",
//         "imgurl": "https://www.wallpapertip.com/wmimgs/150-1506048_chhota-bheem-pics-download-png-download-chota-bheem.png"
//     }
//     ]