import Quotes from "./Quotes.jsx";

function QuotesHome() {
  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "I'm not afraid to fail. I'm afraid of not trying.",
      author: "George Patton"
    },
    {
      quote: "The only way to do great work is to work with great people.",
      author: "Jim Collins"
    }
  ];
  return (
    <>
      <Quotes quotes={quotes} />
    </>
  );
}

export default QuotesHome;
