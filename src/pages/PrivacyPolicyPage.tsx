import useSEO from '../hooks/useSEO'

export default function PrivacyPolicyPage() {
  useSEO(
    'Privacy Policy',
    'ReadyCrew Trades Placement privacy policy. Learn how we collect, use, and protect your personal information.'
  )

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="w-full max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl text-[#111827] mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-[#6B7280] mb-10">Last updated: April 9, 2026</p>

        <div className="prose prose-sm max-w-none text-[#6B7280] [&_h2]:text-[#111827] [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-bold [&_h3]:text-[#111827] [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>1. Introduction</h2>
          <p>
            ReadyCrew Trades Placement ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect the following personal information when you interact with our website or services:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Company name and job title</li>
            <li>Information submitted through contact forms or booking requests</li>
            <li>Resume or employment-related information (for candidates)</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website or source</li>
          </ul>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our staffing services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Match candidates with appropriate job opportunities</li>
            <li>Send you relevant communications about our services</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>4. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Prospective employers (for candidates, with your consent)</li>
            <li>Service providers who assist in operating our website and services</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>6. Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of our website.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>8. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            ReadyCrew Trades Placement<br />
            Email: info@readycrewstaffing.com
          </p>
        </div>
      </div>
    </section>
  )
}
