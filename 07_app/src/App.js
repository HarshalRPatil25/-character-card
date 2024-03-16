import Card from "./components/card";
function App(){
  let dragonBall={
    Name:"Goku",
    Image:"https://c4.wallpaperflare.com/wallpaper/410/227/670/dragon-ball-super-son-goku-ultra-instinct-goku-kamehameha-wallpaper-preview.jpg",
    from:"Dragon Ball" , 
    shortInfo:"Goku is introduced as an eccentric, monkey-tailed boy who practices martial arts and possesses superhuman strength. He meets Bulma and joins her on a journey to find the seven wish-granting Dragon Balls. Along the way, he finds new friends who follow him on his journey to become stronger."


  };
  let Naruto={
    Name:"Naruto Uzumaki",
    Image:"https://c4.wallpaperflare.com/wallpaper/538/943/706/anime-naruto-minato-namikaze-naruto-uzumaki-wallpaper-preview.jpg",
    from:"Naruto" , 
    shortInfo:"Naruto is an orphan who has a dangerous fox-like entity known as Kurama the Nine-Tailed Fox sealed within his body by his father, the Fourth Hokage Minato Namikaze, the leader of Konoha's ninja force, at the cost of his own life and that of his wife, Kushina Uzumaki."


  };
  let onePiece={
    Name:"Monkey D Luffy",
    Image:"https://i.pinimg.com/originals/78/2f/03/782f032235bd4b00c80de140b8e70538.jpg",
    from:"One Piece" , 
    shortInfo:"Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since childhood from the influence of his idol and mentor Red-Haired Shanks. At the age of 17, Luffy sets sail from the East Blue Sea to the Grand Line in search of the legendary treasure, One Piece, to succeed Gol D."

  }
  return(
    
    <>
    <div className="container" style={{display:'flex' , justifyContent:'space-evenly'}}>
    <Card {...dragonBall} />
    <Card {...Naruto} />
    <Card {...onePiece} />

    </div>
    
  
  


  </>

  )
  

}
export default App;