/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()
const numeral = require('numeral');
const _ = require('lodash');

const coffee = [
  {name: '아메리카노', price: 2500},
  {name: '까페라떼', price: 3500},
  {name: '바닐라라떼', price: 3800},
  {name: '카라멜 마끼아또', price: 4500},
]
const food = [
  {name: '피자', price: 15000},
  {name: '올리브 파스타', price: 12000},
  {name: '리조또', price: 10000},
  {name: '돈가스', price: 9000},
]
const desert = [
  {name: '치즈케잌', price: 9000},
  {name: '잉글리쉬머핀', price: 4000},
  {name: '크로와상', price: 3500},
  {name: '마카롱', price: 3000},
]

/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** router init **************/
app.use('/', express.static('./public'))
app.get('/coffee', (req, res, next) => {
  const menus = [
    {name: '아메리카노', price: 2500},
    {name: '까페라떼', price: 3500},
    {name: '바닐라라떼', price: 3800},
    {name: '카라멜 마끼아또', price: 4500},
  ]

  // res.status(200).render(view파일, {전달할 파일});
  /* #1. 던져주면서 처리하기 */
  // res.status(200).render('menu', {menus, numeral});  //numeral 스크립트를 함께 보내어 구문에서 연동하도록 구성한다. 

  /* #2. javascript에서 미리 처리하고 던져주기 */
  const sendMenus = _.cloneDeep(menus).map(v => {
    v.price = numeral(v.price).format('0,0');
    return v;
  });
  
  res.status(200).render('menu', {menus : sendMenus});
})


//////////////////////////////////

// app.get('/menu/coffee', (req, res, next) => {
//   res.status(200).render('coffee', {coffee, numeral});
// });
// app.get('/menu/food', (req, res, next) => {
//   res.status(200).render('food', {food, numeral});
// });
// app.get('/menu/desert', (req, res, next) => {
//   res.status(200).render('desert', {desert, numeral});
// });


app.get('/menu/:name', (req, res, next) => {
  const name = req.params.name;
  res.status(200).render(name, {menu: eval(name), numeral});
});


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })