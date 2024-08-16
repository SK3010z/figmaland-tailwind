import { Button } from "./components/Button"

function App() {
  return (
    <>
      <h1 className="text-primary bg-darkBrackground font-graphik-bold">Hello, World!</h1>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button>Primary bold</Button>
      <Button variant="secondary">secondary bold</Button>
    </>
  )
}

export default App
