import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Instantly from "../Instantly/Instantly"
import Numbers from "../Numbers/Numbers"
import css from "./App.module.css"


function App() {

  return (
    <div className={css.container}>
    <Header/>
    <main>
      <Instantly/>
      <Numbers/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
