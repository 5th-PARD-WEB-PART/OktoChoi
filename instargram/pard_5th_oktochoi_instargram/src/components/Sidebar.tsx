// src/components/Sidebar.tsx
'use client'

import Link from 'next/link'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="instargramlogo1.png" className={styles.logo}/>
      <ul className={styles.menu}>
        <li><img src="home.png" className={styles.icon} /> 홈</li>
        <li><img src="search.png" className={styles.icon} /> 검색</li>
        <li><img src="Navigation Icons.png" className={styles.icon} /> 릴스</li>
        <li><img src="Union.png" className={styles.icon} /> 메시지</li>
        <li><img src="yes.png" className={styles.icon} /> 알림</li>
        <li><img src="as.png" className={styles.icon} /> 만들기</li>
        <li>
          <Link href="/mypage" className={styles.link}>
            <img src="Icons.png" className={styles.icon} /> 프로필
          </Link>
        </li>
      </ul>

      <div className={styles.more}>
        <img src="=.png" className={styles.moreicon} /><span>더 보기</span>        
      </div>  
    </aside>
  )
}         
