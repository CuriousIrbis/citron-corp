import { Outlet } from "react-router";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function MainLayout(){
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}