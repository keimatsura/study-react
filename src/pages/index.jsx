import localFont from "next/font/local";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Main from "src/components/Main";
import { useCallback, useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [foo, setFoo] = useState(1);
  const [text, settext] = useState("");
  const [isShow, setisShow] = useState(true);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    settext(e.target.value);
  }, []);

  const handleUP = () => {
    setFoo((foo) => foo + 1);
  };

  const handleDisplay = () => {
    setisShow((isShow) => !isShow);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
      console.log("bar");
    };
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />

      {isShow ? (
        <>
          <h1>{foo}</h1>
          <button
            onClick={handleUP}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            UP
          </button>
        </>
      ) : null}

      <button
        onClick={handleDisplay}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isShow ? "表示" : "非表示"}
      </button>

      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </div>
  );
}
