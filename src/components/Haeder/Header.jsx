/* eslint-disable react/no-unescaped-entities */
import './Header.css';
import logo from '../../assets/images/logo.png';
import {useState} from 'react';
import {Button, ConfigProvider, Select, Space, theme} from 'antd';

const Header = () => {
	const [openHam, setOpenHam] = useState(false);
	return (
		<div className="container relative mx-auto">
			<div className="absolute top-10 ">
				<div className="container mx-auto">
					<div className=" flex ">
						<div className="flex items-center ml-10 z-10">
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
								className={`ham hamRotate ham1  bg-primary 2xl:right-[10%] ${
									openHam && 'active'
								} z-50`}
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

			<div className={`navigation flex ${openHam ? `show` : ''} z-30`} id="home">
				<div className="left ">
					<nav className="menu text-start">
						<ul className="mt-10 ">
							<li className="block">
								<a className="!text-primary" to="/">
									home
								</a>
							</li>
							<li>
								<a>Institution</a>
							</li>

							<li>
								<a>Project</a>
							</li>
							<li>
								<a>Gallery</a>
							</li>
							<li>
								<a>acts</a>
							</li>
							<li>
								<a>E-service</a>
							</li>
							<li>
								<a>Content</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className=" hidden md:block w-[1px] h-[1000px] bg-white ml-2"></div>
				<div className="pl-16 flex justify-center ">
					<div className="mt-10">
						<h2 className="text-2xl font-bold mb-3">Bangladesh National Port</h2>
						<ConfigProvider
							theme={{
								algorithm: theme.darkAlgorithm,
							}}
						>
							<Space>
								<Select
									placeholder=""
									size="large"
									style={{width: '200px'}}
									options={[
										{value: 'ministry', label: 'মন্ত্রণালয়/বিভাগ'},
										{value: 'directorate', label: 'অধিদপ্তর বাতায়ন'},
										{value: 'divisional', label: 'বিভাগীয় বাতায়ন'},
										{value: 'districal', label: 'জেলা বাতায়ন'},
										{value: 'upazilaBatayon', label: 'উপজেলা বাতায়ন'},
										{value: 'unionBatayon', label: 'ইউনিয়ন বাতায়ন'},
										{value: 'otherOfficeList', label: 'অন্যান্য'},
									]}
								/>
							</Space>
						</ConfigProvider>
						<Button className="bg-primary border-0 hover:!bg-secondary !text-white  font-bold uppercase cursor-pointer ml-3 h-[40px] w-[100px]">
							Go
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
