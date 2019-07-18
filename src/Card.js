import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h1>{props.name}</h1>
            <div>
                <img alt="photo" src="https://robohash.org/test?200x200" />
                <div>
                    <h2>Jane Doe</h2>
                    <p>jane.doe@gmail.com</p>
                </div>
            </div>
        </div>

    );
}

export default Card;