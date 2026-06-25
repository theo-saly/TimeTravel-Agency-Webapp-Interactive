import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Destinations from "./components/Destinations.jsx";
import Quiz from "./components/Quiz.jsx";
import Histoire from "./components/Histoire.jsx";
import Footer from "./components/Footer.jsx";
import ChatWidget from "./components/ChatWidget.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Destinations />
        <Quiz />
        <Histoire />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
