import { useEffect, useState } from 'react';
import './App.css';
const giphyApiKey = "rMDrIbf97CagdPyGQoG0KX9NbwyqzY5i"
function App() {
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");

  const apiGiphy = (str) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${str}&api_key=${giphyApiKey}`)
      .then(res => res.json())
      .then((data) => setCatGif(data.data[0].images.original.url));
  }

  const fechedCatfact = () => {
    fetch(`https://catfact.ninja/fact`)
      .then(res => res.json())
      .then((data) => {
        setCatFact(data.fact)
        apiGiphy(data.fact.split(" ").slice(0, 3).join(" "))
      });

  }


  useEffect(() => {
    fechedCatfact()

  }, []);

  // console.log(catFact);


  return (
    <div className="App">
    
      <div style={{display: "flex", gap:"20px", alignItems: "center"}}>
        <img src={catGif} style={{objectFit:"contain", width: "200px", height: "200px"}}/>
         
        <h4>{catFact}</h4>
         
        </div>
    </div>
  );
}

export default App;
