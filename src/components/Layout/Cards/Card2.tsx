import { useState } from "react";
import SideCard from "../../UI/Cards/SideCard";
import { IconlySearch } from "../../Assets/SVGs";
import VideoPlaceholder from "../../UI/VideoPlaceholder";
import Button from "../../UI/Button";
import { ArrowDownCircle } from "../../Assets/SVGs";
import WaveForm from "../../UI/WaveForm";

interface dataListProps {
    image: string;
    title: string;
    artist: string;
    duration: number;
}
interface dataListPropsOptional {
    image?: string;
    title?: string;
    artist?: string;
    duration?: number;
}

const Card2 = (): JSX.Element => {
    const dataList: dataListProps[] = [
        {
            image: "/assets/images/ruger.jpg",
            title: "Dior",
            artist: "Ruger",
            duration: 165,
        },
        {
            image: "/assets/images/adele.jpg",
            title: "Someone Like You",
            artist: "Adele",
            duration: 165,
        },
        {
            image: "/assets/images/future.jpg",
            title: "WAIT FOR YOU",
            artist: "Future",
            duration: 60,
        },
    ];

    const [playing, setPlaying] = useState<dataListPropsOptional>({});

    return (
        <SideCard>
            <div>
                <div className="cardTitle cardTitle--song">
                    <h3>Browse Music</h3>
                    <IconlySearch color="white" />
                </div>
                {Object.keys(playing).length ? (
                    <div>
                        <div className="videoItem videoItem--song videoItem--playing">
                            <div>
                                <div className="videoItem__thumbnail">
                                    <VideoPlaceholder
                                        imageURL={playing.image || ""}
                                    />
                                </div>
                                <div className="videoItem__info">
                                    <p className="title">{playing.title}</p>
                                    <p className="info">
                                        {playing.artist} • {playing.duration}
                                    </p>
                                </div>
                            </div>
                            <Button variant="secondary">Use</Button>
                        </div>
                        <div className="waveDiv">
                            <WaveForm />
                        </div>
                    </div>
                ) : null}
                <div>
                    {dataList.map((item, ind) => (
                        <div
                            key={ind}
                            className="videoItem videoItem--song"
                            onClick={() => setPlaying(item)}
                        >
                            <div>
                                <div className="videoItem__thumbnail">
                                    <VideoPlaceholder imageURL={item.image} />
                                </div>
                                <div className="videoItem__info">
                                    <p className="title">{item.title}</p>
                                    <p className="info">
                                        {item.artist} • {item.duration}
                                    </p>
                                </div>
                            </div>
                            <ArrowDownCircle color="white" />
                        </div>
                    ))}
                </div>
            </div>
        </SideCard>
    );
};

export default Card2;
