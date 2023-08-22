import React from "react";
import { BsCart4, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import FanatecLogo from "../assets/img/fanatec-logo_white25.svg";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='header__topbar'>
					<nav className='topbar__nav'>
						<ul className='topbar__navList'>
							<li className='topbar__navList--item'>
								<a href='/blog'>Blog</a>
							</li>
							<li className='topbar__navList--item'>
								<a href='/forum'>Forum</a>
							</li>
							<li className='topbar__navList--item'>
								<a href='/contact'>Contact</a>
							</li>
							<li className='topbar__navList--item'>
								<a href='/support/faq'>Support / FAQ</a>
							</li>
							<li className='topbar__navList--item'>
								<a href='/jobs'>Jobs</a>
							</li>
							<li className='topbar__navList--item'>
								<a href='/media'>Media / Downloads</a>
							</li>
							<li className='topbar__navList--item'>
								<a href='/driver'>Driver</a>
							</li>
						</ul>
						<ul className='topbar__navEntry'>
							<li className='topbar__navEntry--item'>
								<a href='/wishlists'>
									<BsHeart />
									Wishlists
								</a>
							</li>
							<li className='topbar__navEntry--item'>
								<a href='/account'>
									<BsPerson />
									My Account
								</a>
							</li>
							<li className='topbar__navEntry--item'>
								<a href='/cart'>
									<BsCart4 />
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className='header__nav'>
					<div className='header__nav--logo'>
						<LinkContainer to={"/"}>
							<img
								src={FanatecLogo}
								alt='fanatec logo in white with 25 in gold to represent anniversary'
							/>
						</LinkContainer>
					</div>
					<div className='header__nav--navigation'>
						<nav className='main__nav'>
							<ul className='main__navList'>
								<li className='main__navList--item'>
									<a href='/bundles'>Bundles</a>
								</li>
								<li className='main__navList--item'>
									<a href='/bundles'>Ready2Race</a>
								</li>
								<li className='main__navList--item'>
									<a href='/bundles'>
										Racing Wheels / Direct Drive Bases
									</a>
								</li>
								<li className='main__navList--item'>
									<a href='/bundles'>Steering Wheels</a>
								</li>
								<li className='main__navList--item'>
									<a href='/bundles'>Pedals</a>
								</li>
								<li className='main__navList--item'>
									<a href='/bundles'>Shifters / Others</a>
								</li>
								<li className='main__navList--item'>
									<a href='/bundles'>Cockpits / Mounting</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='header__nav--search'>
						<input type='text' placeholder='Search...' />
						<BsSearch />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
