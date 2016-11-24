
const SHOW = (id, name = undefined, done = 0) => ({id, name, done});
const SHOW2 = (url, done = 0, name = undefined) => ({url, name, done});

// Data
tvData = [
  {id: "67551", done: 1, name: "Elementary V"},
  {id: "67571", done: 1, name: "scopin III"},
  {id: "67402", name: "Black list IV", done: 8},
  {id: "67358", done: 6, name: "shield IV"},
  {id: "67286", name: "Blind spot II", done: 8},
  {id: "59887", done: 18, name: '美国恐怖故事：畸形秀'},
  {id: "67505", name: "Luke Cage", done: 1},
  {id: "67567", name: "時空守衛 Timeless", done: 5},
  {id: "63524", name: "美国恐怖故事第五季"},
  {id: "63902"},
  {id: "63716"},
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
  SHOW2('http://www.tw116.com/action/bianfuxiadazhanchaorenzhengyiliming/'),
  SHOW2('http://www.tw116.com/drama/qihuansenlin/'),
  SHOW2('http://www.tw116.com/fiction/Xzhanjingtianqi/'),
  SHOW2('http://www.tw116.com/fiction/ailisimengyouxianjing2/'),
  SHOW2('http://www.tw116.com/drama/jinqianguaishou/'),
  SHOW2('http://www.tw116.com/horror/zhaohun2/'),
  SHOW2('http://www.tw116.com/action/lieshendongrizhizhan/'),
  SHOW2('http://www.tw116.com/fiction/chuimengjuren/'),
  SHOW2('http://www.tw116.com/action/taishanguilaixianzhanconglin/'),
  SHOW2('http://www.tw116.com/action/dieyingzhongzhong5/'),
  SHOW2('http://www.tw116.com/comedy/zishaxiaodui/'),
  SHOW2('http://www.tw116.com/anime/aichongdajimi/'),
  SHOW2('http://www.tw116.com/action/fushanxingshisulieche/'),
  SHOW2('http://www.tw116.com/action/lueduozhe/'),
  SHOW2('http://www.tw116.com/horror/annahuatedeliqimingyun/'),
  SHOW2('http://www.tw116.com/horror/shiti/'),
];
