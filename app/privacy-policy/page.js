import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Werdio",
  description: "Werdio privacy policy.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <header className="nav">
        <Link className="brand" href="/">Werdio</Link>
        <nav><Link href="/">Home</Link></nav>
      </header>

      <main className="section legal">
        <div className="sectionLabel">WERDIO</div>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated: October 7, 2026</strong></p>

        <p>
          Werdio respects your privacy. This Privacy Policy explains how
          information may be handled when you use the Werdio mobile application.
        </p>

        <h3>Advertising</h3>
        <p>
          Werdio may use Google AdMob or other third-party advertising services
          to display advertisements. These services may collect and use
          information such as advertising identifiers, device information,
          approximate location, and ad interaction information as permitted by
          their policies and applicable law.
        </p>

        <h3>Analytics and diagnostics</h3>
        <p>
          Werdio may use third-party services for analytics, crash reporting,
          and app performance monitoring. Such services may process technical
          information about the device and app.
        </p>

        <h3>Children</h3>
        <p>
          Werdio is not intended to knowingly collect personal information
          directly from children. If you believe personal information has been
          provided to us improperly, please contact us.
        </p>

        <h3>Third-party services</h3>
        <p>
          Third-party services have their own privacy policies. Their
          processing is governed by those policies in addition to applicable law.
        </p>

        <h3>Contact</h3>
        <p>
          For privacy questions, contact: <strong>YOUR_SUPPORT_EMAIL@example.com</strong>
        </p>
      </main>

      <footer>
        <div>© {new Date().getFullYear()} Werdio.</div>
        <Link href="/">Back to Werdio</Link>
      </footer>
    </>
  );
}
