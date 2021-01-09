
import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="ffoter-icons">
                <a href="https://www.youtube.com/channel/UCUdYQfCdXBQqso5sHreTBGA" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/renivaldo-rodrigues-a26069b8/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/renivaldo.rs/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}
export default Footer;