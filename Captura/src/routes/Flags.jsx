
const Flags = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src="logo.png" alt="logo" />
            </div>
            <div className="container">
                <div>
                    <h1> Choose your country: </h1>
                    <ul className="flags">
                        <li>
                            <img src="ALEMANHA.jpg" alt="germany-flag" />
                        </li>
                        <li>
                            <img src="EUA.jpg" alt="eua-flag" />
                        </li>
                        <li>
                            <img src="AUSTRIA.jpg" alt="austria-flag" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Flags