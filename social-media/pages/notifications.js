import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Notifications() {
    return(
        <Layout>
            <h1 className="text-4xl mb-4 text-gray-400 ">Notifications</h1>
            <Card>
                <div className="">
                    <div className="flex gap-2 p-4 border-b border-b-gray-300 items-center">
                        <Link href="/profile" className="font-semibold">
                            <Avatar />
                        </Link>
                        <div className="">
                            John Doe liked <Link href={"/profile/posts"} className={"text-blue-500 hover:underline"}>your photo</Link>
                        </div>
                    </div>
                    <div className="flex gap-2 p-4 border-b border-b-gray-300 items-center">
                        <Link href="/profile" className="font-semibold">
                            <Avatar />
                        </Link>
                        <div className="">
                            John Doe liked <Link href={"/profile/posts"} className={"text-blue-500 hover:underline"}>your photo</Link>
                        </div>
                    </div>
                    <div className="flex gap-2 p-4 border-b border-b-gray-300 items-center">
                        <Link href="/profile" className="font-semibold">
                            <Avatar />
                        </Link>
                        <div className="">
                            John Doe liked <Link href={"/profile/posts"} className={"text-blue-500 hover:underline"}>your photo</Link>
                        </div>
                    </div>
                </div>
            </Card>

        </Layout>
    );
}