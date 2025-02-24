import '@/styles/css/card.css';
import { Link } from 'react-router';
const NewCard = ({title,category,price,image})=>{
    return <>
    <Link to={'/book/1'} className="card">
                        <div className="card__image">
                            <img src={image} alt="book image" />
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
                                <h3>{title}</h3>
                            </div>
                            <div className="card__category">
                               <span>{category}</span> 
                            </div>
                            <div className="card__price">
                                <span><b>{price}$</b>(USD)</span>
                            </div>
                        </div>
                    </Link>
    </>
}
export default NewCard;