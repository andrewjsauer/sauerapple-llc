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
          Innovation for Mountain Towns and Outdoor Spaces
        </h2>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceItem}>
            <span>__________________________________</span>
            <p>intro</p>
            <p>
              We combine innovation with a passion for the outdoors.
              Specializing in technology solutions for mountain towns and
              outdoor spaces, we empower communities and elevate tourism
              experiences. By leveraging AI and cutting-edge tools, we create
              smarter, more sustainable ways to explore, plan, and connect with
              the natural beauty and vibrant charm of mountain living.
            </p>
          </div>
        </div>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceItem}>
            <span>__________________________________</span>
            <p>projects</p>
            <p>
              These projects represent just a glimpse into our expertise in
              blending cutting-edge tools with community-driven goals to create
              meaningful, impactful solutions.
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
              A web application for the San Gorgonio Wilderness Association and
              Cucamonga Wilderness, streamlining permit management. This tool
              simplifies applications and reservations, making it easier for
              hikers to access and enjoy the wilderness responsibly.
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
              A trail conditions app for hikers and backpackers exploring the
              San Gorgonio Wilderness. Share and access up-to-date trail
              information to enhance safety and enjoyment. Expansion to
              additional wilderness areas is on the horizon.
            </p>
          </div>
          <div className={styles.projectItem}>
            <span>04</span>
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
                A community-driven platform for sharing real-time weather and
                road conditions in the Big Bear area. Designed for locals and
                visitors alike, it ensures safer and more informed travel
                experiences.
              </p>
            </div>
          </div>
          <div className={styles.projectItem}>
            <span>05</span>
            <div className={styles.projectLinkContainer}>
              <Link
                className={styles.projectLink}
                href="https://rag-big-bear-water-project-njkz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Replenish Big Bear Chatbot (opens in a new tab)"
              >
                chatbot
              </Link>
            </div>
            <div className={styles.projectLinkContainer}>
              <p>
                An app created for the Replenish Big Bear project. This
                AI-powered chatbot provides real-time access to water
                sustainability information, making complex topics accessible to
                the community.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceItem}>
            <span>__________________________________</span>
            <p>about</p>
            <p>
              At the heart of our work is a passion for outdoor spaces and the
              mountain communities that make them special. Founded by{" "}
              <Link
                href="https://www.linkedin.com/in/andrewjsauer/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.personalLink}
              >
                Andrew Sauer
              </Link>
              , a software developer and outdoor enthusiast, our mission is to
              empower mountain towns with innovative technology solutions that
              enhance tourism, foster community engagement, and preserve the
              natural beauty we all treasure.
            </p>
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
