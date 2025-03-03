import { ArrowBigDown, ArrowBigUp, ArrowRightCircleIcon, Home } from "lucide-react";
import { Link } from "react-router";
import Carousel from "../components/partials/Carousel";
const BookDetails = () =>{
    const sideBarCarousel  = [
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
    ]
    return <div className="bookPage">
        <div className="bookPage__head">
            <h1>The Whispering Forest</h1>
            <div className="bookPage__links">
            <Link to={'#'}><Home/> Home</Link><span><ArrowRightCircleIcon/> The Whispering Forest</span>
            </div>
        </div>
        <div className="bookPage__content">
            <div className="bookPage__info">
                <div className="bookPage__image_list">
                    <div className="bookPage__poster">
                    <img src="http://bookoe.millionscourse.com/images/677d3d17a781d22.png" alt="" />
                    </div>
                    <div className="bookPage__detail">
                    <div className="bookPage__title">
                        <h1>The Whispering Forest</h1>
                    </div>
                    <div className="bookPage__listDetails">
                        <ul>
                            <li>
                                <p className="value">William Shakespeare</p>
                                <p className="name">Authors</p>
                            </li>
                            <li>
                            <p className="value">Audio Books</p>
                            <p className="name">Category</p>
                            </li>
                            <li>
                            <p className="value">20$</p>
                            <p className="name">Price</p>
                            </li>
                            <li>
                            <p className="value">Apr 2018</p>
                            <p className="name">Publisher</p>
                            </li>
                            <li>
                            <p className="value">English</p>
                            <p className="name">Language</p>
                            </li>
                            <li>
                            <p className="value">3 months ago</p>
                            <p className="name">ISBN</p>
                            </li>
                            <li>
                            <p className="value">5G</p>
                            <p className="name">Weight</p>
                            </li>
                            <li>
                            <p className="value">Number Page</p>
                            <p className="name">100</p>
                            </li>
                            <li className="btn">
                               <Link to={'#'} className="bookPage__btn_show">Amazon</Link> 
                               <Link to={'#'} className="bookPage__btn_show">Ebay</Link> 
                               <Link to={'#'} className="bookPage__btn_show">Thrift books</Link> 
                               <Link to={'#'} className="bookPage__btn_show">Book Outlet</Link> 
                            </li> 
                        </ul>
                       
                    </div>
                    </div>
               
                </div>
                <div className="bookPage__description">
                            <b>Description</b><p>A magical tale of a young girl who stumbles into a forest where the trees whisper ancient secrets. With the help of a talking fox, she must unravel the mystery of the fading woods A gripping historical fiction about two families intertwined by love and betrayal during World War II, and the hidden diaries that reveal their untold stories.</p>
                        </div>
                        <div className="bookPage__comments">
                            <div className="bookPage__addComment">
                                <h2>Leave a Reply</h2>
                                <textarea name="newComment" id="newComment" placeholder="Write a Comment Theme." rows={8} cols={45}></textarea>
                                <button type="submit">Comment</button>
                            </div>
                            <hr />
                            <div className="bookPage__allComment">
                            <h2>Comments</h2>

                                <div className="bookPage__comment_item">

                                    <div className="info__user">
                                        <div className="user__details">
                                        <img src="http://placehold.co/200x200" alt="avatar user" />
                                        <p>Mouad Bimekliouen</p>                                        
                                        </div>
                                        <div className="time_publish">
                                        <p>2 month ago</p>
                                        </div>
                                    </div>
                                    <div className="comment_content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio necessitatibus asperiores nemo veritatis ab culpa iusto quas neque, libero facere nihil explicabo. Aspernatur eligendi unde veniam. Tempore, vitae? Porro, expedita! Deserunt, ratione! Facere quis aliquid labore vel sapiente nam, eius ut itaque magnam modi, sed ratione deserunt aperiam minima pariatur? Eos numquam veniam iusto optio ad voluptate, adipisci magni eius perferendis reiciendis distinctio quidem amet pariatur possimus facilis, assumenda corporis! Blanditiis, consectetur? Itaque aperiam perspiciatis eos nam quae placeat officia animi possimus voluptatem, veniam laboriosam unde tempora sint nemo fugiat, similique eaque cumque corrupti. Ipsa eligendi reprehenderit sequi praesentium fugit!</p>
                                    <div className="comment_btn">
                                        <button><ArrowBigUp size={'40px'}/></button>
                                        <button><ArrowBigDown size={'40px'}/></button>  
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className="bookPage__comment_item">

                                    <div className="info__user">
    <div className="user__details">
    <img src="http://placehold.co/200x200" alt="avatar user" />
    <p>Mouad Bimekliouen</p>                                        
    </div>
    <div className="time_publish">
    <p>2 month ago</p>
    </div>
                                    </div>
<div className="comment_content">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio necessitatibus asperiores nemo veritatis ab culpa iusto quas neque, libero facere nihil explicabo. Aspernatur eligendi unde veniam. Tempore, vitae? Porro, expedita! Deserunt, ratione! Facere quis aliquid labore vel sapiente nam, eius ut itaque magnam modi, sed ratione deserunt aperiam minima pariatur? Eos numquam veniam iusto optio ad voluptate, adipisci magni eius perferendis reiciendis distinctio quidem amet pariatur possimus facilis, assumenda corporis! Blanditiis, consectetur? Itaque aperiam perspiciatis eos nam quae placeat officia animi possimus voluptatem, veniam laboriosam unde tempora sint nemo fugiat, similique eaque cumque corrupti. Ipsa eligendi reprehenderit sequi praesentium fugit!</p>
<div className="comment_btn">
    <button><ArrowBigUp size={'40px'}/></button>
    <button><ArrowBigDown size={'40px'}/></button>  
</div>
</div>

</div>
                            </div>
                        </div>
            </div>
            <div className="bookPage__sidebar">
                    <div className="bookPage__slider">
                        <Carousel slides={sideBarCarousel} items={1} Pagination={false} Autoplay={true}/>
                    </div>
            </div>
        </div>
    </div>
}
export default BookDetails;