const Card = ()=>{
    return <>
    <div className="item">
                        <div className="item__image">
                            <img src="http://bookoe.millionscourse.com/images/677d3d17a781d22.png" alt="book image" />
                        </div>
                        <div className="item__content">
                            <div className="item__rate">
                                <div>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                            </div>
                            <div className="item__title">
                                <h3>The Whispering Forest</h3>
                            </div>
                            <div className="item__category">
                               <span>Audio Books</span> 
                            </div>
                            <div className="item__price">
                                <span><b>10$</b>(USD)</span>
                            </div>
                        </div>
                    </div>
    </>
}
export default Card;