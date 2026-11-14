import { useEffect, useMemo, useState } from "react";
import type { Profile } from "../data/profiles";
import MainLayout from "../layouts/MainLayout";

interface ProfilePageProps {
  profile: Profile;
}

type DifficultyFilter = "Toate" | "Începător" | "Mediu" | "Avansat";

const STORAGE_KEY = "bac-informatica-progress";

function readStoredProgress(profileName: string) {
  if (typeof window === "undefined") {
    return {} as Record<string, boolean>;
  }

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    if (!rawValue) {
      return {} as Record<string, boolean>;
    }

    const parsed = JSON.parse(rawValue) as Record<string, Record<string, boolean>>;
    return parsed[profileName] ?? {};
  } catch {
    return {} as Record<string, boolean>;
  }
}

export default function ProfilePage({ profile }: ProfilePageProps) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("Toate");
  const [topicProgress, setTopicProgress] = useState<Record<string, boolean>>({});
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    setTopicProgress(readStoredProgress(profile.name));
  }, [profile.name]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    const parsed = rawValue ? (JSON.parse(rawValue) as Record<string, Record<string, boolean>>) : {};
    parsed[profile.name] = topicProgress;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  }, [profile.name, topicProgress]);

  const filteredTopics = useMemo(() => {
    return profile.topics.filter((topic) => {
      const matchesQuery = topic.title.toLowerCase().includes(query.toLowerCase()) ||
        topic.description.toLowerCase().includes(query.toLowerCase());
      const matchesDifficulty = difficulty === "Toate" || topic.difficulty === difficulty;
      return matchesQuery && matchesDifficulty;
    });
  }, [difficulty, profile.topics, query]);

  const completionRate = Math.round(
    (Object.values(topicProgress).filter(Boolean).length / Math.max(profile.topics.length, 1)) * 100,
  );

  const currentQuestion = profile.quiz[selectedQuestion];
  const currentAnswer = answers[currentQuestion?.id ?? ""];

  const handleToggleTopic = (topicId: string) => {
    setTopicProgress((previous) => ({
      ...previous,
      [topicId]: !previous[topicId],
    }));
  };

  const handleAnswerSelect = (option: string) => {
    if (!currentQuestion) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: option,
    }));
  };

  return (
    <MainLayout>
      <section className="hero profile-hero">
        <div>
          <p className="eyebrow">Profil de studiu</p>
          <h1>{profile.name}</h1>
          <p className="intro">{profile.description}</p>
          <div className="hero-actions compact-actions">
            <a className="primary-button" href="#">
              ← Înapoi la profiluri
            </a>
          </div>
        </div>

        <div className="profile-summary-card" aria-label="Progres profil">
          <p className="panel-label">Progres</p>
          <div className="progress-ring" aria-label={`Progres ${completionRate}%`}>
            <span>{completionRate}%</span>
          </div>
          <p>
            {Object.values(topicProgress).filter(Boolean).length} / {profile.topics.length} capitole studiate
          </p>
        </div>
      </section>

      <section className="section-header split-header">
        <div>
          <p className="eyebrow">Plan de studiu</p>
          <h2>Capitole și teme cheie</h2>
        </div>
        <div className="search-controls">
          <input
            type="search"
            placeholder="Caută un capitol"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Caută un capitol"
          />
          <div className="filter-pills" aria-label="Filtrează după dificultate">
            {(["Toate", "Începător", "Mediu", "Avansat"] as DifficultyFilter[]).map((level) => (
              <button
                key={level}
                type="button"
                className={difficulty === level ? "filter-pill active" : "filter-pill"}
                onClick={() => setDifficulty(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="topic-grid" aria-label="Teme de studiu">
        {filteredTopics.map((topic) => (
          <article className="topic-card" key={topic.id}>
            <div className="topic-top-row">
              <span className="topic-number">{topic.difficulty}</span>
              <button
                type="button"
                className={topicProgress[topic.id] ? "study-toggle done" : "study-toggle"}
                onClick={() => handleToggleTopic(topic.id)}
              >
                {topicProgress[topic.id] ? "Studiat" : "Marchează"}
              </button>
            </div>

            <h2>{topic.title}</h2>
            <p>{topic.description}</p>

            <div className="topic-detail-box">
              <strong>Concept:</strong>
              <p>{topic.concept}</p>
            </div>

            <pre className="code-block">{topic.cppExample}</pre>

            <ul className="tip-list">
              {topic.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {filteredTopics.length === 0 ? (
        <p className="empty-state">Nu există teme care să corespundă căutării tale.</p>
      ) : null}

      <section className="info-grid">
        <article className="info-card">
          <p className="eyebrow">Săptămâni de lucru</p>
          <h3>Plan de studiu</h3>
          <ul className="plan-list">
            {profile.studyPlan.map((item) => (
              <li key={item.week}>
                <strong>{item.week}</strong>
                <span>{item.focus}</span>
                <ul>
                  {item.tasks.map((task) => (
                    <li key={`${item.week}-${task}`}>{task}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <p className="eyebrow">Resurse rapide</p>
          <h3>Ce să revizuiești</h3>
          <ul className="resource-list">
            {profile.resources.map((resource) => (
              <li key={resource.title}>
                <strong>{resource.type}</strong>
                <h4>{resource.title}</h4>
                <p>{resource.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="quiz-panel" aria-label="Quiz rapid">
        <div className="section-header compact-title">
          <div>
            <p className="eyebrow">Verificare</p>
            <h2>Quiz rapid</h2>
          </div>
        </div>

        {currentQuestion ? (
          <>
            <p className="quiz-counter">
              Întrebarea {selectedQuestion + 1} / {profile.quiz.length}
            </p>
            <h3>{currentQuestion.question}</h3>
            <div className="quiz-options">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer === option;
                const isCorrect = option === currentQuestion.correctAnswer;
                const showCorrect = currentAnswer !== undefined && isCorrect;

                return (
                  <button
                    key={option}
                    type="button"
                    className={[
                      "quiz-option",
                      isSelected ? "selected" : "",
                      showCorrect ? "correct" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {currentAnswer ? (
              <div className={currentAnswer === currentQuestion.correctAnswer ? "quiz-feedback success" : "quiz-feedback error"}>
                {currentAnswer === currentQuestion.correctAnswer ? "Corect!" : "Gresit."} {currentQuestion.explanation}
              </div>
            ) : null}

            <div className="quiz-actions">
              <button
                type="button"
                className="secondary-button small"
                onClick={() => setSelectedQuestion((previous) => Math.max(previous - 1, 0))}
                disabled={selectedQuestion === 0}
              >
                Înapoi
              </button>
              <button
                type="button"
                className="primary-button small"
                onClick={() => setSelectedQuestion((previous) => Math.min(previous + 1, profile.quiz.length - 1))}
                disabled={selectedQuestion === profile.quiz.length - 1}
              >
                Următoarea
              </button>
            </div>
          </>
        ) : null}
      </section>
    </MainLayout>
  );
}
