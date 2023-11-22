import React, { useEffect, useState } from 'react';

import rec from '../../assets/images/custom/rec2.jpg'
import cryo from '../../assets/images/custom/rec3.jpg'


const Recovery = ({ title }) => {
  return (
    <section className="dark-bg" id="schedule">


      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 section-heading pb-0">
            <h2 className="mt-0 rec-title">{title}</h2>
            <hr className="white-bg" />
          </div>
        </div>

        <div className='row'>

          <div className='col-6'>
            <img src={cryo} className='cryo' />
          </div>

          <div>
            <p>
              Lenox Fit is excited to bring you the absolute best in wellness and recovery right here in the Berkshires. Our brand-new Wellness and Recovery room is equipped with a state of the art, full body Cryotherapy Chamber by Cryo Arctic, a full spectrum Jacuzzi brand Clearlight Infrared Sauna as well as two sets of Normatec Leg Compression sleeves and a Normatec hip compression.
            </p>

            <p>
              Recovery sessions at Lenox Fit are designed for one person per half hour session. During your 30-minute session you will experience three minutes in our full body Cryotherapy chamber while listening to your favorite music, a few minutes of warming infrared heat and finish up with leg or hip compression therapy. If you would like to come with another person, please book two consecutive half hour sessions.
            </p>

            <p>
              Recovery treatment benefits include decreased inflammation, boosted mood, increased immunity, pain relief, improved sleep, headache relief, as well as improved recovery from exercise.
            </p>

            <p>
              PRICES
            </p>

            <p>Recovery sessions take approximately 30 minutes and no membership is required. Lenox Fit provides a robe, socks, footwear, a mask, ear protection and gloves. Participants should wear shorts (men) and shorts/sports bra (women). A waiver is required to participate for everyone over the age of 18 and a parental waiver is required for participants ages 14-17. Parents must be present during treatment for children age 14-17.</p>

            <span>
              Whi should not participate:
            </span>

            <p>
          If you have experienced any of the following health conditions, it is advised not to obtain Cryotherapy treatment: Pregnancy, severe Hypertension (Blood Pressure> 180/100), acute or recent myocardial infarction, unstable angina pectoris, arrhythmia, symptomatic cardiovascular disease, cardiac pacemaker, peripheral arterial occlusive disease, venous thrombosis, acute or recent cerebrovascular accident, uncontrolled seizures, Raynaud’s Syndrome, tumor disease, symptomatic lung disorders, bleeding disorders, fever, severe anemia, infection, cold allergy, acute kidney and urinary tract diseases. Any client with history of cardiac disease with the past 6 months will be required to have a physician’s statement clearing them to get Whole Body Cryotherapy treatment.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
};

export default Recovery;
