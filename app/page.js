import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="nav">
        <Link className="brand" href="/">Werdio</Link>
        <nav>
          <Link href="#about">About</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="#support">Support</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroContent">
            <span className="eyebrow">WORD PUZZLE GAME</span>
            <h1>Think. Connect.<br /><span>Discover words.</span></h1>
            <p>
              Werdio is a fun word puzzle game designed to challenge your
              vocabulary, pattern recognition, and quick thinking.
            </p>
            <div className="actions">
              <a className="button primary" href="#download">Get Werdio</a>
              <a className="button secondary" href="#about">Learn more</a>
            </div>
          </div>

          <div className="heroCard">
            <div className="circle">W</div>
            <div className="word">WERDIO</div>
            <div className="small">PLAY • THINK • MASTER</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionLabel">ABOUT WERDIO</div>
          <h2>A simple game with a clever challenge.</h2>
          <p>
            Build words from the available letters, solve each puzzle, and
            keep progressing through increasingly challenging levels.
          </p>

          <div className="cards">
            <article>
              <div className="icon">✦</div>
              <h3>Easy to start</h3>
              <p>Jump in quickly and learn the game as you play.</p>
            </article>
            <article>
              <div className="icon">⌘</div>
              <h3>Challenge yourself</h3>
              <p>Every level brings a new word puzzle to solve.</p>
            </article>
            <article>
              <div className="icon">★</div>
              <h3>Keep progressing</h3>
              <p>Complete puzzles and continue your word journey.</p>
            </article>
          </div>
        </section>

        <section id="download" className="download">
          <div>
            <div className="sectionLabel">AVAILABLE ON ANDROID</div>
            <h2>Ready to play?</h2>
            <p>Download Werdio from Google Play and start solving word puzzles.</p>
          </div>
          {/* Replace this href with your exact Werdio Play Store URL. */}
          <a className="button primary" href="#" aria-label="Werdio on Google Play">
            Google Play
          </a>
        </section>

        <section id="support" className="support">
          <div className="sectionLabel">SUPPORT</div>
          <h2>Need help?</h2>
          <p>For Werdio support, feedback, or privacy questions, contact the developer.</p>
          {/* Replace with your real support email. */}
          <a href="mailto:YOUR_SUPPORT_EMAIL@example.com">
            YOUR_SUPPORT_EMAIL@example.com
          </a>
        </section>
      </main>

      <footer>
        <div>© {new Date().getFullYear()} Werdio. All rights reserved.</div>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span> · </span>
          <Link href="#support">Support</Link>
        </div>
      </footer>
    </>
  );
}
