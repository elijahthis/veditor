import "./Slider.scss";
import { useDispatch } from "react-redux";
import { SETCURRENTTIME } from "../../../redux/slices/currentTimeSlice";

interface SliderProps {
    posn: number;
    duration: number;
    vidElement: HTMLVideoElement;
}

const Slider = ({ posn, duration, vidElement }: SliderProps): JSX.Element => {
    const dispatch = useDispatch();
    // const currentTime = useSelector(
    //     (state: RootState) => state.currentTime.currentTime
    // );

    return (
        <div
            className="Slider"
            onClick={(ev) => {
                const { currentTarget, clientX } = ev;
                if (currentTarget) {
                    console.log(clientX);
                    const offsetLeft = (currentTarget as HTMLDivElement)
                        .offsetLeft;
                    const clientWidth = (currentTarget as HTMLDivElement)
                        .clientWidth;
                    let newVal = clientX - offsetLeft;
                    if (newVal < 0) {
                        newVal = 0;
                    } else if (newVal > clientWidth) {
                        newVal = clientWidth;
                    }
                    dispatch(SETCURRENTTIME((newVal / clientWidth) * duration));
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
};

export default Slider;
