import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import Cors from "cors";
//import Axios from './axios';
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([
            // {
            //     name: "Tom and Jerry",
            //     url: "https://image.shutterstock.com/image-vector/tom-jerry-vector-design-260nw-1146743228.jpg",
            // },
            // {
            //     name: "Mr Bean",
            //     url: "https://img.favpng.com/13/8/12/youtube-coloring-book-character-cartoon-png-favpng-bUBvqLNism6M6nHeXHVsNsrqF.jpg",
            // },
            // {
            //     name: "Mickey-Minnie",
            //     url: "https://image.shutterstock.com/image-photo/philadelphia-pa-usa-november-26-260nw-1186494145.jpg",
            // },
            // {
            //     name: "Dora",
            //     url: "https://www.viacomcbsanz.com/wp-content/uploads/2020/08/Dora-The-Explorer-20th-Anniversary-2-SQ.jpg",
            // },
            // {
            //     name: "Oswald",
            //     url: "https://i.pinimg.com/236x/7e/9a/31/7e9a317d5d02e0c614ad6533ed7b3e4a--s-kids-my-childhood.jpg",
            // },
            // {
            //     name: "Chota Bheem",
            //     url: "https://www.wallpapertip.com/wmimgs/150-1506048_chhota-bheem-pics-download-png-download-chota-bheem.png",
            // }
        
    ]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
    },[]);

console.log(people);

    const swiped = (direction,nameToDelete) =>{
        console.log("removing: "+nameToDelete);
        // setLastDirection(direction);
    }
    const outOfFrame = (name) => {
        console.log(name+" left the screen!");
    }
    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
            {
              people.map((person) => (
                // <h1>{person.name}</h1>
                <TinderCard 
                className="swipe"
                key = {person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir,person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.imgUrl})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;
