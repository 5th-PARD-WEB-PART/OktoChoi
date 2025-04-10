'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import ImageModal from '@/components/ImageModal'
import styles from './page.module.css'

export default function HomePage() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.profileSection}>
          {/* 프로필 영역 */}
          <img src="/profile.jpg" className={styles.avatar} />
          <div className={styles.profileInfo}>
            <h2>
              <span className={styles.name}>oktorot0</span>
              <button>프로필 편집</button>
            </h2>
            <span className={styles.profileStat}>게시물 0 </span>
            <span className={styles.profileStat}>팔로워 0 </span>
            <span className={styles.profileStat}>팔로우 0 </span>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.gridSection}>
          {/* 포스트 그리드 */}
          <div className={styles.grid}>
            {['/1.jpg', '/2.jpg', '/3.jpg'].map((src, idx) => (
              <div key={idx} className={styles.post} onClick={() => setSelectedImage(src)}>
                <img src={src} />
                <div className={styles.overlay}>
                  <span  className={styles.lc}><img src='love.svg'></img> 좋아요</span>
                  <span  className={styles.lc}><img src='comments.svg'></img> 댓글</span>
                </div>
              </div>
            ))}
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}


    </div>
  )
}
