import { useState } from "react";
import Markdown from "react-markdown";
import markdownContent from "../assets/markdown_files/terminals/terminal.md";

export default function TailwindTests() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="bg-midnight-background min-h-screen text-midnight-text">
        <div className="flex justify-between items-center p-2 border-4 border-midnight-border rounded-lg">
          <div className="flex">
            <img
              src="logo.png"
              className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"
              alt="Logo"
            />
            <div className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"></div>
            <div className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"></div>
            <div className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"></div>
          </div>
          <div className="flex flex-col h-40 w-40 border-4 border-midnight-border rounded-lg m-1 p-6">
            <img
              src="coins.png"
              className="flex-1 object-contain"
              alt="Coins"
            />
            <h4 className="mt-auto text-center">5 gold</h4>
          </div>
        </div>
        <article className="max-w-4xl mx-auto prose prose-xl p-4 prose-headings:text-midnight-text prose-p:text-midnight-text prose-strong:text-midnight-text prose-em:text-midnight-text prose-a:text-midnight-secondary prose-code:text-midnight-text prose-code:bg-gray-700 prose-code:before:content-none prose-code:after:content-none">
          <Markdown>{markdownContent}</Markdown>
        </article>
        <div className="flex justify-center items-center mt-8 mb-8 px-4 gap-4">
          <input
            type="email"
            className="flex-1 max-w-md px-4 py-2 bg-midnight-background border-2 border-gray-600 rounded-lg text-midnight-text placeholder-gray-400 focus:outline-none focus:border-midnight-secondary focus:ring-2 focus:ring-midnight-secondary focus:ring-opacity-50 transition-colors duration-200"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-midnight-primary border-2 border-midnight-primary rounded-lg text-white font-semibold hover:bg-transparent hover:text-midnight-primary focus:outline-none focus:ring-2 focus:ring-midnight-primary focus:ring-opacity-50 transition-all duration-200 whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
