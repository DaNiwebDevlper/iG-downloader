// import "@/app/styles/LinkComp.css";
import '@/app/styles/tailwind.css'
import Steps from './components/Steps';
import LogoCloud from './components/LogoCloud';
import About from './components/About';
import Instagram from "./components/Instagram";
import Card from './components/Card';
export default function Home() {
  return (

    <>
      <Instagram />
      <Card title="Download Instagram Videos" color="bg-gradient-to-l from-pink-600 to-blue-600 bg-clip-text text-transparent"
      src="/instagram3.png" />
      <About />
      <LogoCloud />
    </>
  )
}


