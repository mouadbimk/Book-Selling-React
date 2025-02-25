import { ArrowRightFromLineIcon, Home, Search } from "lucide-react";
import { Link } from "react-router";
import Card from "../components/Items/Card";
import SellCall from "../components/partials/SellCall";
import '@/styles/scss/style.css'
const Books = ()=>{
    return<>
   
     <div className="books">
        <div className="books__head">
            <div className="books__title">
            <h1>Books</h1>
            </div>
            <div className="books__links">
                <Link to={'/home'}><Home/> Home</Link>
                <span><ArrowRightFromLineIcon/> Books</span>
            </div>

        </div>
        <div className="books__content">
            <div className="books__title">
                <h2>All Books</h2>
                <section className="box-search z-form flex items-center gap-2 border rounded-lg px-4 py-2 shadow-md mt-10 mx-auto w-full lg:w-[1170px]">
                <Search size={20} className="text-gray-500" />
                    <input
                    type="search"
                    placeholder="what book do you want?"
                    className="w-full outline-none bg-transparent p-1"
                    aria-label="Search"/>
                <button type="submit" className="bg-blue-400 text-white px-3 py-4 rounded hover:bg-blue-700 transition-all">
                    Search
                </button>
</section>
            </div>
            <div className="books__list">
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
                <Card title={'test'} category={'book'} image={''} />
            </div>
            <div className="books__pagination">
                <span>prev</span>
                <span>Next</span>
            </div>
        </div>
    </div>
    <SellCall/>
    </>
}
export default Books;