import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import ChatBot from "./Components/Chatbot/chat";
import WelcomeForm from "./Components/WelcomeForm/form";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome-chat" element={<ChatBot />} />
        <Route path="/welcome-form" element={<WelcomeForm />} />
      </Routes>
    </>
  );
}

export default App;
