import { Alert } from "./assets/components/Alert";
import { Card } from "./assets/components/Card";
import { Palettes } from "./assets/components/Palettes";
import { Btn } from "./assets/components/Btn";
import { GenerateBtn } from "./assets/components/GenerateBtn";

function App() {

  return (
    <div
      className="w-full h-screen overflow-x-hidden flex flex-col items-center gap-4 justify-around bg-slate-500"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/white-simple-textured-design-background_53876-102423.jpg?t=st=1723532275~exp=1723535875~hmac=6b201e2810df52bf5d40a2b708f0ea9f682c61c1b108f9c2205ebf6efae727fb&w=1380)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-wrap justify-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <GenerateBtn />

      <div id="palettes" className="flex flex-col gap-1">
        <Palettes />
      </div>

      <div className="flex-col gap-4 justify-center flex items-center">
        <p className="hidden md:flex bg-slate-950 rounded-md text-white p-2">
          {`Press [_] to generate new codes`}
        </p>
        <Btn />
      </div>
      <Alert />
    </div>
  );
}

export default App;
