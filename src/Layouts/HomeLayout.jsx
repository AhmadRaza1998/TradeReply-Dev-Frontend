'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect } from "react";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

// import { usePage } from "@inertiajs/react";


const HomeLayout = ({ children }) => {
  // const { url } = usePage();
    const url = "/";
  useEffect(() => {
    if (url === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }

    return () => {
      document.body.classList.remove("home-page");
    };
  }, [url]);

  return (
    <Fragment>
          <LanguageProvider>
      <Header />
        {/* Wrap main content in <main> for SEO & accessibility */}
        <main className="main-content">
            {children}
        </main>
      <Footer />
          </LanguageProvider>
    </Fragment>
  );
};

export default HomeLayout;
