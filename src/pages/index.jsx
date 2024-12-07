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

  const handleClick = useCallback(() => {
    if (foo < 10) {
      setFoo((foo) => foo + 1);
    }
  }, [foo]);
  useEffect(() => {
    console.log("foo");

    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
      console.log("bar");
    };
  }, [foo]);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />
      <Footer />
    </div>
  );
}
