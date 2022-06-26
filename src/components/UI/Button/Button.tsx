import "./Button.scss";
import { Audio } from "react-loader-spinner";

interface ButtonProps {
    children: JSX.Element | string;
    variant: string;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
    loading?: boolean;
}

const Button = ({
    children,
    variant,
    disabled = false,
    onClick,
    href,
    loading = false,
}: ButtonProps): JSX.Element => {
    // const VARIANTS: string[] = ["primary", "secondary"];
    const disabledStyle = disabled && "disabled";

    const ButtonClassName = `${variant} ${disabledStyle}`;

    const clickFunc = () => {
        if (disabled || loading) return;
        else if (href) {
            return;
        } else {
            return onClick && onClick();
        }
    };

    return (
        <button className={ButtonClassName} onClick={clickFunc}>
            {loading ? (
                <Audio
                    height="18"
                    width="18"
                    color="grey"
                    ariaLabel="loading"
                />
            ) : (
                children
            )}
        </button>
    );
};
export default Button;
