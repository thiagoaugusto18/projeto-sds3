import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por Thiago Costa</p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior </small></p>
                <p className="text-light">Entre em contato pelos canais abaixo:</p>


                <ul className="social-media">
                    <li className="social-item"></li>
                    <li className="social-item">
                        <a href="http://api.whatsapp.com/send?phone=5512991584881" target="_blank" rel="noreferrer"><BsWhatsapp color="#FFF" /></a>
                    </li>
                    <li className="social-item">
                        <a href="https://github.com/thiagoaugusto18" target="_blank" rel="noreferrer"><BsGithub color="#FFF" /></a>
                    </li>
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/thiago-fcosta/" target="_blank" rel="noreferrer"><BsLinkedin color="#FFF" /></a>
                    </li>
                    <li className="social-item"></li>

                </ul>




            </div>
        </footer>
    );
}

export default Footer;