import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import "./chat.css";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const questions: string[] = [
  "What's your name?",
  "How old are you?",
  "Can you please describe all the symptoms you're experiencing, including when they started, how often they occur, and if anything makes them better or worse?",
];

const keys: (keyof UserData)[] = ["name", "age", "symptoms"];

interface UserData {
  name: string;
  age: string;
  symptoms: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [typing, setTyping] = useState(false);
  const [userData, setUserData] = useState<Partial<UserData>>({});

  useEffect(() => {
    // Only trigger bot typing if user hasn't answered yet
    if (messages.length === 0) {
      simulateTyping(questions[0]);
    }
  }, []);

  const simulateTyping = (text: string) => {
    setTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      setMessages((prev) => {
        const current = [...prev];
        const last = current[current.length - 1];
        const newText = text.slice(0, i + 1);

        if (last && last.sender === "bot") {
          current[current.length - 1] = { sender: "bot", text: newText };
        } else {
          current.push({ sender: "bot", text: newText });
        }

        return current;
      });

      i++;
      if (i === text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 30);
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || typing || isFinished) return;

    const answer = userInput.trim();

    const currentKey = keys[questionIndex];
    if (currentKey) {
      setUserData((prev) => ({
        ...prev,
        [currentKey]: answer,
      }));
    }

    setMessages((prev) => [...prev, { sender: "user", text: answer }]);
    setUserInput("");

    const nextIndex = questionIndex + 1;
    setQuestionIndex(nextIndex);

    setTimeout(() => {
      if (nextIndex < questions.length) {
        simulateTyping(questions[nextIndex]);
      } else {
        setIsFinished(true);
        simulateTyping("Thanks for your responses!");

        //send to backend
        // const finalData = {
        //   ...userData,
        //   [currentKey]: answer,
        // }
      }
    }, 500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Link to="/" className="link-chat">
            <HiArrowLeft size={14} style={{ marginRight: "0.5rem" }} /> Back
          </Link>
        </div>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      {!isFinished && (
        <form className="input-box" onSubmit={handleSend}>
          <input
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Type your answer..."
            disabled={typing}
          />
          <button type="submit" disabled={typing}>
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ChatBot;
