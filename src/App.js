import { Header } from "./Compornents/Header";
import imag1 from "./Images/pastel_00010.jpg";
import imag2 from "./Images/pastel_00011.jpg";
import imag3 from "./Images/pastel_00010.avif";
import Footer from "./Compornents/Footer";
import Box from "./Compornents/Box";
import "./App.css";

function App() {
  const boxlist = [
    { imgsrc: imag1, message: "風" },
    { imgsrc: imag2, message: "山" },
    { imgsrc: imag3, message: "土" },
    { imgsrc: imag1, message: "風" },
    { imgsrc: imag2, message: "山" },
    { imgsrc: imag3, message: "土" },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <div id="cover">
          <h1>カバーのイメージ</h1>
          <div style={{ display: "flex" }}>
            {boxlist.map((b, key) => (
              <Box key={key} imgsrc={b.imgsrc} message={b.message} />
            ))}
          </div>
        </div>
        <section>
          <form>問い合わせフォーム</form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const test = () => {};

export default App;
