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
    title: `${data?.title} | ZRDigitalTech`,
    description: data?.meta_description,
    openGraph: {
      url: `${process.env.SITE_URL}/artikel/${slug}`,
      images: `${process.env.SITE_URL}${data?.banner}`
    }
  };
}

const LatestNews = ({ params }) => {
  const { slug } = params;

  return <Page slug={slug} />;
};

export default LatestNews;
