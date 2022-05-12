import { Dispatch, SetStateAction } from "react";
import "./Slider.scss";

interface SliderProps {
    posn: number;
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    duration: number;
    vidElement: HTMLVideoElement;
}

const Slider = ({
    posn,
    currentTime,
    setCurrentTime,
    duration,
    vidElement,
}: SliderProps): JSX.Element => (
    <div
        className="Slider"
        onClick={(ev) => {
            const { currentTarget, clientX } = ev;
            if (currentTarget) {
                console.log(clientX);
                const offsetLeft = (currentTarget as HTMLDivElement).offsetLeft;
                const clientWidth = (currentTarget as HTMLDivElement)
                    .clientWidth;
                let newVal = clientX - offsetLeft;
                if (newVal < 0) {
                    newVal = 0;
                } else if (newVal > clientWidth) {
                    newVal = clientWidth;
                }
                setCurrentTime((newVal / clientWidth) * duration);
                vidElement.currentTime = (newVal / clientWidth) * duration;
            }
        }}
    >
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
