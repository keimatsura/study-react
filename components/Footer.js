import Image from "next/image";

const ITEMS = [
  {
    id :1,
    href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    src:"/file.svg",
    alt:"File icon",
    text:"Learn"
  },
  {
    id :2,
    href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    src:"/window.svg",
    alt:"Window icon",
    text:"Examples"
  },
  {
    id :3,
    href:"https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    src:"/globe.svg",
    alt:"Globe icon",
    text:"Go tooooooooooo nextjs.org →"
  },
];


export default
 function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

{ITEMS.map((item,)=>(
   <a
   className="flex items-center gap-2 hover:underline hover:underline-offset-4"
   href={item.href}
   target="_blank"
   rel="noopener noreferrer"
   key={item.id}
 >
   <Image
     aria-hidden
     src={item.src}
     alt={item.alt}
     width={16}
     height={16}
   />
   {item.text}
 </a>
))}
    </footer>
  );
}