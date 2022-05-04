import "./ProfilePicture.scss";

const ProfilePicture = ({ imageURL }: { imageURL: string }): JSX.Element => (
    <div className="profileImg">
        <img src={imageURL} alt="profile" />
    </div>
);

export default ProfilePicture;
