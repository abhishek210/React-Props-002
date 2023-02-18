import { FaShareAlt,FaHeart,FaCommentAlt } from "react-icons/fa";
import './card1.css'
function Card1(props) {
    console.log(props)
    return (
        <div className="maindiv">
           
           <div className="div2">
                <img src={props.img1} alt="img"/>
                <div>
                <h1><span>{props.data}</span></h1>
                <p><span>{props.data1}</span>{props.data2}</p>
                <p><span>{props.data1}</span>{props.data3}</p>
                </div>
            </div>
            <div className="div3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti minus in, laudantium dignissimos
                modi cumque. Laudantium, temporibus eaque? Aut fugit tempore reiciendis sunt totam a rerum modi veniam
                suscipit voluptatum dicta id
                cupiditate accusantium ea harum soluta, mollitia vitae.</p>
             <div className="icons">
             <FaShareAlt />
            <FaHeart />
            <FaCommentAlt />
             </div>
            </div>
           
           
        </div>
    )
}
export default Card1;