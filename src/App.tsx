import { Slider } from "./components/Slider/Slider"
import { elipse, heptagon, hexagon, star, pentagon } from "./assets";
function App() {
  interface ISlider {
    title: string;
    shape: string;
    img: string;
  }

  const sliderItems: ISlider[] = [
    {
      title: 'Doodle socks',
      shape: elipse,
      img: 'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1000x.jpg?v=1719341467'
    },
    {
      title: 'Doodle socks',
      shape: heptagon,
      img: 'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1000x.jpg?v=1719341467'
    },
    {
      title: 'Doodle socks',
      shape: hexagon,
      img: 'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1000x.jpg?v=1719341467'
    },
    {
      title: 'Doodle socks',
      shape: elipse,
      img: 'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1000x.jpg?v=1719341467'
    },
    {
      title: 'Doodle socks',
      shape: star,
      img: 'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1000x.jpg?v=1719341467'
    },
    {
      title: 'Doodle socks',
      shape: pentagon,
      img: 'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1000x.jpg?v=1719341467'
    },
  ];
  const items = sliderItems.map((item, index) => (
    <div key={index} className="w-full h-full flex items-center justify-center">
      <div
        className="shape-mask h-[90%] w-[90%]"
        style={{
          backgroundImage: `url(${item.img})`,
          maskImage: `url(${item.shape})`,
          WebkitMaskImage: `url(${item.shape})`,
        }}
      />
    </div>
  ));


  return <Slider items={items} customClass="text-black bg-primary h-[35rem]" />;
}

export default App
