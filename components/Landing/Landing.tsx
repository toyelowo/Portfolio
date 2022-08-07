import React from 'react';
import Image from 'next/image';

import {Navbar} from '../Navbar';
import {Page} from '../ui';
import styles from '/styles/Landing.module.scss';

export function Landing(){
  return (
    // <Page>
      <div className={styles.LandingWrapper}>

        <Navbar />
        <div className={styles.DescriptionWrapper}>
          <div className={styles.DescriptionInnerWrapper}>
              <div className={styles.Description}>
              <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
              </div>
              <div className={styles.LightModeWrapper}>
              <Image
                  layout='fixed'
                  src="/Bulb.png"
                  alt="Picture of a bulb"
                  width="15px"
                  height="15px" 
              />
              
              <p className={styles.LightMode}>Light Mode</p>
              </div>
          </div>
        </div>

        <div className={styles.FooterWrapper}>
          <div className={styles.FooterWrapper__name__description}>
          <p className={styles.FooterWrapper__name__description__prefix}>Hi, my name is </p>
          <span className={styles.FooterWrapper__name__description__fullName}>Temitayo Oyelowo</span>
          </div>
          <div className={styles.FooterWrapper__button}>
          <p>Scroll Down</p>
          </div>
        </div>
      </div>
    // </Page>
  )
}