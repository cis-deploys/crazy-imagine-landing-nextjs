import { NextSeo } from 'next-seo';

function Seo({ title, description, keywords, image, url }) {

  return (
    <NextSeo
      title="Crazy Imagine Software"
      titleTemplate="Crazy Imagine Software | Software Agency"
      description="Software and Mobile Application Development Company, Full Cycle Software Development and Dedicated Teams. The Best Developers To Hire"
      canonical='https://crazyimagine.com'
      openGraph={{
        title,
        description,
        keywords,
        images: [{ url: image, alt: title }],
        url,
      }}
    />
  );
}

export default Seo;
