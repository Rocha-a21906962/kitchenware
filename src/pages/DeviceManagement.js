import {useState} from "react";
import PropTypes from "prop-types";


const DeviceManagement = (props) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className="DeviceContent">
            <div className="SelectedDevice">
                <p className="SelectedDeviceName">Dispositivo X</p>
                <img className="DevicePhoto" src={props.activeImage} alt="dispositivo selecionado"/>
                <br/>
                <div className="OnButton" onClick={() => {setToggle(!toggle);}}>
                    <i className="fa fa-power-off fa-3x" style={{ color: toggle ? '#00f262': '#fff'}}/>
                </div>
            </div>
        </div>
    )
}

export default DeviceManagement;

DeviceManagement.propTypes = {
    activeImage: PropTypes.string,
};