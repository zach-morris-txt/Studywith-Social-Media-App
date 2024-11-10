import Card from "@/components/Card";
import NavigationCard from "@/components/Navigation-Card";


export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3">
        <NavigationCard />
      </div>
      <div className="grow">
        <Card>Form Here</Card>
        <Card>First Post Test</Card>
      </div>
    </div>
  );
}