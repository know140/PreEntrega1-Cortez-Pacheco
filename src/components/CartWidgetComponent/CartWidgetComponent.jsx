import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {

const iconoStyle={
    color:'red',
    fontSize: '1.5rem',
}


    return(
        <div>
              <FontAwesomeIcon style={iconoStyle} icon={faCartShopping} />
              <span style={{ fontSize: '1.5rem'}}>1</span>
        </div>
    )
}
export default CartWidgetComponent;