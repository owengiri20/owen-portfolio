import OwenJPG from "../assets/owen.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      {/* column 1 */}
      <div className="column-1">
        <h1>OWEN GIRI</h1>
        <h2>FULL STACK DEVELOPER</h2>
      </div>

      {/* column 2 */}
      <div>
        <img src={OwenJPG} className="owen" alt="image of me (:" />
      </div>
    </div>
  );
};
