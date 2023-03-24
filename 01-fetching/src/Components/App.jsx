import { useEffect, useState } from "react"

const CAT_IMG_PREFIX = "https://cataas.com/"

function App () {
  const [fact, setFact] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {

    fetch ("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(data.fact)
      })
  }, [])
  useEffect(() => {
    if (fact) {
      const firstWord = fact.split(" ")[0]

      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.text())
        .then(response => {
          setImageUrl(JSON.parse(response).url)
        })
    }
  }, [fact])
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      placeItems: "center",
      width: "100%",
      maxWidth: "800px",
      margin: "0px auto",
      fontFamily: "system-ui"
    }}>
      <h1>Cat facts</h1>
      <div className="facts" style={{
        textAlign: "center"
      }}>
        {fact && <p>{fact}</p>}
        {
          imageUrl && <img src={`${CAT_IMG_PREFIX}${imageUrl}`} alt={`Imagen extraída de la primera palabra de ${fact}`} />
        }
      </div>
    </main>
  )
}

export default App
