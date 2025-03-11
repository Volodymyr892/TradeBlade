import Company from "../Company/Company"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Instantly from "../Instantly/Instantly"
import Numbers from "../Numbers/Numbers"
import PastTransactionsList from "../PastTransactionsList/PastTransactionsList"
import Question from "../Question/Question"
import Tariffs from "../Tariffs/Tariffs"
import css from "./App.module.css"


function App() {

  return (
    <div className={css.container}>
    <Header/>
    <main>
      <Instantly/>
      <Numbers/>
      <PastTransactionsList/>
      <Company/>
      <Tariffs/>
      <Question/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
