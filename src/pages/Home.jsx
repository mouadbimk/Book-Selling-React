import { Search } from "lucide-react";
import Boxes from "../components/partials/Boxes";
import Carousel from "../Layouts/Carousel";
import '@/styles/scss/style.css';
import Items from "../components/Items/items";
import NewCard from "../components/Items/NewCard";

export default function Home() {
    return (
        <>
            <Carousel />
            <Boxes />
            {/* search box */}
            <div className="mx-auto container">
                {/* Search Box Section */}
                <section className="box-search z-form flex items-center gap-2 border rounded-lg px-4 py-2 shadow-md mt-10 mx-auto w-full lg:w-[1170px]">
                <Search size={20} className="text-gray-500" />
                    <input
                    type="search"
                    placeholder="What do you want?"
                    className="w-full outline-none bg-transparent p-1"
                    aria-label="Search"/>
                <button type="submit" className="bg-blue-400 text-white px-3 py-4 rounded hover:bg-blue-700 transition-all">
                    Search
                </button>
</section>
                    {/* Popular Books */}
            <section className="popular">
                <h1>Popular Books</h1>
                <Items/>
            </section>
        {/* Latest Book */}
        <section className="latest-book">
            <h1>New Books</h1>
            <div className="flex flex-wrap justify-center">
                <NewCard/>
                <NewCard/>
                <NewCard/>
                <NewCard/>
            </div>
        </section>
            </div>
        </>
    );
}
