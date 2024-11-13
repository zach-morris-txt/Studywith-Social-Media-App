import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Friend from "@/components/Friend";
import Layout from "@/components/Layout";
import PostCard from "@/components/Post-Card";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfilePage() {
    const router = useRouter();
    const {asPath:pathname} = router;
    const isPosts = pathname.includes('posts') || pathname === '/profile';
    const isAbout = pathname.includes('about');
    const isFriends = pathname.includes('friends');
    const isPhotos = pathname.includes('photos');
    const activeTabClasses = "flex gap-1 items-center px-5 py-1 border-b-blue-500 border-b-4 text-blue-500 font-bold";
    const tabClasses = "flex gap-1 items-center px-3 py-1 border-b-4 border-b-white";


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
                    <div className="p-2 pb-0">
                        <div className="p-4 pb-4 ml-7">
                            <h1 className="text-2xl font-bold">John Doe</h1>
                            <div className="text-gray-500 leading-4">Tampa, Florida</div>
                        </div>
                        <div className="mt-10 flex">
                            <Link href={"/profile/posts"} className={isPosts ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Posts
                            </Link>
                            <Link href={"/profile/about"} className={isAbout ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                                About
                            </Link>
                            <Link href={"/profile/friends"} className={isFriends ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                Friends
                            </Link>
                            <Link href={"/profile/photos"} className={isPhotos ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                Photos
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
            {isPosts && (
                <div>
                    <PostCard />
                </div>
            )}
            {isAbout && (
                <div>
                    <Card>
                        <h2 className="text-3xl mb-2">About Me</h2>
                        <p className="mb-2 text-sm">Lorem impsum hbkhbalk skjbwkjnkjbn whkbwanwinlec jbkeajbec ab ejhbcaehba ehjbeahb</p>
                        <p className="mb-2 text-sm">Lorem impsum hbkhbalk skjbwkjnkjbn whkbwanwinlec jbkeajbec ab ejhbcaehba ehjbeahb</p>
                    </Card>
                </div>
            )}
            {isFriends && (
                <div>
                    <Card>
                        <h2 className="text-3xl mb-2">Friends</h2>
                        <div className="grid gap-4 grid-cols-3">
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                        </div>
                    </Card>
                </div>
            )}
            {isPhotos && (
                <div>
                    <Card>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://st.depositphotos.com/1591133/2422/i/450/depositphotos_24225049-stock-photo-canal-grande-and-basilica-di.jpg" alt="" />
                            </div>
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D" alt="" />
                            </div>
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://t4.ftcdn.net/jpg/00/37/04/55/360_F_37045590_7oWDGuxwblGlVzr9ffuxN8OgIxmqLPCJ.jpg" alt="" />
                            </div>
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://images.pexels.com/photos/28277496/pexels-photo-28277496/free-photo-of-the-town-of-cinque-terre-at-night.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </div>
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://st.depositphotos.com/1591133/2422/i/450/depositphotos_24225049-stock-photo-canal-grande-and-basilica-di.jpg" alt="" />
                            </div>
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D" alt="" />
                            </div>
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://t4.ftcdn.net/jpg/00/37/04/55/360_F_37045590_7oWDGuxwblGlVzr9ffuxN8OgIxmqLPCJ.jpg" alt="" />
                            </div>
                            <div className="h-36 flex items-center rounded-md overflow-hidden">
                                <img className="" src="https://images.pexels.com/photos/28277496/pexels-photo-28277496/free-photo-of-the-town-of-cinque-terre-at-night.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </Layout>
    )
}