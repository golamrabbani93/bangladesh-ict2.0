/* eslint-disable react/no-unescaped-entities */
import './Header.css';
import logo from '../../assets/images/logo.png';
import {useState} from 'react';
const Header = () => {
	const [openHam, setOpenHam] = useState(false);
	console.log('🚀🚀: Header -> openHam', openHam);
	return (
		<div className="container relative mx-auto">
			<div className="absolute top-10  z-10 ">
				<div className="container mx-auto">
					<div className=" flex ">
						<div className="flex items-center ml-10">
							<div>
								<img src={logo} alt="" />
							</div>
							<div className="ml-3">
								<h2 className="text-4xl font-bold">ICT Division</h2>
								<h4> Government of the People's Republic of Bangladesh </h4>
							</div>
						</div>
						<div>
							<svg
								onClick={() => setOpenHam(!openHam)}
								className={`ham hamRotate ham1  bg-primary 2xl:right-[20%] ${openHam && 'active'}`}
								viewBox="0 0 100 100"
							>
								<path
									className="line top"
									d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
								></path>
								<path className="line middle" d="m 30,50 h 40"></path>
								<path
									className="line bottom"
									d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
