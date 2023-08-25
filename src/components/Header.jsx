import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className="header-header">

            <div>
                <h1>Website easy-exam</h1>
            </div>

            <div className='navButtons'>
                <Link to={"/easy-exam-client/"}>
                    <button className="yellow-button">Generar exámenes</button>
                </Link>
                <Link to={"/easy-exam-client/data"}>
                    <button className="yellow-button">Generar gráficos</button>
                </Link>
            </div>

        </div>
    )
}