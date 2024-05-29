import React, { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
    </div>
  );
};

export default ScrollProgress;
