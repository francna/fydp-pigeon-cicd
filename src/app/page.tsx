"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [test, setTest] = useState<string>();

  useEffect(() => {
    (async () => {
      const data = await fetch("/api/test");
      const _test = await data.json();
      console.log(_test);
      setTest(_test.text);
    })();
  }, []);

  return (
    <main>
      <h1>hello world</h1>
      <h1>test: {test}</h1>
    </main>
  );
}
