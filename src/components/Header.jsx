import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className="header-header">

            <div className='header-title'>
                <h1>Website easy-exam</h1>
                <div className='header-img'>
                    <a href="https://gma.litmos.com/admin/dashboard">
                        <img src="../easy-exam/assets/images/Campus-gma-icon.png" alt="GMA Campus icon" />
                    </a>
                </div>
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