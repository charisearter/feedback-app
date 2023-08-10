import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyles}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: 'Whatever text for header',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: 'fff',
};

Header.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Header;