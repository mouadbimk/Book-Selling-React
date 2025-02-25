import { ArrowRightFromLineIcon, Home } from "lucide-react";
import { Link } from "react-router";
import Card from "../components/Items/Card";
import SellCall from "../components/partials/SellCall";
import '@/styles/scss/style.css'
const Categories = ()=>{
    return<>
   
     <div className="books">
        <div className="books__head">
            <div className="books__title">
            <h1>Audio Books</h1>
            </div>
            <div className="books__links">
                <Link to={'/home'}><Home/> Home</Link>
                <span><ArrowRightFromLineIcon/> Books</span>
            </div>

        </div>
        <div className="books__content">
            <div className="categories__title">
                <h2>Audio Books</h2>
               
                <select className="border rounded-lg px-4 py-2 shadow-md mt-10">
                    <option value="audio-book">Audio Books</option>
                    <option value="audio-book">Fantasy</option>
                    <option value="audio-book">English</option>
                    <option value="audio-book">Comedy</option>
                </select>
              
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
export default Categories;