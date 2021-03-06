import React from "react";
import PropTypes from "prop-types";

import DevicesConnected from "../../data/DevicesConnected";

export default function FixedPlugin(props) {

    const [selectedImage, setSelectedImage] = React.useState(props.activeImage);
    const handleClick = () => {
        props.handleDisplayClick();
    };

    return (
        <div className="fixed-plugin">
            <div id="fixedPluginClasses" className={props.visibility}>
                {/*Responsável por alinhar e mostrar o botão*/}
                <div onClick={handleClick}>
                    <i className="fa fa-plug fa-2x"/>
                </div>
                <ul className="dropdown-menu">
                    <li className="header-title">Devices connected</li>
                    {DevicesConnected().map((device) => {
                        return (
                            <li className={selectedImage === device.imagem ? "active" : ""}>
                                <a
                                    className="img-holder switch-trigger"
                                    onClick={() => {
                                        setSelectedImage(device.imagem);
                                        props.handleImageClick(device.imagem);
                                    }}
                                >
                                    <img src={device.imagem} alt="..."/>
                                </a>
                            </li>
                        );
                    })
                    }
                    <button className="button button1"><i className="fa fa-plus-square"/> Add Device</button>
                    <li className="adjustments-line"/>
                </ul>
            </div>
        </div>
    );
}

FixedPlugin.propTypes = {
    data: PropTypes.func,
    activeImage: PropTypes.string,
    handleImageClick: PropTypes.func,
    visibility: PropTypes.string,
    handleDisplayClick: PropTypes.func,
};