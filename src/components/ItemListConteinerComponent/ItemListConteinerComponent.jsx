

const ItemListConteinerComponent = ({greeting}) => {

const greetingStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    color:'white',
    paddingTop:'20%',

};



return(
    <div style={greetingStyle}>
{greeting}
    </div>
)

}

export default ItemListConteinerComponent;