import React from 'react';
import styles from './Bio.module.scss';

interface BioProps {
  imagePath: string;
  name: string;
  tagline: string;
  position: string;
}

const Bio: React.FunctionComponent<BioProps> = ({
  imagePath,
  name,
  tagline,
  position,
}) => (
  <div className={styles.bio}>
    <div className={styles.bioImage}>
      <img src={imagePath} alt={`Headshot of ${name}`} />
    </div>
    <div className={styles.bioContent}>
      <p className={styles.bioContentName}>{name}</p>
      <p className={styles.bioContentTagline}>{tagline}</p>
      <p className={styles.bioContentPosition}>{position}</p>
    </div>
  </div>
);

export default Bio;
