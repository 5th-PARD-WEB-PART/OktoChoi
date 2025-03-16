import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("???");
  const [major, setMajor] = useState("???");
  const [age, setAge] = useState("???");
  const [hobby, setHobby] = useState("???");
  const [mbti, setMbti] = useState("???");

  return(
    <>
      <Head>
        <title>자기소개</title>
      </Head>
      <main>
      <img className="main_img" src="okto.jpg"/>
        <div>
        <table className="ttalbe">
            <thead>
              <tr>
                <th>이름</th>
                <th>---</th>
                <th onClick={() => setName(prompt("이름을 입력하세요") || name)}>
                  {name}
                </th>              
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>전공</td>
                <td>---</td>
                <td onClick={() => setMajor(prompt("전공을 입력하세요") || major)}>
                  {major}
                </td>
              </tr>
              <tr>
                <td>나이</td>
                <td>---</td>
                <td onClick={() => setAge(prompt("나이를 입력하세요") || age)}>
                  {age}
                </td>
              </tr>
              <tr>
                <td>취미</td>
                <td>---</td>
                <td onClick={() => setHobby(prompt("취미를 입력하세요") || hobby)}>
                  {hobby}
                </td>
              </tr>
              <tr>
                <td>MBTI</td>
                <td>---</td>
                <td onClick={() => setMbti(prompt("MBTI를 입력하세요") || mbti)}>
                  {mbti}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

{/* bottom 라인 */}
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

{/* bottom 라인 */}
        <div className="quiz-text">
            <Link href="/quiz">
                <h1> 퀴즈로 넘어가기</h1>
            </Link>
        </div>
      </main>
    </>
  );
}
