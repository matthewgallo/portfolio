import React, {Component} from 'react';
import mgLogo from '../assets/images/mg--logo-2.svg'

//styles
import './header.scss';

class Header extends Component {

// 	scroll.scrollTo('myScrollToElement', {
//   duration: 1500,
//   delay: 100,
//   smooth: true,
//   containerId: 'ContainerElementID'
// })

  render() {
    return (
			<header className="header-container">
				<div className="header-container-inner">
					<div className="header-content">
						<div className="header-logo-container">
							<img className="header-logo" src={mgLogo} alt="Matt Gallo logo" />
						</div>
						<div className="header-name-container">
							<h1 className="mg--black">Matt Gallo</h1>
							<p className="mg--light-italic">Front end developer and designer</p>
						</div>
					</div>
				</div>
				<a
					href="work"
					className="scroll-down-icon"
					>
					<span></span>
				</a>
			</header>
    )
  }
}

export default Header;
