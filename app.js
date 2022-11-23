/*************** global init **************/
const port = 3000;
const express = require('express');
const app = express();
const numeral = require('numeral');
const _ = require('lodash');

/************** view engine ***************/
app.set('view engine', 'ejs');
app.set('views', './views');


/*************** middleware ***************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*************** router init **************/
app.use('/', express.static('./public'));
app.use('/resources', express.static('./assets'));  //정적 파일을 가져올 app.use()를 사용  //실제 경로가 아닌 곳으로 돌려 놓는다. 해킹을 방지하기 위해 사용
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