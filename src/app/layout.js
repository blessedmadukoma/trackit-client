import "./globals.css";

// import { AuthProvider, ProtectRoute } from "@/src/context/Auth";
import { isMobile } from "react-device-detect";

export const metadata = {
  title: "TrackIT",
  description: "Track your finances with ease!",
};

const RootLayout = ({ children }) => {
  if (isMobile) {
    return (
      <html lang="en">
        <body>
          <div className="grid text-xs min-h-screen place-items-center">
            <h1>TrackIT</h1>
            <p>TrackIT is not supported on mobile devices.</p>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body className="bg-[#F1F1F4]">{children}</body>
      {/* <body>
        <AuthProvider>{children}</AuthProvider>
      </body> */}
    </html>
  );
};

export default RootLayout;
