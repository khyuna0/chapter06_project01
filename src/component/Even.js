import { useEffect } from "react";

function Even() {
  useEffect(() => { // 컴포넌트가 언마운트 되는 시점에서 실행되는 함수
    return () => {
        console.log("Even 컴포넌트 언마운트 되었습니다.");
    }; // useEffect 함수에서 return 에 콜백함수 -> 클린업 함수가 됨
    // -> 클린업 함수의 실행 시점 = 다시 useEffect 함수가 실행되기 바로 직전
    // -> 이전 useEffect 함수를 정리해준다고 해서 클린업 함수
    
    // 클린업 함수는 언마운트 시점에서 호출
  },[]);     
  return <div>현재 카운트는 짝수입니다</div>;
}
export default Even;


