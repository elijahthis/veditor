import "./Button.scss";

interface ButtonProps {
    children: JSX.Element | string;
    variant: string;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

const Button = ({
    children,
    variant,
    disabled = false,
    onClick,
    href,
}: ButtonProps): JSX.Element => {
    // const VARIANTS: string[] = ["primary", "secondary"];
    const disabledStyle = disabled && "disabled";

    const ButtonClassName = `${variant} ${disabledStyle}`;

    const clickFunc = () => {
        if (disabled) return;
        else if (href) {
            return;
        } else {
            return onClick && onClick();
        }
    };

    return (
        <button className={ButtonClassName} onClick={clickFunc}>
            {children}
        </button>
    );
};
export default Button;
