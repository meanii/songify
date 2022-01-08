import { FriendsActivity } from "./components/friends/FriendsActivity";
import { Geners } from "./components/geners/Geners";
import Header from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Player } from "./components/player/Player";
import { Search } from "./components/search/Search";
import { Tracks } from "./components/tracks/Tracks";

export default function App() {
  return (
    <div>
      <Header />
      <div className="sm:flex sm:flex-col lg:hidden">
        <Hero />
        <div className="flex justify-center">
          <FriendsActivity />
        </div>
        <div className="flex justify-center">
          <Tracks />
        </div>
      </div>
      <div className="lg:flex lg:flex-row hidden flex-none">
        <div className="flex flex-col">
          <Hero />
          <Tracks />
        </div>
        <div className="flex-none hidden lg:flex">
          <FriendsActivity />
        </div>
      </div>
      <Player />
    </div>
  );
}
