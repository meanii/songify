export const Geners = () => {
  return (
    <div class="flex-none hidden lg:flex card h-56 w-fit ml-5 rounded-lg">
        <div className="card-title ml-7">
            Geners
        </div>
      <div className="card-body grid grid-cols-4 gap-4 content-start">
        <button className="btn">Classic</button>
        <button className="btn">K Pop</button>
        <button className="btn">Electronic</button>
        <button className="btn">Band</button>
        <button className="btn">Rock</button>
      </div>
    </div>
  );
};
