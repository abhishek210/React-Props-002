import Card1 from "./card/card1"
import Card2 from "./card/Card2";
import './card.css'
function Card(props){
    console.log(props.name)
    return (
        <div className="card">
         <Card1 data={props.name} data1 = {props.year} data2={props.name1} data3={props.type} img1={props.img}/>
         <Card2 pic={props.pic1}/>
        </div>
    )
}
export default Card;