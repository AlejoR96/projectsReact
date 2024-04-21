import "./App.css";
import { XFollowCard } from "./XFollowcard";

const users = [
  {
    userName: 'soysantoguerrero',
    name: 'Alejandro Rivera',
    isFollowing: true
  },
  {
    userName: 'dvalencia220',
    name: 'Daniela Valencia',
    isFollowing: false
  },
  {
    userName: 'julieethaa_',
    name: 'Julieth ',
    isFollowing: true
  },
]


export function App() {
  return (
    <section className="appComponent">{
       
         users.map(({ userName, name, isFollowing }) => (
          <XFollowCard 
           userName={userName}
           key={userName}
           initialIsFollowing={isFollowing}
          >
          {name}
          </XFollowCard>
      ))
      }
    </section>
  );
}
