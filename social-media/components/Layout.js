import NavigationCard from "@/components/Navigation-Card";
import PostCard from "@/components/Post-Card";
import PostFormCard from "@/components/Post-Form-Card";

export default function Layout({children}) {
    return(
        <div className="flex mt-4 max-w-4xl mx-auto gap-6">
            <div className="w-1/4">
                <NavigationCard />
            </div>
            <div className="w-3/4">
                {children}
            </div>
        </div>
    )
}