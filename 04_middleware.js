/*************** global init **************/
const port = 3000;
const express = require('express');
const app = express();


const mw4 = require('./middlewares/mw4');
const mw5 = require('./middlewares/mw5');

/************** middleware ***************/
// app.use()  //get, post, put, delete 모두 받음
// app.get()  //get만...
// app.post()
// app.put()
// app.delete()
//middleware VS router
//middleware ==> app.use((req, res, next) => {   })  ==>  프로그램 로딩상 무조건 진행한다.
//router ==> app.use('주소부', (req, res, next) => {   })  ==> 해당 주소만 나오면 진행한다.

/*
app.use((req, res, next) => {
  req.myName = 'James';
  next();
});

app.get('/', (req, res, next) => {
  //const {headers, baseUrl, hostname, ip, origonalUrl, path, subdomains} = req;
  //res.json({headers, baseUrl, hostname, ip, origonalUrl, path, subdomains});

  const { headers, myName } = req;
  res.json({ headers, myName });
});
*/

///////미들웨어 작성방식//////

//1번 방식 - 직접 CallBack 등록
app.use((req, res, next) => {
  req.mw1 = 'MW1';
  next();
});

//2번 방식 - 함수 선언
const mw2 = (req, res, next) => {
  req.mw2 = 'MW2';
  next();
};
app.use(mw2);

//3번 방식 - 클로저 패턴
const mw3 = (param) => {
  return (req, res, next) => {
    req.mw3 = "MW3 - " + param;
    next();
  }
}
app.use(mw3(`James`));


//외부와 연동한 미들웨어 모듈(./middlewares/mw4, ./middlewares/mw5)
app.use(mw4);
app.use(mw5('외부에 위치한 미들웨어 가져오기'));


app.get('/', (req, res, next) => {
  //const {headers, baseUrl, hostname, ip, origonalUrl, path, subdomains} = req;
  //res.json({headers, baseUrl, hostname, ip, origonalUrl, path, subdomains});

  const { headers, mw1, mw2, mw3, mw4, mw5 } = req;
  res.json({ headers, mw1, mw2, mw3, mw4, mw5 });
});


//만약 A라는 라우터가 아닌, 특정의 B 라는 라우터에서만 미들웨어가 진행되어야 한다면
app.get('/test', (req, res, next) => {
  req.mw6 = '특정 라우터에서만 작동하는 미들웨어 MW6';
  next();
}, (req, res, next) => {
  req.mw7 = '특정 라우터에서만 작동하는 미들웨어 MW7';
  next();
}, (req, res, next) => {
  req.mw8 = '특정 라우터에서만 작동하는 미들웨어 MW8';
  next();
}, (req, res, next) => {
  const { headers, mw1, mw2, mw3, mw4, mw5, mw6, mw7, mw8 } = req;
  res.json({ headers, mw1, mw2, mw3, mw4, mw5, mw6, mw7, mw8 });
});



/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) });