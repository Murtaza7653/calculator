import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (

        <div>

            <footer className="text-light py-2" style={{ position: "absolute", bottom: "0", width: "100%", backgroundColor: "#000814" }}>

                <div className="footer-copyright text-center">© 2022 Copyright :
                    <Link to={"https://www.linkedin.com/in/murtaza-burhani-ab38a935/"} style={{ color: "#ffc300" }} className='mx-1'>Murtaza Burhani</Link>
                </div>

            </footer>
        </div>

    )

}