import PropTypes from 'prop-types';

function Button({ children, version, type, disabled }) {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`btn btn-${version}`}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	version: 'primary',
	type: 'button',
	disabled: true,
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	Disabled: PropTypes.bool,
};

export default Button;
