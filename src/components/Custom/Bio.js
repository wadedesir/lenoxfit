import React from 'react';

function Bio({ toggle, setToggle, id, team }) {

    const person = team.filter(item => item.id == id)[0]
    return (

        <section className='bio-modal' style={{ display: `${toggle ? 'block' : 'none'}` }} >
            <div className='container'>
                <div className="row">
                    <div className="col-sm-8 section-heading pb-0">
                        <h2 className="mt-0">{person.title}</h2>
                        <h3>{person.role}</h3>
                        <hr className="dark-bg" />
                    </div>
                </div>
                <div className=''>
                    <h3 className=''>About</h3>
                    {person.bio.text.map(item => <p>{item}</p>)}

                    {person.bio.certs.length > 0 ? <h3 style={{ marginTop: '20px' }}>Certifications and Training</h3> : ''}
                    {person.bio.certs.map(item => <p>{item}</p>)}

                </div>
                <p className="mt-20">
                    <a
                        className="btn btn-dark font-500 btn-md btn-square remove-margin"
                        onClick={() => setToggle(false)}
                    >
                        Exit
                    </a>
                </p>

            </div>
        </section>
    );
}

export default Bio;