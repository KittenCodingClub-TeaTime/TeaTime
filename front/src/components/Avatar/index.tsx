import React from 'react';
import styles from '../../styles/Username.module.css';

const Avatar = () => {
  const profilPic = ['https://zupimages.net/up/21/06/3w5i.png', 'https://zupimages.net/up/23/19/pdve.png'][
    Math.floor(Math.random() * 2)
  ];
  return (
    <div className="profile flex justify-center">
      <img src={profilPic} className={styles.profile_img} alt="avatar" />
    </div>
  );
};

export default Avatar;
