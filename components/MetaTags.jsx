import Head from "next/head";

export default function MetaTags({
  title,
  description = "Blog platform built with Next.js, React and Firebase.",
  image = "/rekindle.png"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
