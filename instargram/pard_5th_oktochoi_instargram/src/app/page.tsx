import Link from 'next/link'
import styles from './SignUp.module.css'

export default function RegisterPage() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>

        <div className={styles.card}>
          <img src="instargramlogo1.png" className={styles.logo}/>

          <p className={styles.subtitle}>
            친구들의 사진과 동영상을 보려면 가입하세요.
          </p>

          <form>
            <input type="text" placeholder="휴대폰 번호 또는 이메일 주소" className={styles.input} /><br></br>
            <input type="text" placeholder="성명" className={styles.input} /><br></br>
            <input type="text" placeholder="사용자 이름" className={styles.input} /><br></br>
            <input type="password" placeholder="비밀번호" className={styles.input} />

            <p className={styles.caption}>
              저희 서비스를 이용하는 사람의 회원님의 연락처 정보를<br></br> Instagram에 업로드했을 수도 있습니다.{' '}
              <span className={styles.wantLink}>더 알아보기</span>
            </p>

            <button type="button" className={styles.button}>가입</button>

          </form>
        </div>

        <div className={styles.loginBox}>
          <p className={styles.loginText}>
            계정이 있으신가요?{' '}
            <Link href="/mypage" className={styles.loginLink}>로그인</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
