import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Blackaion',
  description:
    'Blackaion Capital cookie policy describing how we use cookies and similar technologies on www.blackaion.com.',
  robots: 'noindex, nofollow',
};

const CookiePolicyPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Left sidebar - section list, hidden on small screens */}
          <aside className="mb-10 hidden text-sm text-slate-600 lg:col-span-3 lg:mb-0 lg:block">
            <div className="sticky top-24 space-y-6 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Policy overview
                </p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#section-1"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      1. What Are Cookies?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-2"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      2. Types of Cookies We Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-3"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      3. How We Use Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-4"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      4. Third-Party Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-5"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      5. Managing Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-6"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      6. Updates to This Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-7"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      7. Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-9">
            <header className="mb-10">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Blackaion Capital – Cookie Policy
              </h1>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">
                Last Updated: 11 November 2025
              </p>
              <p className="mt-4 max-w-2xl text-sm text-slate-600">
                This Cookie Policy explains how Blackaion Capital uses cookies and similar technologies on
                www.blackaion.com.
              </p>
            </header>

            <div className="space-y-8 text-sm leading-relaxed text-slate-700">
              {/* 1. What Are Cookies? */}
              <section id="section-1" aria-label="What Are Cookies?" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help improve
                  your browsing experience and allow us to analyse how our Website is used.
                </p>
              </section>

              {/* 2. Types of Cookies We Use */}
              <section id="section-2" aria-label="Types of Cookies We Use" className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900">2. Types of Cookies We Use</h2>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">
                    a) Essential Cookies – Required for Website functionality.
                  </h3>
                  <p>Required for the Website to function properly.</p>
                  <p>Examples:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Page navigation</li>
                    <li>Security</li>
                    <li>Form submission</li>
                  </ul>
                  <p>These cannot be disabled.</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">b) Analytics Cookies – Used to analyse visitor behaviour</h3>
                  <p>Used to understand how visitors use the Website.</p>
                  <p>Examples:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Google Analytics</li>
                    <li>Traffic sources</li>
                    <li>User interaction patterns</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">c) Functional Cookies</h3>
                  <p>Enable enhanced functionality, such as:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Remembering preferences</li>
                    <li>Improving site personalization</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">
                    d) Marketing Cookies – Used for ad relevance (if enabled).
                  </h3>
                  <p>Used to deliver relevant ads or track campaign performance.</p>
                  <p>
                    We currently do not run targeted ads, but third-party tools may collect data.
                  </p>
                </div>
              </section>

              {/* 3. How We Use Cookies */}
              <section id="section-3" aria-label="How We Use Cookies" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">3. How We Use Cookies</h2>
                <p>We use cookies to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Improve performance</li>
                  <li>Secure the Website</li>
                  <li>Understand visitor interactions</li>
                  <li>Enhance experience</li>
                </ul>
              </section>

              {/* 4. Third-Party Cookies */}
              <section id="section-4" aria-label="Third-Party Cookies" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">4. Third-Party Cookies</h2>
                <p>We may allow trusted third parties to set cookies, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Google Analytics</li>
                  <li>Cloudflare</li>
                  <li>Embedded media providers (YouTube, Vimeo)</li>
                  <li>Social media platforms</li>
                </ul>
                <p>These third-party cookies are governed by their own privacy policies.</p>
              </section>

              {/* 5. Managing Cookies */}
              <section id="section-5" aria-label="Managing Cookies" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">5. Managing Cookies</h2>
                <p>You can control or disable cookies through your browser settings.</p>
                <p className="text-slate-600">
                  Please note: disabling cookies may affect Website functionality.
                </p>
                <p>To manage cookies:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Chrome: Settings → Privacy &amp; Security → Cookies</li>
                  <li>Safari: Preferences → Privacy</li>
                  <li>Firefox: Options → Privacy &amp; Security</li>
                  <li>Edge: Settings → Site permissions → Cookies</li>
                </ul>
                <p>
                  You can also use “Do Not Track” settings or opt-out tools for analytics platforms.
                </p>
              </section>

              {/* 6. Updates to This Policy */}
              <section id="section-6" aria-label="Updates to This Policy" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">6. Updates to This Policy</h2>
                <p>We may update this Cookie Policy periodically. Updated versions will be posted on this page.</p>
              </section>

              {/* 7. Contact */}
              <section id="section-7" aria-label="Contact" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">7. Contact</h2>
                <p>For questions about this Cookie Policy, contact:</p>
                <p>info@blackaion.com</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;





































