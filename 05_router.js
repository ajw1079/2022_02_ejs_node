/**
 * 언어(language / javascript, java, c) - 문법
 * 라이브러리(jquery, lodash) - 유틸리티 모음
 * 프레임워크(express, react, vue, spring) - 이미 구성된 상태에서 내부의 기능을 익히면 된다.
 * 
 * 
 * 
 * 1. router는 사이트가 커짐에 따라 분리해야 한다.
 * 2. 예) 쇼핑몰
 * 3. 상품 리스트
 * 4. 장바구니 / 주문 / 결제
 * 5. 회원가입 / 로그인 / 로그아웃 / ...
 * 6. 마이페이지
 * 7. 커뮤니티(댓글, 답글, ...)
 * 
*/
/*************** global init **************/

require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const app = express();

const createError = require('http-errors');

/************** view engine ***************/
app.set('view engine', 'ejs');
app.set('views', './views');
app.locals.pretty = true;  //소스 보기 선택시 한줄로 표현되는 것이 아닌 보기 좋게 정렬되어 보여준다.


/*************** middleware ***************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*************** static init **************/
app.use('/', express.static('./public'));


/*************** router init **************/
const shopRouter = require('./routes/shop');
const memberRouter = require('./routes/member');

app.use('/shop', shopRouter);
app.use('/member', memberRouter);


/*************** error init (모든 것의 조건에 걸리지 않다면)**************/
const notFoundRouter = require('./routes/error/404');
const errorRouter = require('./routes/error/500');
app.use(notFoundRouter);
app.use(errorRouter);


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) });