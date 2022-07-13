import React, { Component } from 'react'

export default class About extends Component {
   
    render() {
        return (
            <div className='about-component hero-container'>
                <div className='philosophy'>
                    <h2 className='main-heading-style'>Philosophy</h2>
                    <p>Investment &amp; Wealth Management has traditionally been seen as complex and only suitable for people with high networth. At Kuants, we want to change that and make it really simple and seamless for a large no. of investors. We want to curate the investment experience and make investing as simple as online shopping!!!
                    </p><p style={{marginBottom:0}}>
                        Eventually, we aim to become an Investment superApp that provides a wide range of investment choices with a high level of curation.
                    </p>
                </div>
                <img src='/assets/group-philosophy.png' alt='philosophy-bg-vector' className='philosophy-vector' />
                <div className='our-team'>
                    <h2 className='main-heading-style'>Our Team</h2>
                    <div className='founder-section'>
                        <div className='founder-left'>
                            <p className='full-name'>Mr. Sumit Kumar Narvar
                            </p>
                            <p className='founder-designation'>Founder</p>
                            <p className='founder-info'>Mr. Narvar is a first-generation entrepreneur and a well recognized personality amongst the business leadership fraternity, who has mentored and built multi billion-dollar businesses in Fintech and Financial services space.
                            </p>
                            <div className='companies-logo-container'>
                                <img src='/assets/rp-logo.png' alt='logo' />
                                <img src='/assets/ci-logo.png' alt='logo' />
                                <img src='/assets/nye-logo.png' alt='logo' />
                            </div>
                            <div className='companies-logo-container'>
                                <img src='/assets/rmx-logo.png' alt='logo' />
                                <img src='/assets/cred-logo.png' alt='logo' />
                                <img src='/assets/ks-logo.png' alt='logo' />
                            </div>
                        </div>
                        <img src='/assets/founder.png' alt='img-of-founder' className='founder-img' />
                    </div>
                    <h2 className='main-heading-style centered-heading'>Directors</h2>
                    <div className='team-sub-container'>
                        <div>
                            <img src='/assets/director1.png' alt='Yogendra Kashyap'/>
                            <h3 className='heading-style-two'>Yogendra Kashyap</h3>
                            <p>Director</p>
                        </div>
                        <div>
                            <img src='/assets/director2.png' alt='Nipun Jain'/>
                            <h3 className='heading-style-two'>Nipun Jain</h3>
                            <p>Director</p>
                        </div>
                    </div>
                    <h2 className='main-heading-style centered-heading'>Management Team</h2>

                    <div className='team-sub-container'>
                        <div>
                            <img src='/assets/ceo.png' alt='Himanshu Nazkani'/>
                            <h3 className='heading-style-two'>Himanshu Nazkani</h3>
                            <p>COO</p>
                        </div>
                        <div>
                            <img src='/assets/techhead.png' alt='Ayush Gangwar'/>
                            <h3 className='heading-style-two'>Ayush Gangwar</h3>
                            <p>Head of Technology - Algo Trading</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
