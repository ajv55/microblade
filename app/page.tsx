import Image from "next/image";
import blade from '@/public/microblading.gif';
import Header from './components/header';
import { AuroraBackgroundDemo } from "./components/head";
import About from "./components/about";


export default function Home() {
  return (
    <div>
      <Header/>
      <About />
    </div>
  );
}
