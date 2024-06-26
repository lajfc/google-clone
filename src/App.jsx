import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-primary min-h-dvh text-primary text-sm">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
