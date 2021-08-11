import s from "./About.css";

export function About() {
  return (
    <main className={s.page}>
      <h1 className={s.title}>About the project</h1>
      <p className={s.text}>
        This project is using Google Books API. If you want to find info about
        any book, just use the search on home page. You can sort results
        relevance or by by novelty and you can choose how many results you want
        to see on the page. After the cards with books appear on the screen
        click on the book you want to find out more about and go to the page
        with detail info about that book.
      </p>
    </main>
  );
}
