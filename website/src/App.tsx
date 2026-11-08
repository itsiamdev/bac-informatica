import { useEffect, useState } from "react";
import ProfilePage from "./components/ProfilePage";
import { profiles } from "./data/profiles";
import Home from "./pages/Home/Home";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const profile = profiles.find((item) => item.href === hash);
  return profile ? <ProfilePage profile={profile} /> : <Home />;
}
