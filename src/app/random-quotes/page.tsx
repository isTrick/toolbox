"use client";

import { useEffect, useState } from "react";

interface Quote {
  id: number;
  text: string;
}

export default function RandomQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const socraticQuote: Quote = {
      id: 1,
      text: "Só sei que nada sei",
    };
    setQuotes([socraticQuote]);
  }, [])

  return (
    <div>
      {quotes.map((quote: Quote) => (
        <p key={quote.id}>{quote.text}</p>
      ))}
    </div>
  );
}
