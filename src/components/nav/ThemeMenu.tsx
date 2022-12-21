import F from "./f.png";
export const ThemeMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      style={{
        opacity: isOpen ? "1" : "0",
        transition: "all .1s ease-in",
      }}
      id="nav-items"
      className="theme-picker"
    >
      <ColorItem
        textColor="black"
        backgroundColor="wheat"
        cardBackgroundColor="white"
      />
      <ColorItem
        textColor="black"
        backgroundColor="white"
        cardBackgroundColor="white"
      />
      <ColorItem
        textColor="black"
        backgroundColor="lightcoral"
        cardBackgroundColor="white"
      />
      <ColorItem
        textColor="black"
        backgroundColor="lightgray"
        cardBackgroundColor="white"
      />
      <ColorItem
        textColor="white"
        backgroundColor="#1A1A1A"
        cardBackgroundColor="1A1A1A"
      />

      <ColorItem
        textColor="#ADFF2F"
        backgroundColor="#66FF00"
        cardBackgroundColor="#66FF00"
      />
      <img
        src={F}
        alt=""
        style={{ position: "absolute", width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

const ColorItem = ({
  backgroundColor,
  textColor,
  cardBackgroundColor,
}: {
  backgroundColor: string;
  textColor: string;
  cardBackgroundColor: string;
}) => {
  const onChangeTheme = () => {
    const r = document.documentElement;
    if (r) {
      r.style.setProperty("--background-color", backgroundColor);
      r.style.setProperty("--card-background-color", cardBackgroundColor);
      r.style.setProperty("--text-color", textColor);
    }
  };
  return (
    <div
      onClick={onChangeTheme}
      className="theme-circle"
      style={{ background: backgroundColor }}
    />
  );
};
