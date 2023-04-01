import "./Footer.css";

import vk from "./../../images/icons/vk.svg";
import instagram from "./../../images/icons/instagram.svg";
import gitHub from "./../../images/icons/gitHub.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="#!">
								<img src={vk} alt="vk" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={instagram} alt="instagram" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={gitHub} alt="gitHub" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023 shinlyan.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
