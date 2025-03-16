import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Quiz() {

    const questions = [
    { question: "1:최옥토 2:최억토 3:최온토 4:정옥토", answer: "1" },
    { question: "1:20 2:21 3:22 4:24", answer: "2" },
    { question: "1:전산전자 2:전산심화 3:전자심화 4:상담심리", answer: "2" },
    { question: "1:ENFP 2:ENFJ 3:ESTP 4:ISTP", answer: "2" },
  ];
  // useState(초기값)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  // 버튼 클릭 시 실행되는 함수 
  // 화살표 함수(=>)를 사용하면 더 간단한 코드 작성 가능
  // 타입스크립트 값 정해주기
  const checkAnswer = (userAnswer: string) => {
    if (userAnswer === questions[currentIndex].answer) {
      setResult("정답입니다! ✅");
      setScore(prevScore => prevScore + 1); 
    } else {
      setResult("틀렸습니다! ❌");
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setResult(null);
      } else {
        setResult(`퀴즈 종료 🎉 총 ${score + 1}개 맞췄어요!`);
      }
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>퀴즈</title>
      </Head>
      <main>
        <h1 className="quiz_title">퀴 즈</h1>
        
        <div className="selection">
          <h2>{questions[currentIndex].question}</h2>
          <div className="selectnumber">
            <button onClick={() => checkAnswer("1")}>1</button>
            <button onClick={() => checkAnswer("2")}>2</button>
            <button onClick={() => checkAnswer("3")}>3</button>
            <button onClick={() => checkAnswer("4")}>4</button>
          </div>
          {result && <h3>{result}</h3>}
        </div>

        <div className="bottom">
          <Link href="https://www.instagram.com/oktorot0/">
            <img className="bottom_img" src="instargram.jpg"/>
          </Link>
          <Link href="https://github.com/oktochoi/">
            <img className="bottom_img" src="github.png"/>
          </Link>
          <Link href="/telephone">
              <img className="bottom_img" src="phonenumber.webp"/>
          </Link>
        </div>

        <Link href="/">
            <h1 id="quiz-main"> 메인페이지로 </h1>
        </Link>

      </main>
    </>
  );
}
