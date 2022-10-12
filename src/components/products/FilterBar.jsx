import React from "react"

const FilterBar = () => {
	const number = 4
	return (
		<>
			<div className='w-full p-4 bg-gray-200  rounded my-2'>
				<div className='flex flex-col sm:flex-row sm:mr-4 sm:items-center'>
					<select
						className=' outline-none w-full sm:w-64 md:w-72 px-3 py-1.5  text-base font-semibold text-black bg-white  border-gray-300 rounded transition ease-in-out m-0  focus:bg-white focus:border-fuchsia-700 focus:outline-none'
						aria-label='sort by'
					>
						<option defaultValue={null}>Sort By</option>
						<option value='created_at'>latest</option>
						<option value='-created_at'>oldest</option>
						<option value='name'>name - ascending</option>
						<option value='-name'>name - descending</option>
					</select>
					<div className='flex w-full justify-between sm:justify-end py-4  items-center sm:ml-4 '>
						<p className='sm:pr-6'>
							showing <span className='text-lg font-bold text-fuchsia-700'>{number}</span> results
						</p>

						<div className='inline-flex rounded-md shadow-sm' role='group'>
							<button
								type='button'
								className='py-1 px-4 text-sm font-semibold bg-white rounded-l border border-gray-200 hover:bg-gray-100  focus:z-10 '
							>
								Prev
							</button>

							<button
								type='button'
								className='py-1 px-4 text-sm font-semibold bg-white rounded-r border border-gray-200 hover:bg-gray-100  focus:z-10 '
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FilterBar
