// import "@/app/styles/LinkComp.css";
import '@/app/styles/tailwind.css'
import Steps from './components/Steps';
import LogoCloud from './components/LogoCloud';
import About from './components/About';
import Instagram from "./components/Instagram";
export default function Home() {
  return (

    <>
      <Instagram />
      <Steps />
      <About />
      <LogoCloud />
    </>
  )
}


