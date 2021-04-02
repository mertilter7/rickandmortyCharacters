import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <Footer />
      <Head>
        <title>Default Title</title>
      </Head>
      {children}
    </div>
  );
}

export default Layout;
