export default async function Page({
  params: { locale, slug = [''] }
}: {
  params: { locale: string; slug: string[] };
}): Promise<React.JSX.Element> {
  return (
    <section>
      <pre>{JSON.stringify({ runtime: 'node', locale, slug }, null, 2)}</pre>
    </section>
  );
}
