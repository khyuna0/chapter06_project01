import './App.css';
import Controller from './component/Controller';
import Even from './component/Even';
import Viewer from './component/Viewer';
import { useState, useEffect, useRef, use } from "react"; 

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleSetCount (value) {
    setCount(count + value);
  }

  function handleSetText(e) {
    setText(e.target.value);
  }

  // useEffect -> 렌더링 후에 발생하는 부작용(side effect)를 처리하는 함수
  // 렌더링 후에 무조건 실행되는 함수임  - 초기화 포함

  // 최초 마운트 시 useEffect 발동 X 코드
  const didMountRef = useRef(false); // useRef -> 렌더링에 영향 받지 않음
  useEffect (() => {
    if(!didMountRef.current) { // 업데이트 제어
      didMountRef.current = true;
      return;
    } else {
       console.log("컴포넌트 업데이트!!");
    }
  }); // useEffect의 두번째 인수 -> 의존성 배열 (Dependency Array : deps)
  // 의존성 배열을 생략하면 랜더링 발생 시 무조건 실행됨
  // 여러개 값 검사 가능

  // 최초 마운트 시 한번만 실행되는 코드 - 마운트 제어
  useEffect (()=> { 
      console.log("컴포넌트 마운트 됨")
  }, []); // 의존성 배열을 빈 배열로 입력하면 -> 마운트 시점에서만 콜백함수를 실행함

  // 클린업
   useEffect (()=> { 
    const intervalID = setInterval(()=>{
      console.log("깜빡");
    },1000);
    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    }
  }); // 의존성 배열 전달 없음 -> 렌더링 될때 마다 실행

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type='text' value={text} onChange={handleSetText}></input>
      </section>
      <section><Viewer count={count}/>{count % 2 === 0 && <Even/>}</section>
      <section><Controller handleSetCount={handleSetCount}/></section>
    </div>
  );
}

export default App;
