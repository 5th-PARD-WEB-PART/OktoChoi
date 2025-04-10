import {useEffect, useState} from "react";

export default function HookExample1(){
    const [current, setCurrent] = useState<number>(4);
    const [bgColor, setBgColor] = useState<string>("bg-blue-400");

    
    const update = () => {
        setCurrent((prev)=> prev + 2);
    };

    useEffect(() => {
        if(current!==0 && current % 10 === 0){
            console.log(`${current}을를 넘었습니다.`);
        }
    },[current]);

    useEffect(() => {
        if(current >=30){
            setBgColor("bg-red-400");
        }else if(current >= 20){
            setBgColor("bg-green-400");
        }else if(current >= 20){
            setBgColor("bg-yellow-400");
        }else{
            setBgColor("bg-blue-400");
        }}, [current]);

    return(
        <div>
            <div className={`${bgColor} text-6xl font-extrablod`}>
                현재 파드 기수는? {current}
            </div>
            <button
              className="border-2 dark:border-white border-black pr-2 pl-2 mt-2"
              onClick={update}
            >
            업데이트
            </button>
        </div>
    );
}