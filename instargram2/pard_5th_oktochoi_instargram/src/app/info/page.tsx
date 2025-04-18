'use client'

import { useUserStore } from '../zustand'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import styles from './Info.module.css'

export default function InfoEditPage() {
  const { name, setName } = useUserStore()
  const [newName, setNewName] = useState(name)
  const router = useRouter()

  const handleSubmit = () => {
    setName(newName)
    alert("수정했습니다.")
    router.push('/mypage')
  }

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.content}>
        <h2 className={styles.title}>프로필 편집</h2>
        <p className={styles.description}>수정할 닉네임을 입력한 후 제출을 해주세요.</p>
        <div className={styles.background}>
            <img src="/person.png" className={styles.profile} />
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className={styles.input}
            />
        </div>

        <button onClick={handleSubmit} className={styles.button}>
          제출
        </button>
      </main>
    </div>
  )
}
