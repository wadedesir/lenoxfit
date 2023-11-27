import React from 'react';

function Bio({ toggle, setToggle, data }) {

    return (

        <div className='bio-modal' style={{ display: `${toggle ? 'flex' : 'none'}` }} >
            <div className='mt-20'>
                <h3 className='mt-10'>About</h3>
                <pre>{data.text}</pre>

                <h3>Certifications and Training</h3>
                <pre>{data.certs}</pre>
            </div>
            <a onClick={() => setToggle(false)}>✖</a>
        </div>
    );
}

export default Bio;