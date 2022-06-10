import "../styles/globals.css";
import NavBar from "@components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full max-w-[850px] mx-auto">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
