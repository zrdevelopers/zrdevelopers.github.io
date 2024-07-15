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

const LatestNews = ({ params }) => {
  const { slug } = params;

  return <Page slug={slug} />;
};

export default LatestNews;
