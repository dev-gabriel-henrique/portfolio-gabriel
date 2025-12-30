import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  lang?: string;
  noindex?: boolean;
}

const updateMeta = (name: string, content: string, attr = "name") => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  lang = "pt-BR",
  noindex = false,
}) => {
  useEffect(() => {
    if (title) document.title = title;

    updateMeta("description", description || "");
    updateMeta("og:title", title || "", "property");
    updateMeta("og:description", description || "", "property");
    updateMeta("og:url", url || "", "property");
    updateMeta("og:image", image || "", "property");
    updateMeta("twitter:card", image ? "summary_large_image" : "summary");
    updateMeta("twitter:title", title || "");
    updateMeta("twitter:description", description || "");
    updateMeta("twitter:image", image || "");

    upsertLink("canonical", url || window.location.pathname);

    const htmlEl = document.documentElement;
    if (htmlEl && lang) htmlEl.lang = lang;

    updateMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
  }, [title, description, url, image, lang, noindex]);

  return null;
};

export default SEO;
