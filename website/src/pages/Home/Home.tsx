import { profiles } from "../../data/profiles";
import MainLayout from "../../layouts/MainLayout";

export default function Home() {
  const totalTopics = profiles.reduce((sum, profile) => sum + profile.topics.length, 0);
  const totalQuizQuestions = profiles.reduce((sum, profile) => sum + profile.quiz.length, 0);
  const totalResources = profiles.reduce((sum, profile) => sum + profile.resources.length, 0);

  return (
    <MainLayout>
      <section className="hero hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Bacalaureat la informatică</p>
          <h1>Învață pas cu pas. Alege-ți profilul și construiește-ți ritmul.</h1>
          <p className="intro">
            Materiale organizate pe capitole, exerciții, explicații și simulări pentru
            pregătirea eficientă a examenului.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#mate-info">
              Explorează Mate-Info
            </a>
            <a className="secondary-button" href="#stiinte-ale-naturii">
              Explorează Științe ale naturii
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Statistici platformă">
          <p className="panel-label">Platformă</p>
          <div className="metric-stack">
            <div className="metric-item">
              <strong>{totalTopics}</strong>
              <span>Capitole</span>
            </div>
            <div className="metric-item">
              <strong>{totalQuizQuestions}</strong>
              <span>Întrebări de test</span>
            </div>
            <div className="metric-item">
              <strong>{totalResources}</strong>
              <span>Resurse rapide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-strip" aria-label="Avantaje platformă">
        <article>
          <h2>Recapitulare clară</h2>
          <p>Explicații scurte, structurate și adaptate programelor studiate.</p>
        </article>
        <article>
          <h2>Exerciții practice</h2>
          <p>Probleme de tip BAC cu algoritmi, C++ și explicații pas cu pas.</p>
        </article>
        <article>
          <h2>Progres personal</h2>
          <p>Urmărește capitolele studiate și lucrează în ritmul tău.</p>
        </article>
      </section>

      <section className="section-header">
        <div>
          <p className="eyebrow">Alege profilul</p>
          <h2>Pregătire structurată pe domenii</h2>
        </div>
      </section>

      <section className="profile-grid" aria-label="Alege profilul">
        {profiles.map((profile) => (
          <a className="profile-card" href={profile.href} key={profile.name}>
            <div className="card-head">
              <span className="pill">Profil</span>
              <span className="card-count">{profile.topics.length} teme</span>
            </div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <div className="tag-row">
              {profile.highlights.map((highlight) => (
                <span className="tag" key={`${profile.name}-${highlight}`}>
                  {highlight}
                </span>
              ))}
            </div>
            <span className="card-link">Explorează materialele →</span>
          </a>
        ))}
      </section>
    </MainLayout>
  );
}
