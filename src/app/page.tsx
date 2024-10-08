import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>sauerApple</h1>
        <div className={styles.social}>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/company/18357086"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.headline}>
          Building engaging web and mobile applications.
        </h2>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceItem}>
            <span>__________________________________</span>
            <p>intro</p>
            <p>
              Welcome! Our team boasts alumni from Tinder to Warner Bros, we
              specialize in crafting custom web and mobile solutions tailored
              just for you. Explore some of our projects below.
            </p>
          </div>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projectItem}>
            <span>01</span>
            <div className={styles.projectLinkContainer}>
              <Link
                className={styles.projectLink}
                href="https://permits.sgwa.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="San Gorgonio Wilderness Permit Portal (opens in a new tab)"
              >
                permit portal
              </Link>
            </div>
            <p>
              A a web application tailored for the San Gorgonio Wilderness
              Association, simplifying the process of managing and applying for
              wilderness permits. This tool allows the association to
              efficiently handle applications and reservations, providing hikers
              with an accessible online platform to secure their permits.
            </p>
          </div>
          <div className={styles.projectItem}>
            <span>02</span>
            <div className={styles.projectLinkContainer}>
              <Link
                className={styles.projectLink}
                href="https://switchbacks.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="San Gorgonio Wilderness Trail Conditions (opens in a new tab)"
              >
                switchbacks
              </Link>
            </div>
            <p>
              A trail conditions web application designed for hikers and
              backpackers exploring the San Gorgonio Wilderness. Users can share
              and access the latest trail conditions, enhancing their hiking
              experience. The app plans to expand its coverage to include
              additional wilderness areas.
            </p>
          </div>
          <div className={styles.projectItem}>
            <span>03</span>
            <div className={styles.projectLinkContainer}>
              <h3>circle</h3>
              <span>(deprecated)</span>
            </div>
            <p>
              Circle was an iOS and Android app aimed at promoting mindfulness
              and tranquility. Utilizing AI, it offered personalized guided
              meditation sessions, helping users incorporate peace and
              mindfulness into their daily lives. Though no longer available,
              its concept focused on personal well-being.
            </p>
          </div>
          <div className={styles.projectItem}>
            <span>04</span>
            <div className={styles.projectLinkContainer}>
              <Link
                className={styles.projectLink}
                href="https://www.daily-qs.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daily Q's (opens in a new tab)"
              >
                daily q’s
              </Link>
            </div>
            <p>
              An app for couples in love. Daily Q’s encourages new shares,
              providing you and your partner with thoughtful questions and sweet
              moments throughout the day.
            </p>
          </div>
          <div className={styles.projectItem}>
            <span>05</span>
            <div className={styles.projectLinkContainer}>
              <Link
                className={styles.projectLink}
                href="https://www.bigbearconditions.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Big Bear Conditions (opens in a new tab)"
              >
                big bear conditions
              </Link>
            </div>
            <div className={styles.projectLinkContainer}>
              <p>
                Big Bear Conditions is a web application for the Big Bear area,
                offering locals and visitors a platform to check and share the
                latest weather and road conditions. This community-driven tool
                aims to ensure safe and enjoyable experiences for all visiting
                or living in the area.
              </p>
            </div>
          </div>
          <div className={styles.projectItem}>
            <span>06</span>
            <div className={styles.projectLinkContainer}>
              <Link
                className={styles.projectLink}
                href="https://rag-big-bear-water-project-njkz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Replenish Big Bear Chatbot (opens in a new tab)"
              >
                replenish big bear chatbot
              </Link>
            </div>
            <div className={styles.projectLinkContainer}>
              <p>
                Replenish Big Bear Chatbot is Retrieval-Augmented Generation
                (RAG) app for a city project called Replenish Big Bear, which
                provided residents with real-time access to water sustainability
                information through AI-driven responses.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <Link
            className={styles.contactLink}
            href="mailto:andrew@sauerapple.com"
            rel="noopener noreferrer"
            aria-label="Email sauerApple (opens in a new tab)"
          >
            Get in Touch.
          </Link>
        </div>
        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} sauerApple. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
