"use client";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/Auth";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    isMobile
      ? "TrackIT is not supported on mobile devices."
      : !user && router.push("/auth/login");

    user && router.push("/dashboard");

    console.log("user:", user);
  }, []);
  if (isMobile) {
    return (
      <div className="grid min-h-screen place-items-center text-xs">
        This platform is only accessible using a PC.
      </div>
    );
  }
  return (
    <>
      <div>Rerouting...</div>
    </>
  );
};

export default Home;
