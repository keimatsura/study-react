import React from "react";
import Image from "next/image";

export default
 function List(props) {

  console.log(props.title);
  
  return (
    <>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      <li className="mb-2">
        Get started by editing{" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          {props.title}
        </code>
        .
      </li>
      <li>Save and see your changes instantly.</li>
    </ol>
    <div>
      <Image></Image>
    </div>
    </>
    );
}