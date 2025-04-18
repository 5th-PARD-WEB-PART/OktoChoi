'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import ImageModal from '@/components/ImageModal'
import styles from './page.module.css'
import { useUserStore } from '../zustand'
import Link from 'next/link'

export default function HomePage() {
  const { name } = useUserStore()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [likedImages, setLikedImages] = useState<Record<string, boolean>>({})

  const toggleLike = (src: string) => {
    setLikedImages(prev => ({
      ...prev,
      [src]: !prev[src]
    }))
  }

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.profileSection}>
          <img src="/profile.jpg" className={styles.avatar} />
          <div className={styles.profileInfo}>
            <h2>
              <span className={styles.name}>{name || '닉네임없음'}</span>
              <Link href="/info">
                <button>프로필 편집</button>
              </Link>            
            </h2>
            <span className={styles.profileStat}>게시물 0 </span>
            <span className={styles.profileStat}>팔로워 0 </span>
            <span className={styles.profileStat}>팔로우 0 </span>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.gridSection}>
          <div className={styles.grid}>
            {['/1.jpg', '/2.jpg', '/3.jpg', '4.jpg' , '5.jpg', '6.jpg'].map((src, idx) => (
              <div key={idx} className={styles.post} onClick={() => setSelectedImage(src)}>
                <img src={src} />
                <div className={styles.overlay}>
                  <span className={styles.lc}>
                    <img src={likedImages[src] ? 'reallove.svg' : 'love.svg'} /> 좋아요
                  </span>
                  <span className={styles.lc}>
                    <img src='comments.svg' /> 댓글
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
          liked={likedImages[selectedImage] || false}
          onLikeToggle={() => toggleLike(selectedImage)}
        />
      )}
    </div>
  )
}