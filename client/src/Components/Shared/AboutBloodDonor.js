import React from 'react'
import factsImg from '../../asset/images/donationFact.png';
import factsTable from '../../asset/images/donors_blood_type.png';

const AboutBloodDonor = () => {
    return (
        <div className="container-about-donor">
            <div className="content-about-donor">
                <div className="about-donor-header">
                    <h2>About Blood Donation</h2>
                </div>
                <div className="about-donor-information">
                    <div className="information-content">
                        <div className="img-facts">
                            <img src={factsImg} alt="donationFact" />
                        </div>
                    </div>
                    <div className="information-content information-content-facts-table ">
                        <div className="img-facts img-facts-table">
                            <img src={factsTable} alt="donationFact" />
                        </div>
                        <div className="facts">
                            <p><b>Note: </b>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBloodDonor