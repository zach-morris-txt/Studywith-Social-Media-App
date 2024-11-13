import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function ProfilePage() {
    return(
        <Layout>
            <Card noPadding={true}>
                <div className="relative">
                    <div className="h-48 overflow-hidden flex justify-center items-center">
                        <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mountains" />
                    </div>
                    <div className="absolute top-4 left-4">
                        <Avatar size={"large"} />
                    </div>
                    <div className="p-4 pb-4 ml-7">
                        <h1 className="text-2xl font-bold">John Doe</h1>
                        <div className="text-gray-500 leading-4">Tampa, Florida</div>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}