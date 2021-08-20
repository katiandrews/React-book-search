import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BookCard } from "../components/BookCard/BookCard";
import { BrowserRouter as Router } from "react-router-dom";

test("Book renders correctly", () => {
  const bookData = {
    id: "fdkg4u9_4536",
    volumeInfo: {
      title: "Snow White",
      authors: ["Brothers Grimm", "Someone Else"],
      publishedDate: "1812",
      publisher: "Western world",
      previewLink: "",
      pageCount: 83,
      imageLinks: {
        smallThumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Schneewittchen2.jpg/330px-Schneewittchen2.jpg",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Schneewittchen2.jpg/330px-Schneewittchen2.jpg",
      },
      language: "de",
      description: `The fairy tale features such elements as the magic mirror, the poisoned apple, the glass coffin, and the characters of the Evil Queen and the Seven Dwarfs. The seven dwarfs were first given individual names in the 1912 Broadway play Snow White and the Seven Dwarfs and then given different names in Walt Disney's 1937 film Snow White and the Seven Dwarfs. The Grimm story, which is commonly referred to as "Snow White",[3] should not be confused with the story of "Snow-White and Rose-Red" (in German "Schneeweißchen und Rosenrot"), another fairy tale collected by the Brothers Grimm.`,
    },
  };

  render(
    <Router>
      <BookCard book={bookData} />
    </Router>
  );

  const title = screen.getByText(bookData.volumeInfo.title);
  const authors = screen.getByText(bookData.volumeInfo.authors.join(", "));

  expect(title).toBeDefined();
  expect(authors).toBeDefined();
  expect(title).toHaveTextContent("Snow White");
  expect(authors).toHaveTextContent("Brothers Grimm, Someone Else");
});
