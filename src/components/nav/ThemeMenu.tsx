const themes = [
  {
    name: "white",
    textColor: "black",
    backgroundColor: "white",
    footerBackgroundColor: "white",
    cardBackgroundColor: "white",
  },
  {
    name: "wheat",
    textColor: "black",
    backgroundColor: "wheat",
    footerBackgroundColor: "wheat",
    cardBackgroundColor: "white",
  },
  {
    name: "lightcoral",
    textColor: "black",
    backgroundColor: "lightcoral",
    footerBackgroundColor: "lightcoral",
    cardBackgroundColor: "white",
  },
  {
    name: "lightgray",
    textColor: "black",
    backgroundColor: "lightgray",
    footerBackgroundColor: "lightgray",
    cardBackgroundColor: "white",
  },
  {
    name: "dark1",
    textColor: "white",
    backgroundColor: "#1A1A1A",
    footerBackgroundColor: "#1A1A1A",
    cardBackgroundColor: "1A1A1A",
  },
  {
    name: "coolgreen",
    textColor: "white",
    backgroundColor: "#1CAC78",
    footerBackgroundColor: "#1CAC78",
    cardBackgroundColor: "#1CAC78",
  },
];

export const getTheme = (name: string) => {
  const filtered = themes.filter((t) => t.name === name);
  if (!filtered || filtered.length === 0 || !filtered[0]) {
    return themes[0];
  }

  return filtered[0];
};
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
      {themes.map((t) => {
        return <ColorItem key={t.name} theme={t} />;
      })}
    </div>
  );
};

interface ThemeObj {
  name: string;
  backgroundColor: string;
  footerBackgroundColor: string;
  textColor: string;
  cardBackgroundColor: string;
}
const ColorItem = ({ theme }: { theme: ThemeObj }) => {
  const {
    backgroundColor,
    textColor,
    cardBackgroundColor,
    footerBackgroundColor,
    name,
  } = theme;
  const onChangeTheme = () => {
    const r = document.documentElement;
    if (r) {
      r.style.setProperty("--background-color", backgroundColor);
      r.style.setProperty("--card-background-color", cardBackgroundColor);
      r.style.setProperty("--text-color", textColor);
      r.style.setProperty("--footer-background-color", footerBackgroundColor);
      localStorage.setItem("theme", name);
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
