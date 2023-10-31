import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {

const iconoStyle={
    color:'red',
    fontSize: '1.5rem',
    paddingRight: '10px',
}
const numeroStyle={
    fontSize: '1.5rem',
  
}


    return(
        <div>
              <FontAwesomeIcon style={iconoStyle} icon={faCartShopping} />
              <span style={numeroStyle} >0</span>
        </div>
    )
}
export default CartWidgetComponent;