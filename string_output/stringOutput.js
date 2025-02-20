console.log("String Output");
let song = {
    author : "Zayn",
    genre : "pop",
}


let randomSong = `<ul>
        <li>author ${song.author}</li>
        <li>genre ${song.genre}</li>
    </ul>`


 document.body.innerHTML = randomSong;   

    