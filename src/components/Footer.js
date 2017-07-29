import React, {Component} from 'react';
import FooterLink from './FooterLink';

//styles
import './footer.scss';

class Footer extends Component {
  render() {
    return (
			<footer>
	      <div className="footer-container">
					<span className="footer-logo mg-h2 mg-light">MG</span>
					<ul className="footer-link-container">
						<FooterLink
							url="https://twitter.com/matthewgallo27"
							name="Twitter"
						/>
						<FooterLink
							url="https://www.linkedin.com/in/matthew-gallo-1090748a/"
							name="LinkedIn"
						/>
						<FooterLink
							url="https://github.com/matthewgallo/"
							name="Github"
						/>
					</ul>
	      </div>
			</footer>
    )
  }
}

export default Footer;
