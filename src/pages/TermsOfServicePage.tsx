import useSEO from '../hooks/useSEO'

export default function TermsOfServicePage() {
  useSEO(
    'Terms of Service',
    'ReadyCrew Trades Placement terms of service. Read our terms and conditions for using our website and staffing services.'
  )

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="w-full max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl text-[#111827] mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          Terms of Service
        </h1>
        <p className="text-sm text-[#6B7280] mb-10">Last updated: April 9, 2026</p>

        <div className="prose prose-sm max-w-none text-[#6B7280] [&_h2]:text-[#111827] [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-bold [&_h3]:text-[#111827] [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the ReadyCrew Trades Placement ("ReadyCrew," "we," "our," or "us") website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>2. Description of Services</h2>
          <p>
            ReadyCrew provides staffing and recruitment services specializing in the trades industry. Our services include sourcing, vetting, and placing skilled service technicians with trades businesses. The specific terms of any placement are governed by separate agreements between ReadyCrew and the hiring company.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>3. Use of Website</h2>
          <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use the website to transmit any harmful, offensive, or misleading content</li>
            <li>Interfere with or disrupt the website or its servers</li>
            <li>Use automated systems to scrape or extract data from the website</li>
          </ul>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and software — is the property of ReadyCrew or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>5. User Submissions</h2>
          <p>
            Any information you submit through our website (including contact forms, booking requests, or candidate applications) must be accurate and complete. You are responsible for the accuracy of all information you provide. By submitting information, you grant ReadyCrew the right to use that information for the purposes described in our Privacy Policy.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>6. Staffing Services</h2>
          <p>
            Our staffing placements are subject to separate service agreements. The terms presented on this website (including any guarantees or timelines) are general descriptions and may vary based on individual agreements. Specific placement terms, fees, and guarantees will be outlined in your service agreement with ReadyCrew.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>7. Disclaimer of Warranties</h2>
          <p>
            Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding the results of using our staffing services except as outlined in individual service agreements.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, ReadyCrew shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services. Our total liability for any claim arising from these Terms shall not exceed the amount you paid to ReadyCrew in the twelve months preceding the claim.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless ReadyCrew, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the website, violation of these Terms, or infringement of any third-party rights.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the state in which ReadyCrew operates, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of that jurisdiction.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any modifications constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>12. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>13. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
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
