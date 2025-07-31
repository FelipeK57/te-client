import { Header } from "../components/Header";

export const Dashboard = () => {
  return (
    <main className="flex flex-col w-full min-h-svh">
      <Header />
      <section className="flex flex-1 flex-col p-4 overflow-y-auto">
        <h1 className="text-2xl font-semibold">Student Dashboard</h1>
        <p className="mt-2">Welcome to your dashboard!</p>
      </section>
    </main>
  );
};
