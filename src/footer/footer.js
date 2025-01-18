import React from "react";

class Footer extends React.Component  
{
    render()
    {
        return (
            <footer style={{backgroundColor:"#323232",color:"blue", padding: "25px"}} >
                <p>Copyrigth &#169; - {this.props.year}</p>
            </footer>
        )
    }
}
export default Footer;