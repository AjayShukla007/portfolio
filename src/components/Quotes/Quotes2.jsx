import Quotes from "./Quotes.jsx";

function QuotesAbout() {
  const quotes = [
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      quote:
        "The difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson"
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    }
  ];
  return (
    <>
      <Quotes quotes={quotes} />
    </>
  );
}
function QuotesEdu() {
  const quotes = [
    {
      quote: "Formal education will make you a living; self-education will make you a fortune.",
      author: "Jim Rohn"
    },
    {
      quote: "I have never let my schooling interfere with my education.",
      author: "Mark Twain"
    },
    {
      quote: "Education is not preparation for life; education is life itself.",
      author: "John Dewey"
    },
    {
      quote: "The only person who is educated is the one who has learned how to learn and change." ,
      author: "Carl Rogers"
    },
    {
      quote: "Education is not the filling of a pail, but the lighting of a fire.",
      author: "William Butler Yeats"
    },
  ];
  return (
    <>
      <Quotes quotes={quotes} />
    </>
  );
}

function QuotesCert() {
  const quotes = [
    {
      quote: "The purpose of a certification is not to prove you are the best, but to prove you are competent enough to do the job.",
      author: "My thoughts"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Earning certifications is like adding tools to your toolbox. The more tools you have, the more problems you can solve.",
      author: "My thoughts"
    },
    {
      quote: "The difference between ordinary and extraordinary is that little extra." ,
      author: "Jimmy Johnson"
    },
    {
      quote: "If you're not learning, you're not growing.",
      author: "My thoughts"
    },
  ];
  return (
    <>
      <Quotes quotes={quotes} />
    </>
  );
}

export { QuotesAbout, QuotesEdu, QuotesCert };
