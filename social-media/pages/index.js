import Card from "@/components/Card";
import NavigationCard from "@/components/Navigation-Card";
import PostFormCard from "@/components/Post-Form-Card";


export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3">
        <NavigationCard />
      </div>
      <div className="grow">
        <PostFormCard />
        <Card>First Post Test</Card>
      </div>
    </div>
  );
}