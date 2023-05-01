import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

export const revalidate = 10800;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p className="text-center text-lg animate-pulse text-yellow-500">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const post = await client.fetch(query);

  return <BlogList posts={post} />;
}
