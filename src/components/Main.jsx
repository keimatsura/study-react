import Image from "next/image";
import Links from "@/components/Links";
import List from "src/components/List";

export default function Main(props) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      {/* <List
        title={props.page}
        list={<li>Save and see your changes instantly.</li>}
      /> */}

      <List
        title={props.page}
        list={<li>Save and see your changes instantly.</li>}
      />

      <Links />
    </main>
  );
}
