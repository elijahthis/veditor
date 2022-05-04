import "./SideCard.scss";

interface SideCardProps {
    children: JSX.Element;
}

const SideCard = ({ children }: SideCardProps): JSX.Element => {
    return <aside className="SideCard">{children}</aside>;
};

export default SideCard;
