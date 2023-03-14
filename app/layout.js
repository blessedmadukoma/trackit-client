import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "TrackIT",
  description: "Track your finances with ease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex text-[#7C4CE0]">
        {/* <aside className="w-full flex-1"> */}
          <Sidebar />
        {/* </aside> */}
        
        <main className="w-full flex-1 bg-[#E5E5E5]">{children}</main>
      </body>
    </html>
  );
}
