import { useState, useEffect } from "react";

const DashGraphs = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // You can adjust the width threshold as needed
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className='w-11/12 md:w-3/4 lg:w-2/3 rounded self-center py-3 h-full md:h-3/4 mx-auto'>
			<div className='flex items-center justify-center h-full'>
				{isMobile ? (
					<iframe
						className='border-l border-black-200 w-full h-full md:h-full outline-none'
						src='https://lookerstudio.google.com/embed/reporting/cb96457d-45a0-4f47-b445-4a604bc11ce4/page/p_j3z64e5ihd'
						sandbox='allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox'></iframe>
				) : (
					<iframe
						className='border-l border-black-200 w-full md:w-9/12 h-64 md:h-full outline-none'
						src='https://lookerstudio.google.com/embed/reporting/4c18476b-68aa-486e-9b7a-59cb4a67ede1/page/amfyD'
						sandbox='allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox'></iframe>
				)}
			</div>
		</div>
	);
};

export default DashGraphs;
