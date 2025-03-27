import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {


  //use string type
  const [name, setName] = useState("???");
  const [major, setMajor] = useState("???");
  const [age, setAge] = useState("???");
  const [hobby, setHobby] = useState("???");
  const [mbti, setMbti] = useState("???");

  // use array type 
  const num:number[]=[1,2,3,4,5,6];

  //use tuple
  const StudentID:[number,string]=[22400742,'22400742'];

  // use number type
  const myage:number = 21;

//onClick 함수 사용, 화살표 함수 사용
  return (
    <>
      <Head>
        <title>자기소개</title>
      </Head>
      <main>
        <img className="main_img" src="okto.jpg" />

        <div className="info-section">
          <h2 className="info-item" onClick={() => setName(prompt("이름을 입력하세요") || name)}>
            {num[0]}. 이름: <span className="info-section-item">{name}</span>
          </h2>
          <h2 className="info-item" onClick={() => setMajor(prompt("전공을 입력하세요") || major)}>
            {num[1]}. 전공: <span className="info-section-item">{major}</span>
          </h2>
          <h2 className="info-item">
            {num[2]}. 나이: <span className="info-section-item">{myage}</span>
          </h2>
          <h2 className="info-item" onClick={() => setHobby(prompt("취미를 입력하세요") || hobby)}>
            {num[3]}. 취미: <span className="info-section-item">{hobby}</span>
          </h2>
          <h2 className="info-item" onClick={() => setMbti(prompt("MBTI를 입력하세요") || mbti)}>
            {num[4]}. MBTI:  <span className="info-section-item">{mbti}</span>
          </h2>
          <h2 className="info-item">
            {num[5]}. StudentID:  <span className="info-section-item">{StudentID[1]}</span>
          </h2>
        </div>

        {/* 바텀 영역 */}
        <div className="bottom">
          <Link href="https://www.instagram.com/oktorot0/">
            <img className="bottom_img" src="instargram.jpg" />
          </Link>
          <Link href="https://github.com/oktochoi/">
            <img className="bottom_img" src="github.png" />
          </Link>
          <Link href="/telephone">
            <img className="bottom_img" src="phonenumber.webp" />
          </Link>
        </div>
      {/* bottom 라인 */}
          <div className="quiz-text">
            <Link href="/quiz">
                <h1> 퀴즈로 넘어가기</h1>
            </Link>
        </div>

        <Link href="/profile-detail">
          <button className="bottom_button">프로필 상세 보기</button>
        </Link>

      </main>
    </>
  );
}