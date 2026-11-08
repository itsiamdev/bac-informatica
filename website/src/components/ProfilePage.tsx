import type { Profile } from "../data/profiles";
import MainLayout from "../layouts/MainLayout";

interface ProfilePageProps {
  profile: Profile;
}

export default function ProfilePage({ profile }: ProfilePageProps) {
  return (
    <MainLayout>
      <section className="hero">
        <p className="eyebrow">Profil de studiu</p>
        <h1>{profile.name}</h1>
        <p className="intro">{profile.description}</p>
        <a className="back-link" href="#">
          ← Înapoi la profiluri
        </a>
      </section>
      <section className="topic-grid" aria-label="Teme de studiu">
        {profile.topics.map((topic, index) => (
          <article className="topic-card" key={topic}>
            <span className="topic-number">{String(index + 1).padStart(2, "0")}</span>
            <h2>{topic}</h2>
          </article>
        ))}
      </section>
    </MainLayout>
  );
}
