import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | ScaleUp',
  description:
    'How ScaleUp collects, uses, and shares personal information, and how to ask about, correct, or delete it.',
};

const updated = 'September 22, 2026';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-12 bg-emerald-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-emerald-100/80 leading-relaxed">
            Last updated {updated}. This policy describes ScaleUp&apos;s online information practices
            and how you can exercise your privacy rights. It follows the privacy policy disclosures
            in the California Consumer Privacy Act regulations effective January 1, 2026.
          </p>
        </div>
      </section>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700 leading-relaxed">
          <section id="collection">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Information we collect</h2>
            <p className="mb-4">
              In the 12 months before {updated}, ScaleUp collected personal information only when
              you chose to send it through the contact form on this website. We collect it directly
              from you. We do not buy personal information, and we do not collect it from data
              brokers or other businesses.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium text-gray-900">Identifiers:</span> your name and email
                address.
              </li>
              <li>
                <span className="font-medium text-gray-900">Commercial or professional information:</span>{' '}
                your business name, if you include it.
              </li>
              <li>
                <span className="font-medium text-gray-900">Customer communications:</span> the
                message you write.
              </li>
            </ul>
            <p className="mt-4">
              We do not collect sensitive personal information, such as government ID numbers,
              precise location, financial account numbers, or health information. We do not use
              analytics cookies, advertising cookies, or automated decision-making technology on
              this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why we collect it</h2>
            <p>
              We use this information to read your inquiry, reply to you, and discuss a possible
              website project. We keep it only as long as needed for that conversation and for
              ordinary project records, then delete it when it is no longer needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Sale, sharing, and disclosure</h2>
            <p className="mb-4">
              ScaleUp does not sell personal information. ScaleUp does not share personal
              information for cross-context behavioral advertising. That was true for the 12 months
              before {updated}. Because we do not sell or share personal information, there is no
              sale or share to opt out of, and browser opt-out preference signals do not change a
              sale or share setting on this site.
            </p>
            <p className="mb-4">
              We disclose contact-form information to one service provider: an email delivery
              service that transmits your message to ScaleUp so we can respond. That disclosure is
              for the business purpose of delivering and answering your inquiry. We do not allow
              that provider to use your information for its own marketing.
            </p>
            <p>
              We do not have actual knowledge that we sell or share the personal information of
              anyone under 16. This website is not directed to children under 13, and we do not
              knowingly collect their personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your privacy rights</h2>
            <p className="mb-4">
              Depending on where you live, including if you are a California resident, you may have
              these rights regarding personal information we hold about you:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium text-gray-900">Know:</span> ask what personal
                information we have collected about you, where it came from, why we collected it,
                and who we disclosed it to, including the specific pieces of information.
              </li>
              <li>
                <span className="font-medium text-gray-900">Delete:</span> ask us to delete personal
                information we collected from you, subject to exceptions such as completing a
                transaction you requested or keeping a record we are legally required to retain.
              </li>
              <li>
                <span className="font-medium text-gray-900">Correct:</span> ask us to correct
                inaccurate personal information.
              </li>
              <li>
                <span className="font-medium text-gray-900">Opt out of sale or sharing:</span> this
                right applies if a business sells or shares personal information. ScaleUp does not.
              </li>
              <li>
                <span className="font-medium text-gray-900">Limit use of sensitive information:</span>{' '}
                this right applies when a business uses sensitive personal information beyond
                limited permitted purposes. ScaleUp does not collect sensitive personal information.
              </li>
              <li>
                <span className="font-medium text-gray-900">No retaliation:</span> we will not deny
                services, charge a different price, or provide a different level of service because
                you exercise a privacy right.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How to make a request</h2>
            <p className="mb-4">
              Email{' '}
              <a href="mailto:evan05miller@gmail.com" className="text-emerald-700 font-medium hover:text-emerald-800">
                evan05miller@gmail.com
              </a>{' '}
              with the subject line &quot;Privacy request&quot; and say whether you want to know,
              delete, or correct your information. An authorized agent may email the same address
              with proof that you authorized them to act for you.
            </p>
            <p>
              To verify a request to know, delete, or correct, we may ask you to confirm the email
              address you used on the contact form, or to provide enough detail for us to match the
              request to that message. We will respond within 45 days. If we need more time, we
              will tell you why and may take up to 45 additional days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Tracking and Do Not Track</h2>
            <p>
              This site does not track you across other websites and does not respond to browser
              Do Not Track signals by changing a tracking or advertising setting, because we do not
              run that kind of tracking. Third parties do not collect information about your
              activity on this site for their own advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to this policy</h2>
            <p>
              If our information practices change in a material way, we will update this page and
              change the date at the top. The current version is always available from the Privacy
              Policy link at the bottom of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Questions</h2>
            <p>
              Questions about this policy or our information practices can be sent to{' '}
              <a href="mailto:evan05miller@gmail.com" className="text-emerald-700 font-medium hover:text-emerald-800">
                evan05miller@gmail.com
              </a>
              . You can also return to the{' '}
              <Link href="/" className="text-emerald-700 font-medium hover:text-emerald-800">
                homepage
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
