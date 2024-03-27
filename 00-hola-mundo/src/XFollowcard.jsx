export function XFollowCard ({userName, name, isFollowing}) {
  const srcImage = `https://unavatar.io/${userName}`;

  return(
    <article className="x-followCard">
      <header className="x-followCard-header">
        <img
          className="x-followCard-avatar"
          alt="avatarSG"
          src={srcImage}
        />
        <div className="x-followCard-info">
          <strong>{name}</strong>
          <span className="x-followCard-infoUserName">{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className="x-buttonFollow">
          Seguir
          </button>
      </aside>
    </article>
  )
  
}