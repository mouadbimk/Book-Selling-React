import { ArrowRightFromLine, Search } from "lucide-react";
import Boxes from "../components/partials/Boxes";
import Carousel from "../Layouts/Carousel";
import '@/styles/scss/style.css';
import Items from "../components/Items/items";
import NewCard from "../components/Items/NewCard";
import BannerNewsLetter from "../components/Banners/BannerNewsLetter";
import {Button} from '@/components/ui/button.tsx'
import BannerPartenaire from "../components/Banners/BannerPartenaire";
import SellCall from '@/Layouts/SellCall';
import TopBookWeek from "../components/partials/TopBookWeek";
import { Link } from "react-router";
export default function Home() {
    const slidesHome = [
        {
        imageSrc:'http://bookoe.millionscourse.com/images/677d3d17a781d22.png',
        altText:'The Whispering Forest',
        title:'The Whispering Forest',
        description:'A magical tale of a young girl who stumbles into a forest where the trees whisper ancient secrets. With the help of a talking fox, she must unravel the mystery of the fading woods A gripping historical fiction about two families intertwined by love and betrayal during World War II, and the hidden diaries that reveal their untold stories.'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d3ddab08e20.png',
            altText:'The Whispering Forest',
            title:'The Whispering Forest',
            description:'A magical tale of a young girl who stumbles into a forest where the trees whisper ancient secrets. With the help of a talking fox, she must unravel the mystery of the fading woods A gripping historical fiction about two families intertwined by love and betrayal during World War II, and the hidden diaries that reveal their untold stories.'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d3e6e610971.png',
            altText:'The Whispering Forest',
            title:'The Whispering Forest',
            description:'A magical tale of a young girl who stumbles into a forest where the trees whisper ancient secrets. With the help of a talking fox, she must unravel the mystery of the fading woods A gripping historical fiction about two families intertwined by love and betrayal during World War II, and the hidden diaries that reveal their untold stories.'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d4006b460e3.png',
            altText:'The Whispering Forest',
            title:'The Whispering Forest',
            description:'A magical tale of a young girl who stumbles into a forest where the trees whisper ancient secrets. With the help of a talking fox, she must unravel the mystery of the fading woods A gripping historical fiction about two families intertwined by love and betrayal during World War II, and the hidden diaries that reveal their untold stories.'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d40cea92af4.png',
            altText:'The Whispering Forest',
            title:'The Whispering Forest',
            description:'A magical tale of a young girl who stumbles into a forest where the trees whisper ancient secrets. With the help of a talking fox, she must unravel the mystery of the fading woods A gripping historical fiction about two families intertwined by love and betrayal during World War II, and the hidden diaries that reveal their untold stories.'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d415f2c5835.png',
            altText:'The Whispering Forest',
            title:'The Whispering Forest',
            description:'A magical tale of a young girl who stumbles into a forest where the trees whisper ancient secrets. With the help of a talking fox, she must unravel the mystery of the fading woods A gripping historical fiction about two families intertwined by love and betrayal during World War II, and the hidden diaries that reveal their untold stories.'
        },
    ];
   
    return (
        <>
        <Carousel slides={slidesHome} items={6}/>
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
                <NewCard image={'http://bookoe.millionscourse.com/images/677d3d17a781d22.png'} title={'The Whispering Forest'} category={'Audio Books'} price={'15'}/>
                <NewCard image={'http://bookoe.millionscourse.com/images/677d3ddab08e20.png'} title={'Echoes of the Past'} category={'Arts Photography'} price={'20'}/>
                <NewCard image={'http://bookoe.millionscourse.com/images/677d3e6e610971.png'} title={'Chasing Starlight'} category={'Audio Books'} price={'10'}/>
                <NewCard image={'http://bookoe.millionscourse.com/images/677d3f07d79b62.png'} title={'Fragments Tomorrow'} category={'Audio Books'} price={'30'}/>
                <NewCard image={'http://bookoe.millionscourse.com/images/677d4006b460e3.png'} title={'Letters to the Moon'} category={'Audio Books'} price={'30'}/>
            </div>
                <Button className={'m-10 justify-self-center bg-blue-700 mx-auto block flex'}>Read More <ArrowRightFromLine/></Button>
        </section>
            </div>
               {/* Sell Books */}
        <SellCall />
          {/* top Book in week */}
            <TopBookWeek/>
            {/* NewsLetter */}
        <BannerNewsLetter />
        {/* Our Partner */}
        <div className="slide-content">
            <h1>Our Partner</h1>
        <BannerPartenaire className='slide-company' />
        </div>
            </>
    );
}
