import "./Slider.scss";

interface SliderProps {
    posn: number;
}

const Slider = ({ posn }: SliderProps): JSX.Element => (
    <div className="Slider">
        <div
            className="Slider__track"
            style={{
                width: `${posn}%`,
            }}
        >
            <div className="Slider__thumb"></div>
        </div>
    </div>
);

export default Slider;
