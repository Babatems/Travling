import Destinations from "./components/Destinations";
import Header from "./components/Header"
import Intro from "./components/Intro"
import '@fontsource/poppins';
import Question from "./components/Question";
import Plan from "./components/Plan"

export default function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Destinations />
      <Question />
      <Plan />
    </div>
  )
}
