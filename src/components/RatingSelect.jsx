import { useState } from 'react';


function RatingSelect({ select }) {
	const [selected, setSelected] = useState(10);

	const handleChange = (e) => {
		// added + to make it typeof number instead of typeof String
		setSelected(+e.currentTarget.value);
		select(+e.currentTarget.value);
	};

	return (
		<ul className='rating'>
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type='radio'
						name='rating'
						id={`num${i + 1}`}
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	);
}
export default RatingSelect;
