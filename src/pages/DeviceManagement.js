import {useState} from "react";
import PropTypes from "prop-types";
import FixedPlugin from "../components/buttons/PlugInMenuDM";
import DevicesConnected from "../data/DevicesConnected";


const DeviceManagement = (props) => {

    const [toggle, setToggle] = useState(false)
    const [deviceName, setDevice] = useState(props.name);
    const [image, setImage] = useState(props.activeImage);
    const handleImageClick = (image) => {
        setImage(image);
        setDevice(DevicesConnected().filter(device => device.imagem === image).map(device => {
            return device.nome
        }))
    };
    const [visibility, setVisibility] = useState("show");
    const handleDisplayClick = () => {
        if (visibility === "hide") {
            setVisibility("show");
        } else {
            setVisibility("hide");
        }
    };

    return (
        <div className="content">
            <div className="DeviceContent">
                <div className="SelectedDevice">
                    <p className="SelectedDeviceName">{deviceName}</p>
                    <img className="DevicePhoto" src={image} alt="device selected"/>
                    <br/>
                    <div className="OnButton" onClick={() => {
                        setToggle(!toggle);
                    }}>
                        <i className="fa fa-power-off fa-3x" style={{color: toggle ? '#00f262' : '#fff'}}/>
                    </div>
                </div>
                <FixedPlugin data={DevicesConnected}
                             activeImage={image}
                             handleImageClick={handleImageClick}
                             visibility={visibility}
                             handleDisplayClick={handleDisplayClick}
                />
            </div>
        </div>
    )
}

export default DeviceManagement;

DeviceManagement.propTypes = {
    name: PropTypes.string,
    activeImage: PropTypes.string,
};