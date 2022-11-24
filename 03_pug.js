/*************** global init **************/
const port = 3000;
const express = require('express');
const app = express();
const numeral = require('numeral');
const _ = require('lodash');

/************** view engine ***************/
app.set('view engine', 'pug');
app.set('views', './views2');
app.locals.pretty = true;  //소스 보기 선택시 한줄로 표현되는 것이 아닌 보기 좋게 정렬되어 보여준다.

/*************** middleware ***************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*************** router init **************/
app.use('/', express.static('./public'));

app.get('/test', (req, res, next) => {
  const title = 'Pug를 소개합니다.';
  const lists = [
    {title: 'CEO', src: 'team_01.jpeg'},
    {title: 'CAO', src: 'team_02.jpeg'},
    {title: 'CTO', src: 'team_03.jpeg'}
  ];
  res.status(200).render('test', {title, lists});
});

app.get('/test2', (req, res, next) => {
  res.status(200).render('test2');
});

app.get('/about', (req, res, next) => {
  const title = 'About Me';
  const file = 'about';
  const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia officia sit suscipit, sequi culpa optio nemo debitis soluta? Alias delectus eius deleniti error placeat, debitis earum id culpa voluptatum?';
res.render('site/about', {title, file, content});
});

app.get('/pf', (req, res, next) => {
  const title = 'Portfolio';
  const file = 'pf';
  const lists = [
    {title: 'PF_01', src: 'cat_01.jpeg'},
    {title: 'PF_02', src: 'cat_02.jpeg'},
    {title: 'PF_03', src: 'cat_03.jpeg'},
    {title: 'PF_04', src: 'cat_04.jpeg'},
  ];
res.render('site/pf', {title, file, lists});
});

app.get('/team', (req, res, next) => {
  const title = 'Team Information';
  const subTitle = '환상의 팀원을 소개합니다.';
  const file = 'team';
  const lists = [
    {title: 'CEO', src: 'team_01.jpeg'},
    {title: 'CAO', src: 'team_02.jpeg'},
    {title: 'CTO', src: 'team_03.jpeg'}
  ];
  res.render('site/team', {title, subTitle, file, lists});
});




/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) });