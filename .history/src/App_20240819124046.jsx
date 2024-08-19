import { Button } from "./components/Button"
import { CalendarFeature } from "./components/CalendarFeature"
import { Heading } from "./components/Heading"
function App() {
  return (
    <div className="bg-darkBackground">
      <CalendarFeature></CalendarFeature>
      <Heading isBold></Heading>
    </div>
  )
}

export default App
