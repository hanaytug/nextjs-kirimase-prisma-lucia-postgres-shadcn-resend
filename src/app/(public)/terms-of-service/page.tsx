import { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className='w-full py-6 lg:py-12'>
        <div className='container grid gap-6 px-4 md:px-6 lg:gap-12'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Terms of Service
            </h1>
            <p className='max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
              Last updated: April 8, 2024
            </p>
          </div>
          <div className='space-y-6'>
            <p>
              These terms and conditions outline the rules and regulations for
              the use of {siteConfig.name}&apos;s Website, located at{' '}
              <Link
                href={siteConfig.websiteUrl}
                className='text-muted-foreground underline'
              >
                {siteConfig.websiteUrl}
              </Link>
              .
            </p>
            <p>
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use {siteConfig.name} if you do not
              agree to take all of the terms and conditions stated on this page.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Cookies</h2>
            <p>
              We employ the use of cookies. By accessing {siteConfig.name}, you
              agreed to use cookies in agreement with the {siteConfig.name}
              &apos;s Privacy Policy.
            </p>
            <p>
              Most interactive websites use cookies to let us retrieve the
              user’s details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>License</h2>
            <p>
              Unless otherwise stated, {siteConfig.name} and/or its licensors
              own the intellectual property rights for all material on Example
              Website. All intellectual property rights are reserved. You may
              access this from {siteConfig.name} for your own personal use
              subjected to restrictions set in these terms and conditions.
            </p>
          </div>

          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>You must not:</h2>
            <ul className='list-disc list-inside'>
              <li>Republish material from Example Website</li>
              <li>Sell, rent or sub-license material from Example Website</li>
              <li>
                Reproduce, duplicate or copy material from Example Website
              </li>
              <li>Redistribute content from Example Website</li>
            </ul>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Your Privacy</h2>
            <p>
              Please read{' '}
              <Link
                href='/privacy-policy'
                className='text-muted-foreground underline'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Reservation of Rights</h2>
            <p>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it’s linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>
              Removal of links from our website
            </h2>
            <p>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className='list-disc list-inside'>
              <li>
                limit or exclude our or your liability for death or personal
                injury
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law
              </li>
            </ul>
            <p>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty.
            </p>
            <p>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Consent</h2>
            <p>
              By using our website, you hereby consent to our Terms of Service
              and agree to its Privacy Policy.
            </p>
          </div>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Update</h2>
            <p>
              Should we update, amend or make any changes to this document,
              those changes will be prominently posted here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
