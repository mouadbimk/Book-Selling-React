import { Book } from 'lucide-react'
const SellCall = ()=>{
    return <>
          <div className="sellCall">
            <div className="sellCall__content">
            <h1 className="sellCall__title">Want to sell your books?</h1>
        <p className="sellCall__para">At Book4u  our goal is to make it as easy as possible to sell your books to other readers. Just download the app, follow a few simple steps, and in just a few minutes, your books will be in front of our amazing community of book lovers.You can also sell books as a store or as a merchant, and the user can add books.</p>
        <a href="#" className="sellCall__btn"><Book/> Sell Book</a>
            </div>
        </div>
        </>
}
export default SellCall;