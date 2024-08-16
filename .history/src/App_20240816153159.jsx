import { Button } from "./components/Button"
import { Heading } from "./components/Heading"
function App() {
  return (
    <div className="bg-darkBackground justify-center pb-16 text-center justify-items-center">
      <h1 className="text-[5px]">teste</h1>
      <Heading>Hello World of heading 1</Heading>
      <Heading type='h2'>Hello World of heading 2</Heading>

      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button isBold>Primary bold</Button>
      <Button variant="secondary" isBold>secondary bold</Button>
    </div>
  )
}

export default App
