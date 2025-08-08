import { Projects } from "../components/Projects";
import { Header } from "../../ui/Header";
import { Analytics } from "../components/Analitycs";

export const Dashboard = () => {
    return (
        <main className="flex flex-col w-full h-svh overflow-hidden">
            <Header role="teacher" />
            <section className="w-full max-w-7xl mx-auto overflow-y-auto">
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <Analytics />
                    <Projects />
                </div>
            </section>
        </main>
    );
};
