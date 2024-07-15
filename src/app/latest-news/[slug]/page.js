import DataLatestNews from '@/redux/action/latest-news/data-latest-news.json';
import Page from '@/app/page';

async function fetchSlugs() {
  const slugs = DataLatestNews.map((item) => item?.slug);
  return slugs;
}

export async function generateStaticParams() {
  const slugs = await fetchSlugs();
  return slugs.map((slug) => ({
    slug: slug.toString() // Convert slug to string
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = DataLatestNews.find((item) => item.slug === slug);

  return {
    title: `${data?.title} | ZRDevelopers`,
    description: data?.meta_description,
    openGraph: {
      url: `https://zrdevelopers.github.io/latest-news/${slug}`,
      images: `https://zrdevelopers.github.io${data?.banner}`
    }
  };
}

const LatestNews = ({ params }) => {
  const { slug } = params;

  return <Page slug={slug} />;
};

export default LatestNews;
