import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            <Header />
            <div className="flex-1">{<Outlet/>}</div>
            <Footer />
        </div>
    )
}
export default MainLayout;