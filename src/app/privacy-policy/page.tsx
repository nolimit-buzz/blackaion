import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Blackaion',
  description:
    'Blackaion Capital Management Limited privacy policy describing how we collect, use, store, and protect personal information.',
  robots: 'noindex, nofollow',
};

const PrivacyPolicyPage = () => {
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
                      1. Information We Collect
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-2"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      2. How We Use Your Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-3"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      3. Legal Basis for Processing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-4"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      4. How We Share Your Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-5"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      5. International Transfers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-6"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      6. Data Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-7"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      7. Data Retention
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-8"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      8. Your Rights
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-9"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      9. Third-Party Links
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-10"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      10. Updates to This Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-11"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900"
                    >
                      11. Contact Us
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
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-600">
                Blackaion Capital Management Limited (&quot;Blackaion Capital&quot;, &quot;we&quot;, &quot;our&quot;,
                or &quot;us&quot;) is committed to protecting your personal data and respecting your privacy. This
                Privacy Policy explains how we collect, use, store, and protect your personal information when you
                visit www.blackaion.com (the &quot;Website&quot;), contact us, or engage with our services.
              </p>
            </header>

            <div className="space-y-8 text-sm leading-relaxed text-slate-700">
              {/* 1. Information We Collect */}
              <section id="section-1" aria-label="Information We Collect" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">1. Information We Collect</h2>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">a. Information You Provide Directly</h3>
                  <p>
                    We may collect personal information that you voluntarily provide, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Job title</li>
                    <li>Information submitted through contact forms, newsletters, investor or partnership inquiries</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">b. Information Collected Automatically</h3>
                  <p>When you visit the Website, we may automatically collect:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">c. Third-Party Data Sources</h3>
                  <p>We may receive information from:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Analytics providers (e.g., Google Analytics)</li>
                    <li>Social media platforms</li>
                    <li>Public databases</li>
                    <li>Service providers supporting website security and performance</li>
                  </ul>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section id="section-2" aria-label="How We Use Your Information" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Provide, maintain, and improve our Website</li>
                  <li>Respond to inquiries or partnership requests</li>
                  <li>Send updates, newsletters, or marketing communications</li>
                  <li>Conduct analytics to improve user experience</li>
                  <li>Ensure security and system integrity</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </section>

              {/* 3. Legal Basis for Processing */}
              <section id="section-3" aria-label="Legal Basis for Processing" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">3. Legal Basis for Processing</h2>
                <p>We process personal data under one or more of the following:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Consent</li>
                  <li>Legitimate interests</li>
                  <li>Performance of a contract</li>
                  <li>Compliance with legal obligations</li>
                </ul>
              </section>

              {/* 4. How We Share Your Information */}
              <section id="section-4" aria-label="How We Share Your Information" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">4. How We Share Your Information</h2>
                <p>We may share information with:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Service providers (hosting, analytics, security)</li>
                  <li>Professional advisors</li>
                  <li>Regulatory authorities</li>
                  <li>Affiliates within the Blackaion group</li>
                </ul>
                <p>We do not sell your information.</p>
              </section>

              {/* 5. International Transfers */}
              <section id="section-5" aria-label="International Transfers" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">5. International Transfers</h2>
                <p>
                  Your personal data may be transferred outside Nigeria, the UK, or the EU with appropriate safeguards.
                </p>
              </section>

              {/* 6. Data Security */}
              <section id="section-6" aria-label="Data Security" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">6. Data Security</h2>
                <p>We implement administrative, technical, and physical safeguards, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Encrypted data transmission</li>
                  <li>Access restrictions</li>
                  <li>Secure servers</li>
                </ul>
              </section>

              {/* 7. Data Retention */}
              <section id="section-7" aria-label="Data Retention" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">7. Data Retention</h2>
                <p>
                  We retain personal information only as long as necessary for business or legal purposes.
                </p>
              </section>

              {/* 8. Your Rights */}
              <section id="section-8" aria-label="Your Rights" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">8. Your Rights</h2>
                <p>You may have the right to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Access your data</li>
                  <li>Correct or update data</li>
                  <li>Request deletion</li>
                  <li>Withdraw consent</li>
                  <li>Request data portability</li>
                </ul>
                <p>
                  Contact: privacy@blackaion.com or info@blackaion.com
                </p>
              </section>

              {/* 9. Third-Party Links */}
              <section id="section-9" aria-label="Third-Party Links" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">9. Third-Party Links</h2>
                <p>We are not responsible for third-party website privacy practices.</p>
              </section>

              {/* 10. Updates to This Policy */}
              <section id="section-10" aria-label="Updates to This Policy" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">10. Updates to This Policy</h2>
                <p>Changes will be posted on this page.</p>
              </section>

              {/* 11. Contact Us */}
              <section id="section-11" aria-label="Contact Us" className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">11. Contact Us</h2>
                <p>Blackaion Capital Management Limited</p>
                <p>Email: info@blackaion.com</p>
                <p>Website: www.blackaion.com</p>
                <p>Lagos, Nigeria</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;


