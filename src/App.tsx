import { Slider } from "./components/Slider/Slider"
import SvgShape from "./components/SvgShape/SvgShape";
import { Button } from "./components/Button/button";
import { sliderItems } from "./constants";
import { Navbar } from "./components/Navbar/Navbar";
import { MainItems } from "./components/mainItems/mainItems";
function App() {
  const items = sliderItems.map((item) => (
    <div key={item.id} className="w-full h-full flex items-center justify-center relative group">
      <SvgShape shape={item.shape} image={item.img} />
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button variant='slider' size='slider'>{item.title}</Button>
      </div>
    </div>
  ));


  return (<>
    <Navbar />
    <Slider items={items} customClass="text-black bg-primary h-60 lg:h-[35rem] border-b-4 border-black" />
    <MainItems />
  </>

  );
}

export default App
