import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../utils/localSt";

const FormInput = () => {
	const navigate = useNavigate();
	const p = import.meta.env.VITE_PASS;
	const l = import.meta.env.VITE_LOGIN;

	const [password, setPassword] = useState<string>("");
	const [user, setUser] = useState<string>("");

	function handleSubmit(e: React.FormEvent<HTMLElement>) {
		e.preventDefault();
		setUser("");
		setPassword("");
		if (validate()) {
			setLocalStorage();
			console.log("submitted");
			navigate("/dashboard");
		}
	}

	function validate() {
		return user === l && password === p;
	}

	useEffect(() => {
		const res = getLocalStorage();
		if (res) {
			navigate("/dashboard");
		}
	}, [navigate]);

	return (
		<div className='flex flex-col w-11/12 md:w-1/4 mx-auto content-center justify-items-center mt-10'>
			<form
				className='p-4 flex flex-col gap-4 border border-gray-300 rounded shadow-md'
				onSubmit={(e) => handleSubmit(e)}>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='user'
						className='font-semibold text-gray-700'>
						User*:
					</label>
					<input
						name='user'
						onChange={(e) => setUser(e.target.value)}
						value={user}
						placeholder='User'
						type='text'
						className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
					/>
					<label
						htmlFor='password'
						className='font-semibold text-gray-700'>
						Password*:
					</label>
					<input
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
						type='password'
						className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
					/>
				</div>
				<button
					className='p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300'
					type='submit'>
					Login
				</button>
			</form>
		</div>
	);
};

export default FormInput;
