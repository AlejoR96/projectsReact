import "./App.css";
export function App() {
  return (
    <article className="x-followCard">
      <header className="x-followCard-header">
        <img
          className="x-followCard-avatar"
          alt="avatarSG"
          src="https://unavatar.io/soysantoguerrero"
        />
        <div className="x-followCard-info">
          <strong>Alejandro Rivera</strong>
          <span className="x-followCard-infoUserName">@soysantoguerrero
          </span>
        </div>
      </header>

      <aside>
        <button className="x-buttonFollow">
          Seguir
          </button>
      </aside>
    </article>
  );
}
