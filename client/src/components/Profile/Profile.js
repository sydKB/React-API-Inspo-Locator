function Profile({ savedPhotos }) {
    return(
        <section>
            <div className="userInfo">
                <h2>Welcome, user!</h2>
            </div>
            <div className="userImages">
                <h3>Here are your saved inspo pics!</h3>
                {savedPhotos.map((photo) => (
            <img
                 key={photo.id}
                 src={photo.urls.small}
                 alt={photo.alt_description}
             />
))}
            </div>
        </section>
    );
}
export default Profile;