import Sidebar from '@/components/Sidebar'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.profileSection}>
          {/* 프로필 영역 */}
          <img src="/profile.jpg" className={styles.avatar} />
          <div className={styles.profileInfo}>
            <h2><span className={styles.name}>oktorot0</span><button>프로필 편집</button></h2>
            <span className={styles.profileStat}>게시물 0 </span>
            <span className={styles.profileStat}>팔로워 0 </span>
            <span className={styles.profileStat}>팔로우 0 </span>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.gridSection}>
          {/* 포스트 그리드 */}
          <div className={styles.grid}>
            <div className={styles.post}>
              <img src="/1.jpg" />
              <div className={styles.overlay}>
                <span>❤️ 1004</span>
                <span>💬 190</span>
              </div>
            </div>
            <div className={styles.post}>
              <img src="/2.jpg" />
              <div className={styles.overlay}>
                <span>❤️ 1000004</span>
                <span>💬 12121</span>
              </div>
            </div>  
            <div className={styles.post}>
              <img src="/3.jpg" />
              <div className={styles.overlay}>
                <span>❤️ 484</span>
                <span>💬 123</span>
              </div>
            </div>            
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
          </div>
        </section>
      </main>
    </div>
  )
}
