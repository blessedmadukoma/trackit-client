// import "./globals.css";
import Sidebar from "../../components/Sidebar";

export const metadata = {
  title: "TrackIT",
  description: "Track your finances with ease!",
};

export default function RootLayout({ children }) {
  // const [active, setActive] = useState(1);
  return (
    <html lang="en">
      <body className="flex text-[#7C4CE0]">
        {/* <Sidebar prop={() => setActive(active)} active={active} /> */}
        <Sidebar />

        <main className="w-full flex-1 bg-[#E5E5E5]">{children}</main>
      </body>
    </html>
  );
}
