import { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className='w-full py-6 lg:py-12'>
        <div className='container grid gap-6 px-4 md:px-6 lg:gap-12'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Privacy Policy
            </h1>
            <p className='max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
              Last updated: April 8, 2024
            </p>
          </div>
          <div className='space-y-6'>
            <p>
              {siteConfig.name} (&quot;us&quot;, &quot;we&quot;, or
              &quot;our&quot;) operates the{' '}
              <Link
                href={siteConfig.websiteUrl}
                className='text-muted-foreground underline'
              >
                {siteConfig.websiteUrl}
              </Link>{' '}
              website (hereinafter referred to as the &quot;Service&quot;).
            </p>
            <p>
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data. We use your data
              to provide and improve the Service. By using the Service, you
              agree to the collection and use of information in accordance with
              this policy. Unless otherwise defined in this Privacy Policy, the
              terms used in this Privacy Policy have the same meanings as in our
              Terms and Conditions, accessible from{' '}
              <Link
                href={siteConfig.websiteUrl}
                className='text-muted-foreground underline'
              >
                {siteConfig.websiteUrl}
              </Link>
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>
              Information Collection and Use
            </h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
            <h3 className='text-xl font-bold'>Types of Data Collected</h3>
            <p>
              Personal Data While using our Service, we may ask you to provide
              us with certain personally identifiable information that can be
              used to contact or identify you (&quot;Personal Data&quot;).
              Personally identifiable information may include, but is not
              limited to: Email address First name and last name Cookies and
              Usage Data
            </p>
            <h3 className='text-xl font-bold'>Usage Data</h3>
            <p>
              We may also collect information on how the Service is accessed and
              used (&quot;Usage Data&quot;). This Usage Data may include
              information such as your computer&apos;s Internet Protocol address
              (e.g. IP address), browser type, browser version, the pages of our
              Service that you visit, the time and date of your visit, the time
              spent on those pages, unique device identifiers and other
              diagnostic data.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Use of Data</h2>
            <p>
              {siteConfig.name} uses the collected data for various purposes:
            </p>
            <ul className='list-disc list-inside'>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer care and support</li>
              <li>
                To provide analysis or valuable information so that we can
                improve the Service
              </li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Transfer of Data</h2>
            <p>
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ than those from your jurisdiction.
            </p>
            <p>
              If you are located outside United States and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Links to Other Sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party&apos;s site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update the
              &quot;effective date&quot; at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className='list-disc list-inside'>
              <li>
                By email:{' '}
                <Link
                  href={`mailto:${siteConfig.contactEmailAddress}`}
                  className='text-muted-foreground underline'
                >
                  {siteConfig.contactEmailAddress}
                </Link>
              </li>
              <li>
                By visiting this page on our website:
                <Link
                  href='/contact'
                  className='text-muted-foreground underline'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
