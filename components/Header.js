import Link from "next/link";

export default
 function Header() {
  return (
    <header className="border-b border-[#eaeaea] w-full h-[100px] flex justify-center items-center">
     <Link legacyBehavior  href = "/"><a className="inline-block px-6 py-2 text-[1.2rem] hover:text-blue-600">Index</a></Link>
      <Link legacyBehavior href = "/about"><a className="inline-block px-6 py-2 text-[1.2rem] hover:text-blue-600">About</a></Link>
   </header>
  );
}