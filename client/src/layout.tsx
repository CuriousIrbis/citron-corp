import { Outlet } from "react-router";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import './App.scss'

export default function MainLayout(){
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}