import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
