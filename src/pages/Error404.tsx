import errorImg from "../assets/notFound.png";

export function Error404() {
  return (
    <main className="error-page">
      <img src={errorImg} alt="page not found" width="800" />
    </main>
  );
}
