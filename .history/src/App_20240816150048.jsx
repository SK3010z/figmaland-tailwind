import { Button } from "./components/Button"

function App() {
  return (
    <div className="bg-darkBrackground justify-center pb-f text-center justify-items-center">
      <h1 className="text-primary bg-darkBrackground font-graphik-bold">Hello, World!</h1>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button isBold>Primary bold</Button>
      <Button variant="secondary" isBold>secondary bold</Button>
    </div>
  )
}

export default App
