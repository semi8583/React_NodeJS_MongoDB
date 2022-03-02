/* eslint-disable*/ //warning 제거
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//데이터 바인딩 쉽게 함
function App() {
  //부모 컴포넌트

  var [a, b] = [10, 10000];
  let [c, d] = useState("여자 코트 추천");
  // let [글제목, 글제목변경] = useState('여자 코트 추천');
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  //                                  글제목[0]             글제목[1]
  // 다수의 기능변경할려면 onClick={글제목변경(['여자 코트 추천', '강남 우동 맛집'])} 이런식으로 해야함
  // or
  // function 제목바꾸기(){
  // var new제목 = [...글제목];  //딥카피
  // new제목[0] = '여자';
  // 글제목변경(new제목);
  //}
  // state: 변수 대신 쓰는 데이터 저장공간
  // 그냥 변수는 변경되어도 자동 재렌더링이 안되는데 state는 자동 재렌더링이 됨
  let [따봉, 따봉변경] = useState(0);
  let [따봉1, 따봉변경1] = useState([0, 0, 0]);
  let [글선택, 글선택변경] = useState(0);

  //따봉변경(대체할 데이터)
  let posts = "강남 고기 맛집11";

  let [modal, modal변경] = useState(false);
  var 저장버튼 = "";
  let [저장, 저장선택] = useState("");

  var array = [2, 3, 4];
  var newArray = array.map(function (a) {
    return a * 2;
  });

  function 함수() {
    return 100;
  }

  function 따봉변경하자(num) {
    var new따봉1 = [...따봉1];
    if (num == 0) {
      console.log(0);
      new따봉1[0] = 따봉1[0] + 1;
      따봉변경1(new따봉1);
    } else if (num == 1) {
      console.log(1);
      new따봉1[1] = 따봉1[1] + 1;
      따봉변경1(new따봉1);
    } else if (num == 2) {
      console.log(2);
      new따봉1[2] = 따봉1[2] + 1;
      따봉변경1(new따봉1);
    }
  }

  var i = 0;
  return (
    <div calssName="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {" "}
          {글제목[2]} <span onClick={1}>👍</span> 0{" "}
        </h3>
        <h3>
          {" "}
          {posts}{" "}
          <span
            onClick={() => {
              console.log(1);
            }}
          >
            👍
          </span>{" "}
          0{" "}
        </h3>
        <h3>
          {" "}
          {posts}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h3>
        {/*  onClick={클릭될때 실행할 함수}*/}
        {/*  onClick={()=>{실행할 내용}}*/}
        <p>1월 17일 발행</p>

        <hr />
      </div>
      <div className="list">
        <h3>
          {" "}
          <span
            onClick={function () {
              modal변경(true);
            }}
          >
            {" "}
            {글제목[0]}{" "}
          </span>{" "}
        </h3>
        <h3> {c} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {b} </h3>
        <h3> {글제목[1]} </h3>
        <p>3월 17일 발행</p>
        <hr />
      </div>
      {글제목.map(function (글) {
        return (
          <div className="list">
            <h3>
              {" "}
              <span
                onClick={() => {
                  modal변경(true);
                  글선택변경(글제목.indexOf(글));
                }}
              >
                {" "}
                {글}{" "}
              </span>{" "}
              <span
                onClick={function () {
                  따봉변경하자(글제목.indexOf(글));
                }}
              >
                {" "}
                👍 {따봉1[글제목.indexOf(글)]}{" "}
              </span>{" "}
            </h3>
            <p> 10월 10일 발행</p>
            <hr />
          </div>
        );
      })}

      <button>
        <span
          onClick={() => {
            글제목변경(글제목.sort());
          }}
        >
          버튼
        </span>
      </button>
      <button>
        <span
          onClick={() => {
            console.log(글제목);
          }}
        ></span>
      </button>
      {/* <button><span onClick={()=>{d(c='츄츄천')}}>버튼</span></button> 남자코트-> 츄츄천 변경
      함수를 onClick으로 넣을땐 소괄호를 넣지 않는다 */}
      {/* <Modal></Modal> */}
      {저장}
      <div className="publish">
        <input
          onChange={(e) => {
            저장버튼 = e.target.value;
          }}
        ></input>
        <button
          onClick={() => {
            저장선택(저장버튼);
            글제목.push(저장버튼);
            // var arraycopy = [...글제목]
            // arraycopy.unshift(저장버튼)
            // 글제목변경(arraycopy)
          }}
        >
          저장
        </button>
      </div>
      <button>
        <span
          onClick={() => {
            modal변경(!modal);
          }}
        >
          열고 닫기
        </span>
      </button>
      {modal == true ? <Modal 작명={글제목} 누른제목={글선택} /> : null}
    </div>
    // {
    //   글제목.map(function(){
    //     return <div>안녕</div>
    //   })
    // }
  );
}

// component 만드는법 1. 이름은 대문자 2. return 소괄호안에 있는건 태그 하나로 묶어야함
function Modal(props) {
  //자식 컴포넌트
  return (
    // 태크 하나 안에서 여러개 태그는 가능
    <div className="modal">
      <h2>제목 :{props.작명[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    // <div>
    // </div>
    // </>
  );
}

// return (//소괄호 안에 html처럼 생겼지만 jsx
//   //<img src="refef.png" />도 가능
//   <div className="App">
//     <div className="black-nav">
//       <div>개발 blog</div>
//       <div className={posts}> 개발 Blog </div>
//       <div style={ {color: 'blue', fontSize:'30px'}}>개발 Blog</div>
//     </div>
//     <img src={logo} />
//     <h4>{posts}</h4>
//     <h4>{함수()}</h4>
//   </div>
// );

export default App;
