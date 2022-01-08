import { Album } from "../album/Album";

export const Hero = () => {
  return (
    <div className="m-10 h-fit p-4 space-x-4 carousel carousel-start rounded-box text-white">
      <div className="carousel-item gap-2">
        <Album image={'images/album_art_02.jpeg'}/>
        <Album image={'images/album_art_02.jpeg'}/>
        <Album image={'images/album_art_03.jpeg'}/>
        <Album image={'images/album_art_04.jpeg'}/>
        <Album image={'images/album_art_02.jpeg'}/>
        <Album image={'images/album_art_02.jpeg'}/>
        <Album image={'images/album_art_03.jpeg'}/>
        <Album image={'images/album_art_04.jpeg'}/>
      </div>
    </div>
  );
};
