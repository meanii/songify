import { FriendsActivity } from "../friends/FriendsActivity";
import Header from "../header/Header";
import { Hero } from "../hero/Hero";
import { Player } from "../player/Player";
import { Tracks } from "../tracks/Tracks";


export default function Dashboard() {
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
