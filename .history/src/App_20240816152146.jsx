import { Button } from "./components/Button"
import { Heading } from "./components/Heading"
function App() {
  return (
    <div className="bg-darkBrackground justify-center pb-16 text-center justify-items-center">
      <Heading className="text-primary bg-darkBrackground font-graphik-bold">Hello, World!</Heading>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button isBold>Primary bold</Button>
      <Button variant="secondary" isBold>secondary bold</Button>
    </div>
  )
}

export default App
