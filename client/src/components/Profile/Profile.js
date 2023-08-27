import React from 'react';

function Profile() {
    return(
        <section>
            <div className="userInfo">
                <h2>Welcome, user!</h2>
            </div>
            <div className="userImages">
                <h3>Here are your saved inspo pics!</h3>
                <ul>
                    <li>image 1</li>
                    <li>image 2</li>
                    <li>image 3</li>
                </ul>
            </div>
        </section>
    );
}

export default Profile;