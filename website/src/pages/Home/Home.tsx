import { profiles } from "../../data/profiles";
import MainLayout from "../../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section className="hero">
        <p className="eyebrow">Bacalaureat la informatică</p>
        <h1>Învață pas cu pas. Alege-ți profilul.</h1>
        <p className="intro">
          Materiale organizate pe teme, pentru recapitulare și pregătirea
          examenului.
        </p>
      </section>
      <section className="profile-grid" aria-label="Alege profilul">
        {profiles.map((profile) => (
          <a className="profile-card" href={profile.href} key={profile.name}>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <span className="card-link">Explorează materialele →</span>
          </a>
        ))}
      </section>
    </MainLayout>
  );
}
