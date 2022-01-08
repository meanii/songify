import { Track } from "./track/Track";

export const Tracks = () => {
  return (
    <div className="card self-center mb-52 w-5/6 text-white">
      <div className="card-title text-2xl">Tracks of the Week</div>
      <div className="card-body bg-[#0d0d0d] rounded-lg">
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  );
};
