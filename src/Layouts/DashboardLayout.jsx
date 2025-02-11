import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "@/Components/common/Dashboard/SideBar";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/Footer";
import "../css/dashboard/layout.scss";
import { LanguageProvider } from "@/context/LanguageContext";


const DashboardLayout = ({ children }) => {
  return (
    <>
      <LanguageProvider>
        <Header />
        <div className="admin_layout">
          <div className="admin_layout_sidebar">
            <SideBar />
          </div>
          <div className="admin_layout_content">{children}</div>
        </div>
        <Footer />
      </LanguageProvider>
    </>
  );
};

export default DashboardLayout;
