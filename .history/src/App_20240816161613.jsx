import { Button } from "./components/Button"
import { Heading } from "./components/Heading"
function App() {
  return (
    <div className="bg-darkBackground justify-center pb-16 text-center justify-items-center">
      <div className="bg-green-200">
        <Heading color="white">Hello World of heading 1</Heading>
        <Heading type='h2' color="white">Hello World of heading 2</Heading>
      </div>

      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button isBold>Primary bold</Button>
      <Button variant="secondary" isBold>secondary bold</Button>
    </div>
  )
}

export default App
