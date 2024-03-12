import dynamic from "next/dynamic";
import Header from "./components/header";
import Upload from "./components/upload";

const BackgroundComponent = dynamic(() => import("./components/background"));

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-start gap-10 p-24 z-50">
        <Header />
        <Upload />
      </main>
      <BackgroundComponent />
    </>
  );
}
