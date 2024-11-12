import Layout from "@/components/Layout";
import PostCard from "@/components/Post-Card";
import PostFormCard from "@/components/Post-Form-Card";

export default function Home({children}) {
  return (
    <Layout >
        <PostFormCard />
        <PostCard />
    </Layout>
  );
}