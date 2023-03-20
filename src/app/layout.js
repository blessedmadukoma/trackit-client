"use client";
import "./globals.css";

import { AuthProvider, ProtectRoute } from "@/src/context/Auth";
import { isMobile } from "react-device-detect";

import { useAuth } from "../context/Auth";

// export const metadata = {
//   title: "TrackIT",
//   description: "Track your finances with ease!",
// };

const RootLayout = ({ children }) => {
  const { user, isAuthenticated } = useAuth();

  // if (isMobile) {
  //   return (
  //     <html lang="en">
  //       <body>
  //         <main className="grid min-h-screen place-items-center text-xs">
  //           <h1>TrackIT</h1>
  //           <p>TrackIT is not supported on mobile devices.</p>
  //         </main>
  //       </body>
  //     </html>
  //   );
  // }
  return (
    <html lang="en">
      {/* <body className="bg-[#F1F1F4]">{children}</body> */}
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
