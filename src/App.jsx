import { Alert } from "./assets/components/Alert"
import { Card } from "./assets/components/Card"
// import { Palette } from "./assets/components/Palette"
import { Btn } from "./assets/components/Btn"

function App() {

  return (
    <div className="w-screen h-screen flex flex-col items-center gap-4 justify-around bg-slate-500"
      style={{ backgroundImage: `url(https://img.freepik.com/free-photo/white-simple-textured-design-background_53876-102423.jpg?t=st=1723532275~exp=1723535875~hmac=6b201e2810df52bf5d40a2b708f0ea9f682c61c1b108f9c2205ebf6efae727fb&w=1380)`, backgroundSize: 'cover' }}
    >
      <div className="flex gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* 
      <div className="flex flex-col gap-1">
        <Palette />
        <Palette />
      </div> */}

      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="flex bg-slate-950 rounded-md text-white p-2">{`Press [_] to generate new codes`}</p>
        <Btn />
      </div>
      <Alert />
    </div>
  )
}

export default App
