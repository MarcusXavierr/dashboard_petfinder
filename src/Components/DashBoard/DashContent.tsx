const DashContent = () => {
	return (
		<div>
			<div className='flex gap-3 justify-center'>
				<div className='py-3 px-5 bg-[#fef3e5] p-2 rounded w-1/6'>
					<div className='mb-2'>
						<h1 className='font-bold text-[#5b45cb] text-sm'>Pets cadastrados</h1>
					</div>
					<div>
						<h2
							id='Cadastrados'
							className='text-[#f6af53] font-bold text-2xl'>
							290
						</h2>
					</div>
				</div>
				<div className='py-3 px-5 bg-[#fef3e5] p-2 rounded w-1/6'>
					<div className='mb-2'>
						<h1
							id='adotados'
							className='font-bold text-sm text-[#5b45cb]'>
							Pets adotados
						</h1>
					</div>
					<div>
						<h2 className='text-[#f6af53] font-bold text-2xl'>135</h2>
					</div>
				</div>
				<div className='py-3 px-5 bg-[#fef3e5] p-2 rounded w-1/6'>
					<div className='mb-2'>
						<h1
							id='usuarios'
							className='text-sm font-bold text-[#5b45cb]'>
							Usuários
						</h1>
					</div>
					<div>
						<h2 className='text-[#f6af53] font-bold text-2xl'>523</h2>
					</div>
				</div>
				<div className='flex p-2 rounded align-center justify-center content-center py-3 px-5 bg-[#fef3e5] w-2/6'>
					<h1
						id='anunciantes'
						className='font-bold self-center text-[#5b45cb]'>
						Anunciantes
					</h1>
					<div className='p-3 flex flex-col'>
						<div className='p-1 flex gap-3'>
							<h1 className='text-2xl font-bold text-[#f6af53]'>10</h1>
							<h2>associações</h2>
						</div>
						<div className='p-1 flex gap-3'>
							<h1 className='text-2xl font-bold text-[#f6af53]'>200</h1>
							<h2>protetores</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DashContent;
