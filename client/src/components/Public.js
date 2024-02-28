import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Allrounder Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown of Jayanagar, Allrounder Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                   Allrounder Repairs<br />
                    Jayanagar<br />
                    Bangalore, 560025<br />
                    <a href="tel:+919874565874">(+91) 9874565874</a>
                </address>
                <br />
                <p>Owner: Nawaz Pasha</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public