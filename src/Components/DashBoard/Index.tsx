import DashGraphs from "./DashGraphs";
import DashHeader from "./DashHeader";

const Index = () => {
	return (
		<div className='flex flex-col p-2 h-screen'>
			<DashHeader />
			<DashGraphs />
		</div>
	);
};
export default Index;
