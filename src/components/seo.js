import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";
const Helmet = React.lazy(() => import("react-helmet"))

const SEO = ({ seo = {} }) => {
  const { i18n } = useTranslation()
  const lang = i18n.language 

  //Merge default and page-specific SEO values
  const fullSeo = { ...seo };
  

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        }
      );
    }

    if (fullSeo.shareImage) {
      const imageUrl =
        (process.env.NEXT_ROOT_URL || "http://127.0.0.1:8000") +
        fullSeo.shareImage.url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.keywords) {
      tags.push(
        {
          property: "og:keywords",
          content: fullSeo.keywords,
        },
        {
          name: "keywords",
          content: fullSeo.keywords,
        }
      );
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }
    tags.push({ name: "author", content: "Crazy Imagine" });
    tags.push({  name: "google-site-verification", content: "gWG5455C5suZDqXAyS4uY8m0s_OdEAUloa3wXye9yYg" });
    return tags;
  };

  const metaTags = getMetaTags();

  useEffect(() => {
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute("hreflang", lang)
    } 
  }, [lang])
  return (
    <>
      {typeof window !== 'undefined' && (
        <React.Suspense fallback={<Loading />}>
          <Helmet
            htmlAttributes={{lang}}
            title={fullSeo.metaTitle}
            titleTemplate={fullSeo.metaTitle}
            link={[
              // {
              //   rel: "icon",
              //   href: favicon.url,
              // },
              {
                rel: "stylesheet preload",
                href: "https://fonts.googleapis.com/css?family=Staatliches",
                as: "style"
              },
              {
                rel: "stylesheet preload",
                href:"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
                as: "style"
              },
            ]}
              script={[
                {
                  src:
                    "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
                },
                {
                  src:
                    "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
                },
                {
                  src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
                },
            ]}
            meta={metaTags}
          />
        </React.Suspense>
      )}
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};
