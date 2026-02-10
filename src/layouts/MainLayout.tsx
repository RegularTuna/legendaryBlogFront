import { Outlet } from "react-router-dom";
import { Header } from "../components/navigation/Header";

export const MainLayout = () => {

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="max-w-7xl mx-auto px-4 py-8">
                <Outlet/>
            </main>
            <footer className="border-t border-slate-100 py-8 text-center text-slate-400 text-sm">
                © 2026 Legendary Blog. Built by Tiago Fortuna.
            </footer> 
        </div>
    );
}