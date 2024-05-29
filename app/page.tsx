import Image from "next/image";
import styles from "./page.module.css";
import InfoHeader from "./Components/InfoHader/InfoHeader";
import Navigation from "./Components/Navigation/Navigation";
import Banners from "./Components/Banners/Banners";
import Consume from "./Components/Consume/Consume";
import Popular from "./Components/Popular/Popular";
import FruitBox from "./Components/FruitBox/FruitBox";
import FruitPrices from "./Components/FruitPrices/FruitPrices";
import CountDown from "./Components/CountDown/CountDown";
import Hotdeals from "./Components/Hotdeals/Hotdeals";


export default function Home() {
  return (
    <>
      <Navigation />
      <Banners />
      <Consume />
      <Popular title="Popular Categories" />
      <FruitBox />
      <Popular title="Popular Products" />
      <FruitPrices />
      <CountDown />
      <Hotdeals />
    </>
  );
}
