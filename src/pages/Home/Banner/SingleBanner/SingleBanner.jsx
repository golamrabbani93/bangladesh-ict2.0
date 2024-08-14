import {Button} from 'antd';

/* eslint-disable react/prop-types */
const SingleBanner = ({data}) => {
	const contentStyle = {
		// margin: -1,
		height: '95vh',
	};
	const {image, quote, description} = data;
	return (
		<div className="relative " style={contentStyle}>
			<img src={image} alt="" className="" />

			<div className="banner_opacity absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] h-full w-full"></div>

			<div className="container mx-auto ">
				<div className="absolute top-[35%] ml-10">
					<div className="">
						<h1 className="text-primary-focus text-4xl md:text-[70px] font-bold  leading-[80px] md:leading-[90px] mt-2 md:mb-4 uppercase">
							{quote}
						</h1>
						<p className="text-3xl w-[55%] md:mb-5 text-justify">{description}</p>
						<Button className="bg-primary border-0 hover:!bg-secondary !text-white w-[200px] font-bold uppercase cursor-pointer">
							See Deatails
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBanner;
