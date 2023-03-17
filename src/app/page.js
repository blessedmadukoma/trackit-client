"use client";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/Auth";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    // !user && router.push("/login");
    router.push("/auth/login");
    // console.log("isAuthenticated:", user);
  }, []);

  // console.log("page user:", user);

  if (isMobile) {
    return (
      <html lang="en">
        <body>
          <div className="grid min-h-screen place-items-center text-xs">
            <h1>TrackIT</h1>
            <p>TrackIT is not supported on mobile devices.</p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <main>
      <div>Rerouting...</div>
    </main>
  );
};

export default Home;
