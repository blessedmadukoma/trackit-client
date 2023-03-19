// import "./globals.css";
import Sidebar from "../../components/Sidebar";
import { ProtectRoute } from "../../context/Auth";

export const metadata = {
  title: "TrackIT",
  description: "Track your finances with ease!",
};

export default function RootLayout({ children }) {
  // const [active, setActive] = useState(1);
  return (
    <ProtectRoute>
    <main className="flex text-[#7C4CE0]">
    <Sidebar />

<main className="w-full flex-1 bg-[#E5E5E5]">{children}</main>
    </main>
    </ProtectRoute>
  );
}
