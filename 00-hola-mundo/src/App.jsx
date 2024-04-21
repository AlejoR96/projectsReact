import "./App.css";
import { XFollowCard } from "./XFollowcard";

export function App() {

  return (
    <section className="appComponent">
      <XFollowCard isFollowing userName="soysantoguerrero">
         Alejandro Rivera 
      </XFollowCard>

      <XFollowCard isFollowing userName="laurajperezz">
        Laura Perez
      </XFollowCard>
        
    </section>
  );
}
