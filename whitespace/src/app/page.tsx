import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Work from "./component/Work-management";
import Extension from "./component/Extension";
import Customise from "./component/Customise";
import Your from "./component/Your-work";
import Our from "./component/Our-sponsors"
import Footer from "./component/footer";


export default function Home() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Work />
        <Extension />
        <Customise />
        <Your />
        <Our />
        <Footer />
      </div>
  );
}
