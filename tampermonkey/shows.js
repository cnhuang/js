
const SHOW = (url, done = 0, name = undefined) => ({url, name, done});

// Data
tvData = [
  SHOW('http://www.tw116.com/occident/fuermosijibenyanyifadiwuji/', 3, 'Elementary V'),
  SHOW('http://www.tw116.com/occident/zuieheimingdandisiji/', 8, '罪恶黑名单'),
  SHOW('http://www.tw116.com/occident/tianxiedisanji/', 1, 'scopin III'),
  SHOW('http://www.tw116.com/occident/shendunjutegongdisiji/', 6, 'shield IV'),
  SHOW('http://www.tw116.com/occident/mangdiandierji/', 8, 'Blind spot II'),
  SHOW('http://www.tw116.com/occident/jiexikaqiongsidiyiji/', 0, 'Jones'),
  {id: "59887", done: 18, name: '美国恐怖故事：畸形秀'},
  {id: "67505", name: "Luke Cage", done: 1},
  SHOW('http://www.tw116.com/occident/shikongshouweikuashikongzhuibudiyiji/', 5, '時空守衛 Timeless'),
  {id: "63524", name: "美国恐怖故事第五季"},
  SHOW('http://www.tw116.com/occident/tushuguanyuandierji/', 10, '圖書館員第二季'),
  {id: "64759", done: 6},
  {id: "64702", done: 6, name: "Agent carter"},
  {id: "63761", done: 10},
  {id: "65662", name: "12Monkey II", done: 13},
  {id: "65885", name: "Game of Throne", done: 10},
  {id: "40555", name: "black mirror S1"},
  {id: "50254", name: "black mirror S2"},
  {id: "67826", name: "black mirror S3"},
  {id: "67072", name: "誰是兇手", done: 0},
  {id: "66715", name: "怪奇物語", done: 0},
  {id: "67580", name: "Flash III", done: 0}, 
  {id: "67445", name: "Hells Kitchen XVI", done: 0},
  {id: "62207", name: "Mr. Robot", done: 0},
  {id: "67552", name: "West World HBO", done: 0},
  {id: "59724", name: "Get away with murder I/III"}
];

movieData = [
  SHOW('http://www.tw116.com/action/bianfuxiadazhanchaorenzhengyiliming/'),
  SHOW('http://www.tw116.com/drama/qihuansenlin/'),
  SHOW('http://www.tw116.com/fiction/Xzhanjingtianqi/'),
  SHOW('http://www.tw116.com/fiction/ailisimengyouxianjing2/'),
  SHOW('http://www.tw116.com/drama/jinqianguaishou/'),
  SHOW('http://www.tw116.com/horror/zhaohun2/'),
  SHOW('http://www.tw116.com/action/lieshendongrizhizhan/'),
  SHOW('http://www.tw116.com/fiction/chuimengjuren/'),
  SHOW('http://www.tw116.com/action/taishanguilaixianzhanconglin/'),
  SHOW('http://www.tw116.com/action/dieyingzhongzhong5/'),
  SHOW('http://www.tw116.com/comedy/zishaxiaodui/'),
  SHOW('http://www.tw116.com/anime/aichongdajimi/'),
  SHOW('http://www.tw116.com/action/fushanxingshisulieche/'),
  SHOW('http://www.tw116.com/action/lueduozhe/'),
  SHOW('http://www.tw116.com/horror/annahuatedeliqimingyun/'),
  SHOW('http://www.tw116.com/horror/shiti/'),
];
