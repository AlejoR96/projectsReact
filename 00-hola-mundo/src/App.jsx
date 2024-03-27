import "./App.css";
import { XFollowCard } from "./XFollowcard";

export function App() {
  const addAt = (userName) => `@${userName}`
  return (
    <section className="appComponent">
    <XFollowCard isFollowing userName="Soysantoguerrero" name="Alejandro Rivera"/>
    <XFollowCard isFollowing userName="laurajperezz" name="Laura Perez"/>
    <XFollowCard isFollowing userName="_valentinazuluaga_" name="Valentina Zuluaga"/>
    </section>
  
  );
}
