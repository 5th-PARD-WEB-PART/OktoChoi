import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  //use array, string type(1)
  const [name, setName] = useState("???");
  const [major, setMajor] = useState("???");
  const [age, setAge] = useState("???");
  const [hobby, setHobby] = useState("???");
  const [mbti, setMbti] = useState("???");

  // use number type (2)
  const nameOrder: number = 1;
  const majorOrder: number = 2;
  const ageOrder: number = 3;
  const hobbyOrder: number = 4;
  const mbtiOrder: number = 5;

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
            {nameOrder}. 이름: <span className="info-section-item">{name}</span>
          </h2>
          <h2 className="info-item" onClick={() => setMajor(prompt("전공을 입력하세요") || major)}>
            {majorOrder}. 전공: <span className="info-section-item">{major}</span>
          </h2>
          <h2 className="info-item" onClick={() => setAge(prompt("나이를 입력하세요") || age)}>
            {ageOrder}. 나이: <span className="info-section-item">{age}</span>
          </h2>
          <h2 className="info-item" onClick={() => setHobby(prompt("취미를 입력하세요") || hobby)}>
            {hobbyOrder}. 취미: <span className="info-section-item">{hobby}</span>
          </h2>
          <h2 className="info-item" onClick={() => setMbti(prompt("MBTI를 입력하세요") || mbti)}>
            {mbtiOrder}. MBTI:  <span className="info-section-item">{mbti}</span>
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