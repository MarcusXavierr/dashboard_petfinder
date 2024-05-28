import FormInput from "./FormInput";
import FormHeader from "./FormHeader";
const FormIndex = () => {
	return (
		<div className='w-screen flex flex-col items-center gap-5'>
			<FormHeader />
			<FormInput />
			<button
				className='p-2 bg-[#5b45cb] text-white  rounded px-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#5b45ff]'
				type='submit'>
				Home
			</button>
		</div>
	);
};
export default FormIndex;
