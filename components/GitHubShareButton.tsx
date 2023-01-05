import * as React from 'react'

import styles from './styles.module.css'

export const GitHubShareButton: React.FC = () => {
  return (
    <a
      href='https://discord.com/invite/typegen' 
      target='_blank'
      rel='noopener noreferrer'
      className={styles.githubCorner}
      aria-label='sex'
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80s'
        style={{
          fill: '#5865F2',
          color: '#fff',
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
          border: 0,
          transform: 'scale(1, 1)'
        }}
        aria-hidden='true'
      >
        <path d='M45.4,45.4L80,80V0H0l36.8,36.8'/>
        <path
          d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
          fill='currentColor'
          style={{
            transformOrigin: '130px 106px'
          }}
          className={styles.octoArm}
        />

          <path
            d='M76.7,28.4c-1.2-3.3-2.9-6.5-4.9-9.4c-0.9,0.3-1.9,0.6-2.8,0.9c-2.2-3.1-4.9-5.8-7.9-8
            c0.4-0.9,0.7-1.8,1-2.8c-2.9-2.1-6-3.8-9.4-5c-11.3,2.1-19.1,7.4-25,14.4l0,0c0.7,4.6,2.1,9.1,4.3,13.3c1.7-0.2,3.3-0.6,4.9-1.1
            c-0.6-1.4-1.1-2.9-1.5-4.4c0.4,0.1,0.9,0.1,1.3,0.2c2.9,8.2,9.3,14.7,17.5,17.7c0,0.4,0.1,0.9,0.2,1.3c-1.5-0.4-3-0.9-4.4-1.6
            c-0.5,1.6-0.9,3.2-1.2,4.9c4.1,2.2,8.6,3.8,13.2,4.5l0,0C70.2,46.5,74.8,38,76.7,28.4z M43.1,26c-1.7-1.7-1.5-4.7,0.4-6.6
            s4.9-2.1,6.6-0.3c1.7,1.8,1.6,4.8-0.4,6.6S44.8,27.8,43.1,26z M54.5,37.7C52.8,36,53,33,54.9,31.1c1.9-1.9,4.9-2.1,6.6-0.3
            s1.6,4.7-0.4,6.6S56.3,39.4,54.5,37.7z'
            fill='currentColor'
            className={styles.octoBody}
        />
      </svg>
    </a>
  )
}
