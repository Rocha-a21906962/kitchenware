import ToolsAvailable from "../data/ToolsAvailable";
import styled from "styled-components";

const ToolManagement = () => {
    return (
        <div className="content tools">
            <div className="ToolsContent">
                <div className="grid3slots">
                    {ToolsAvailable()
                        .map((device) => {
                                const res = parseInt(device.quantidade) >= (((parseInt(device.quantidade) + parseInt(device.indisponivel))/2))
                                return (
                                    // <div className="container">
                                    //     <img src={device.imagem} alt={device.nome}/>
                                    //     <Paragraph><span>{device.nome}</span></Paragraph>
                                    //     <Paragraph style={{color: '#04BF00'}}>Qty: {device.quantidade} </Paragraph>
                                    //     <Paragraph style={{color: 'lightgrey'}}>{device.indisponivel}</Paragraph>
                                    // </div>
                                    <div className="card-container">
                                        <span className="LowAlert" style={{ display: res ? "none" : ""}}>LOW</span>
                                        <img src={device.imagem} alt="device x"/>
                                        <h3>{device.nome}</h3>
                                        <p>{device.quantidade} / {(parseInt(device.quantidade) + parseInt(device.indisponivel))}</p>
                                        <div className="buttons">
                                            <button className="primary">
                                                Request
                                            </button>
                                            <button className="primary ghost">
                                                Wash ({device.indisponivel})
                                            </button>
                                        </div>
                                        <br/>
                                    </div>
                                );
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ToolManagement;