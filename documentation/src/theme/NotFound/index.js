import React, { useEffect } from "react";
import { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import NotFoundContent from "@theme/NotFound/Content";

export default function Index() {
  const title = translate({
    id: "theme.NotFound.title",
    message: "Page Not Found",
  });

  useEffect(() => {
    // Redirect to /docs/get_started/intro after the component mounts
    window.location.href = "/docs/get_started/intro";
  }, []);

  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}
