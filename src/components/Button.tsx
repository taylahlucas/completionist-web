import * as React from "react";

interface ButtonProps {
	title: string;
	icon?: string;
	onPress?: () => void;
	variant?: "primary" | "secondary";
	compact?: boolean;
	disabled?: boolean;
	note?: string;
}

const Button = ({
	title,
	icon,
	onPress,
	variant = "primary",
	compact = false,
	disabled = false,
	note,
}: ButtonProps) => (
	<button
		type="button"
		className={`btn btn--${variant}${compact ? " btn--compact" : ""}`}
		onClick={onPress}
		disabled={disabled}
	>
		{icon && <img src={icon} alt="" width={20} height={20} />}
		<span className="btn-copy">
			<span>{title}</span>
			{note && <span className="btn-note">{note}</span>}
		</span>
	</button>
);

export default Button;
