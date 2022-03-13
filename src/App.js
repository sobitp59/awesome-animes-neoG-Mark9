import './App.css';
import { useState } from 'react';


const animeRecommendationLists = {
  // adventure anime list
  "adventure" : [
    {
      name : "One Piece",
      rating : "8.6/10",
    },
    { 
      name : "Hunter X Hunter",
      rating : "8.9/10",
    },
    {
      name : "Spice and Wolf",
      rating : "7.7/10",
    }
  ],

  // action anime list
  "action" : [
    {
      name : "Darker than Black",
      rating : "7.6/10",
    },
    {
      name : "Trigun",
      rating : "5.6/10",
    },
    {
      name : "Kino’s Journey",
      rating : "7.8/10",
    }
  ],

  //comedy anime list
  "romance" : [
    {
      name : "Special A",
      rating : "6.7/10",
    },
    {
      name : "Lovely Complex",
      rating : "9.5/10",
    },
    {
      name : "Kare Kano",
      rating : "7.9/10",
    }
  ]
}

const animeListCategoriesBtn = Object.keys(animeRecommendationLists);



function App() {

  const [animeList, setAnimeList] = useState("adventure")

    function onClickAnimeCatg(anime){
      setAnimeList(anime)
      
      //  var h = animeRecommendationLists[animeList].map(function(anime){
      //    return anime.name;
      //  })
      //  var l = animeRecommendationLists[animeList].map(function(anime){
      //    return anime.rating;
      //  })

      //  console.log(h,l);
    }

  return (
    <>
      <div className="container">

        {/* top header and introduction */}
          <header className='header'>
            <h1> my anime list </h1>
            <p>Do you want to watch anime? Here, is my recommended lists</p>
          </header>
        
        {/* anime categories buttons */}
        <ul className='catgBtnList'>
          {
            animeListCategoriesBtn.map(function(anime){
              return(
               <li key={anime} className='catgBtn'>
                <button onClick={()=> onClickAnimeCatg(anime)}>{anime}</button>
               </li>
              ) 
            })
          } 
        </ul>
    
      <div className='middle'>{
        animeRecommendationLists[animeList].map(function(animes){
          return (
            <>
            <div key={animes} className="animesLists">
              <div className='animeName'>{animes.name}</div> 
              <div className='animeRating'><i class="fa-solid fa-star"></i> {animes.rating}</div>
            </div>
            </>
          )
        })
      }
      </div>

      <footer className="footer">
        <h1>about</h1>
        <p>if you love watching anime then you must watch these recommended lists of mine</p>
        <h2>made with <i class="fa-solid fa-heart"></i> by <a href="https://sobit-prasad.netlify.app">Sobit</a></h2>
      </footer>
  </div>
    </>
  );
}

export default App;
