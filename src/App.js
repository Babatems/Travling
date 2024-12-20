import Destinations from "./components/Destinations";
import Header from "./components/Header"
import Intro from "./components/Intro"
import '@fontsource/poppins';
import Question from "./components/Question";
import Plan from "./components/Plan"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Destinations />
      <Question />
      <Plan />
      <Footer />
    </div>
  )
}
