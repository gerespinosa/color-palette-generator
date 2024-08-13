import { Alert } from "./assets/components/Alert"
import { Card } from "./assets/components/Card"

function App() {

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-500"
      style={{ backgroundImage: `url(https://img.freepik.com/free-photo/white-simple-textured-design-background_53876-102423.jpg?t=st=1723532275~exp=1723535875~hmac=6b201e2810df52bf5d40a2b708f0ea9f682c61c1b108f9c2205ebf6efae727fb&w=1380)` }}
    >
      <div className="h-3/4 flex gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <p className="flex bg-slate-950 rounded-lg text-white p-2">Press SPACEBAR to generate all 6 new codes</p>
      <Alert></Alert>
    </div>
  )
}

export default App
