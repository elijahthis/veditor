import "./Slider.scss";

const Slider = ({ posn }: { posn: number }): JSX.Element => (
    <div className="Slider">
        <div className="Slider__track" style={{ width: `${posn}%` }}>
            <div className="Slider__thumb"></div>
        </div>
    </div>
);

export default Slider;
