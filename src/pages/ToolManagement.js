import ToolsAvailable from "../data/ToolsAvailable";

const ToolManagement = () => {
    return (
        <div className="ToolsContent">
            <div className="grid3slots">
                {ToolsAvailable()
                    .map((device) => {
                            return (
                                <div className="container">
                                    <img src={device.imagem} alt={device.nome}/>
                                    <p><span>{device.nome}</span></p>
                                    <p style={{color: '#04BF00'}}>Quantidade: {device.quantidade} </p>
                                    <p style={{color: 'lightgrey'}}>Indisponível:  {device.indisponivel}</p>
                                </div>
                            );
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ToolManagement;