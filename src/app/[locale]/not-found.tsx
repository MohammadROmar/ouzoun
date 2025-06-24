import Layout from '@/custom-pages/layout';
import NotFoundPageContent from '@/components/shared/not-found';

export default async function NotFoundPage() {
  return (
    <Layout hasFooter={false}>
      <NotFoundPageContent />
    </Layout>
  );
}
