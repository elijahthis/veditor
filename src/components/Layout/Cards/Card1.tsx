import SideCard from "../../UI/Cards/SideCard";
import VideoPlaceholder from "../../UI/VideoPlaceholder";
import Button from "../../UI/Button";

const Card1 = (): JSX.Element => {
    const dataList: { image: string; title: string; duration: number }[] = [
        {
            image: "/assets/images/imgPlaceholder.png",
            title: "How  to edit your first veditor video",
            duration: 60,
        },
        {
            image: "/assets/images/imgPlaceholder.png",
            title: "How  to edit your first veditor video",
            duration: 60,
        },
    ];

    return (
        <SideCard>
            <div>
                <div className="cardTitle">
                    <h3>Guides</h3>
                </div>
                <p className="desc">
                    Learn all you need to know to get started on veditor
                </p>
                <div className="videos">
                    {dataList.map((item, ind) => (
                        <div key={ind} className="videoItem">
                            <div>
                                <div className="videoItem__thumbnail">
                                    <VideoPlaceholder
                                        imageURL={item.image}
                                        video={true}
                                    />
                                </div>
                                <div className="videoItem__info">
                                    <p className="title">{item.title}</p>
                                    <p className="info">{item.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn">
                    <Button variant="primary">See more</Button>
                </div>
            </div>
        </SideCard>
    );
};

export default Card1;
