const firebaseConfig = {
    apiKey: "AIzaSyCthoDuqBZWRSCrI_xSb2D867GqoyLpbp0",
    authDomain: "project-hd-aceeb.firebaseapp.com",
    databaseURL: "https://project-hd-aceeb-default-rtdb.firebaseio.com",
    projectId: "project-hd-aceeb",
    storageBucket: "project-hd-aceeb.appspot.com",
    messagingSenderId: "1065248015051",
    appId: "1:1065248015051:web:54ae70926505a73edc514e",
    measurementId: "G-8BQ6MZ5YZC"
};

// 파이어베이스 앱 초기화
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {

    database.ref("users/" + userId).set({
        email: email,
        nick: nick
    });
}

// 데이터 읽기 실습
// 1. 전체 조회된 결과 출력
//  - 테이블 태그 or 목록 태그 활용해서 출력

// 2. 특정 사용자 조회
//  - id값 입력받은 후 해당 사용자의 email, nick 출력
function readUserData(){
    database.ref("users/").on('value', (snapshot)=>{
        //실시간 데이터베이스 값 접근
        // console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data);

        // console.log(Object.keys(data));
        console.log(data["gjseh115"]);
        console.log(data[keys[0]]);

        const result = document.getElementById("result")

        


        // 데이터베이스 웹 페이지 출력
        // result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`;


    })
};


//////////////////////////////////////////////////////////////

const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", ()=>{
    readUserData();
});

const id = document.frm.id.value;
const email = document.frm.email.value;
const nick = document.frm.nick.value;
const reg = document.frm.reg

reg.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.frm.id.value;
    const email = document.frm.email.value;
    const nick = document.frm.nick.value;
    const reg = document.frm.reg
    console.log(id, email, nick)

    writeUserData(id, email, nick);
})