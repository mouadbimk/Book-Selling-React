import '@/styles/css/card.css';
const NewCard = ()=>{
    return <>
    <div className="card">
                        <div className="card__image">
                            <img src="http://bookoe.millionscourse.com/images/677d3d17a781d22.png" alt="book image" />
                        </div>
                        <div className="card__content">
                            <div className="card__rate">
                                <div>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                            </div>
                            <div className="card__title">
                                <h3>The Whispering Forest</h3>
                            </div>
                            <div className="card__category">
                               <span>Audio Books</span> 
                            </div>
                            <div className="card__price">
                                <span><b>10$</b>(USD)</span>
                            </div>
                        </div>
                    </div>
    </>
}
export default NewCard;