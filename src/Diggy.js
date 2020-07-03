import React, {useEffect} from 'react';
let mapStyles = {
    width: "50%",
    height: "100vh"
  }

class Map extends React.Component {

    render(){
        debugger
        return (   
            <div style={mapStyles} ref={this.props.innerRef} className="map"></div>
        )
    }

}

export default React.forwardRef((props,ref)=> <Map innerRef={ref} {...props} />);
