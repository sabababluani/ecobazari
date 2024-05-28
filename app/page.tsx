import Image from "next/image";
import styles from "./page.module.css";
import InfoHeader from "./Components/InfoHader/InfoHeader";
import Navigation from "./Components/Navigation/Navigation";
import Banners from "./Components/Banners/Banners";


export default function Home() {
  return (
    <>
      <Navigation />
      <Banners/>
    </>
  );
}
