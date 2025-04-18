'use client'

import { useState } from 'react'
import styles from './ImageModal.module.css'

type Props = {
  src: string
  onClose: () => void
  liked: boolean
  onLikeToggle: () => void
}

type Comment = {
  profileImage: string
  username: string
  content: string
}

export default function ImageModal({ src, onClose, liked, onLikeToggle }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handlePost = () => {
    if (newComment.trim() === '') return
    const newItem: Comment = {
      profileImage: '/Avatar.svg',
      username: 'oktorot0',
      content: newComment,
    }
    setComments([...comments, newItem])
    setNewComment('')
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageSection}>
          <img src={src} />
        </div>

        <div className={styles.commentSection}>
          <div className={styles.userInfo}>
            <img src="/Avatar.svg" className={styles.commentAvatar} />
            <span>oktorot0</span>
            <img src="/other.svg" className={styles.other} />
          </div>

          <div className={styles.comments}>
            {comments.map((c, i) => (
              <div key={i} className={styles.commentItem}>
                <img src={c.profileImage} className={styles.commentAvatar} />
                <span className={styles.name}>{c.username}</span>
                <p className={styles.content}>{c.content}</p>
              </div>
            ))}
          </div>

          <div className={styles.iconBar}>
            <img
              src={liked ? '/reallove.svg' : '/Love.png'}
              className={styles.commentbar}
              onClick={(e) => {
                e.stopPropagation()
                onLikeToggle()
              }}
            />
            <img src="/comment.jpg" className={styles.commentbar} />
            <img src="/share.jpg" className={styles.commentbar} />
            <img src="/Post.jpg" className={styles.commentpostbar} />
          </div>

          <div className={styles.commentInput}>
            <input
              type="text"
              placeholder="댓글 달기..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePost()}
            />
            <button onClick={handlePost} className={styles.post}>게시</button>
          </div>
        </div>
      </div>
    </div>
  )
}
