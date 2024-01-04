import Images from "./Components/Images"
import ListaCompras from "./Components/ListaCompras"
import TextBackground from "./Components/TextBackground"
import TextColor from "./Components/TextColor"
import TextPerson from "./Components/TextPerson"
import TextSize from "./Components/TextSize"
import TextStyle from "./Components/TextStyle"
import Layout from "./Page/Layout"

function App() {
  return (
    <>
      <div className='container'>
        {/* <TextSize />

        <TextPerson />

        <TextColor />

        <TextBackground />

        <TextStyle />

        <Images />
        <br />
        <ListaCompras /> */}
        <Layout />
      </div>
    </>
  )
}

export default App
