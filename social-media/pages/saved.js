import Layout from "@/components/Layout";
import PostCard from "@/components/Post-Card";

export default function SavedPosts() {
    return(
        <Layout>
            <h1 className="text-4xl mb-4 text-gray-400 ">Your saved posts</h1>
            <PostCard />
            <PostCard />
        </Layout>
    );
}