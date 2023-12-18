import { Layout } from "@/components/layout";
import { Header } from "@/app/[slug]/components/header";
import Issues  from "@/app/[slug]/components/issues";

export default function Home({ params }: { params: { slug: string } }) {


    return (
        <div>
            <Layout header={<Header slug={params.slug} />}>
                <Issues slug={params.slug} />
            </Layout>
        </div>
    )
}
