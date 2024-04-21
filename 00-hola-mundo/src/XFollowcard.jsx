import { useState } from "react"

export function XFollowCard ({children, userName, name}) {
  
  const [isFollowing, setIsFollowing] = useState(false);
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
  ? 'x-buttonFollow is-following' 
  : 'x-buttonFollow'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }


  return(
    <article className="x-followCard">
      <header className="x-followCard-header">
        <img
          className="x-followCard-avatar"
          alt="avatarSG"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="x-followCard-info">
         <strong>{children}</strong> 
          <span className="x-followCard-infoUserName">
            @{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
  
}