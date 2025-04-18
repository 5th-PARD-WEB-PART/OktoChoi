// src/components/Sidebar.tsx
'use client'

import Link from 'next/link'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="instargramlogo1.png" className={`${styles.logo} ${styles.desktopOnly}`} />
      <img src="instalogo.png" className={`${styles.logo} ${styles.tabletOnly}`} />
      <ul className={styles.menu}>
        <li><img src="home.png" className={`${styles.icon} ${styles.mobileOnly}`}/><span>홈</span></li>
        <li><img src="search.png" className={`${styles.icon} ${styles.mobileOnly}`} /><span>검색</span></li>
        <li><img src="Navigation Icons.png" className={`${styles.icon} ${styles.mobileOnly}`}/><span>릴스</span></li>
        <li><img src="Union.png" className={`${styles.icon} ${styles.nomobileOnly}`} /><span>메시지</span></li>
        <li><img src="yes.png" className={`${styles.icon} ${styles.mobileOnly}`}/><span>알림</span></li>
        <li><img src="as.png" className={`${styles.icon} ${styles.nomobileOnly}`} /><span>만들기</span></li>
        <li>
          <Link href="/mypage" className={styles.link}>
            <img src="Icons.png" className={`${styles.icon} ${styles.mobileOnly}`}/><span>프로필</span>
          </Link>
        </li>
      </ul>


      <div className={styles.more}>
        <img src="=.png" className={`${styles.moreicon} ${styles.nomobileOnly}`} /><span>더 보기</span>        
      </div>  
    </aside>
  )
}         
