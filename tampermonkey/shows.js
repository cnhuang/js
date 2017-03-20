
const SHOW = (url, done = 0, name = undefined) => ({url, name, done});

// Data
tvData = [
  SHOW('http://www.tw116.com/occident/tiequandiyiji/', 'iron feast'),
  SHOW('http://www.tw116.com/occident/fuermosijibenyanyifadiwuji/', 14, 'Elementary V'),
  SHOW('http://www.tw116.com/occident/xinfuermosishentanxialuokedisiji/', 3, 'English Homels'),
  SHOW('http://www.tw116.com/occident/zuieheimingdandisiji/', 15, '罪恶黑名单'),
  SHOW('http://www.tw116.com/occident/tianxiedisanji/', 14, 'scopin III'), 
  SHOW('http://www.tw116.com/occident/shendunjutegongdisiji/', 15, 'shield IV'),
  SHOW('http://www.tw116.com/occident/mangdiandierji/', 9, 'Blind spot II'),
  SHOW('http://www.tw116.com/occident/jiexikaqiongsidiyiji/', 0, 'Jones'),
  SHOW('http://www.tw116.com/occident/lukekaiqidiyiji/', 8, 'Luke Cage'),
  SHOW('http://www.tw116.com/occident/shikongshouweikuashikongzhuibudiyiji/', 14, '時空守衛 Timeless'),
  SHOW('http://www.tw116.com/occident/tushuguanliyuandisanji/', 10, '圖書館員第3季'),
  SHOW('http://www.tw116.com/occident/xibushijiediyiji/', 10, 'West World'),
  SHOW('http://www.tw116.com/occident/tegongkatedierji/', 10, 'Agent carter'),
  SHOW('http://www.tw116.com/occident/Xdangandishiji/', 6, 'X File'),
  SHOW('http://www.tw116.com/occident/shierhouzidierji/', 13, '12 Monkeys'),
  SHOW('http://www.tw116.com/occident/bingyuhuozhigequanlideyouxidiliuji/' , 10, 'Game of Throne 6'),
  SHOW('http://www.tw116.com/occident/guaiqiwuyudiyiji/', 8, 'Stanger things I'),
  SHOW('http://www.tw116.com/occident/lvxingzhechuanyuezhediyiji/', 12, '旅行者/穿越者第一季'),
  SHOW('http://www.tw116.com/mainland/guichuidengzhijingjuegucheng/', 0, ''),
  //{id: "40555", name: "black mirror S1"},
  //{id: "50254", name: "black mirror S2"},
  SHOW('http://www.tw116.com/occident/heijingdisanji/', 0, 'black mirror S3'),
  SHOW('http://www.tw116.com/occident/shuishixiongshoudiyijiwomenzhizhongdiyiji/', 0, '誰是兇手'),
  SHOW('http://www.tw116.com/occident/shandianxiadiyiji/', 0 ,'Flash III'), 
  SHOW('http://www.tw116.com/occident/heikejuntuandiyiji/', 0, 'Mr. Robot'),
  SHOW('http://www.tw116.com/occident/xiaoyaofawaidiyiji/', 0, 'Get away with murder'),
  SHOW('http://www.tw116.com/occident/meiguokongbugushijixingxiumeiguoguaitandisiji/', 18, '美国恐怖故事：畸形秀'),
  SHOW('http://www.tw116.com/occident/meiguokongbugushidiwuji/', 0, '美国恐怖故事第五季'),
  SHOW('http://www.tw116.com/occident/baifenzhisandiyiji/', 0, '3%'),
];

movieData = [
  //SHOW('http://www.tw116.com/action/bianfuxiadazhanchaorenzhengyiliming/', 1),
  SHOW('http://www.tw116.com/drama/qihuansenlin/'),
  SHOW('http://www.tw116.com/fiction/Xzhanjingtianqi/'),
  SHOW('http://www.tw116.com/fiction/ailisimengyouxianjing2/'),
  SHOW('http://www.tw116.com/drama/jinqianguaishou/'),
  //SHOW('http://www.tw116.com/horror/zhaohun2/', 1),
  SHOW('http://www.tw116.com/action/lieshendongrizhizhan/'),
  SHOW('http://www.tw116.com/fiction/chuimengjuren/'),
  SHOW('http://www.tw116.com/action/taishanguilaixianzhanconglin/'),
  //SHOW('http://www.tw116.com/action/dieyingzhongzhong5/', 1),
  //SHOW('http://www.tw116.com/comedy/zishaxiaodui/', 1),
  SHOW('http://www.tw116.com/anime/aichongdajimi/'),
  //SHOW('http://www.tw116.com/action/fushanxingshisulieche/', 1),
  SHOW('http://www.tw116.com/action/lueduozhe/'),
  //SHOW('http://www.tw116.com/horror/annahuatedeliqimingyun/', 1),
  SHOW('http://www.tw116.com/horror/shiti/'),
  //SHOW('http://www.tw116.com/fiction/ID4xingjizhongsheng/', 1),
  SHOW('http://www.tw116.com/action/changchengwanlichangcheng/'),
  SHOW('http://www.tw116.com/action/youming/'),
  SHOW('http://www.tw116.com/action/jinganglang2/'),
  SHOW('http://www.tw116.com/action/mingxuanyixian/'),
  SHOW('http://www.tw116.com/action/anshayouxi/'),
  SHOW('http://www.tw116.com/action/morihuixuan/'),
  SHOW('http://www.tw116.com/action/yindiannabolisihaoyongzhewuju/'),
  SHOW('http://www.tw116.com/fiction/chaonengansidui/'),
  SHOW('http://www.tw116.com/fiction/renleiqingchujihua3/'),
  SHOW('http://www.tw116.com/horror/wumingnvshi/'),
  SHOW('http://www.tw116.com/horror/dandingmimadiyu/'),
  SHOW('http://www.tw116.com/horror/shatanjueshadao/'),
  SHOW('http://www.tw116.com/horror/huashenguimotong/'),
  SHOW('http://www.tw116.com/horror/fengchecanan/'),
  SHOW('http://www.tw116.com/fiction/xingqiudazhanwaichuanxiadaoyihao/','','Rogue One: A Star Wars Story'),
  SHOW('http://www.tw116.com/anime/bingxueqiyuan/'),
  SHOW('http://www.tw116.com/anime/conglindafangong/'),
  SHOW('http://www.tw116.com/action/conglindafangong2/'),
  SHOW('http://www.tw116.com/action/conglindafangong3/'),
  SHOW('http://www.tw116.com/action/conglindafangong4/'),
  SHOW('http://www.tw116.com/anime/fengkuangdongwucheng/'),
  //SHOW('http://www.tw116.com/drama/shenqidongwuzainali/', 1),
  SHOW('http://www.tw116.com/comedy/ailezhicheng/'),
  SHOW('http://www.tw116.com/anime/saichezongdongyuan2fandouchewang2qichezongdongyuan2feichezhengchuan2/'),
  SHOW('http://www.tw116.com/anime/qichezongdongyuansaichezongdongyuan/'),
  //SHOW('http://www.tw116.com/drama/peixiaojiedeqihuanchengbaoguaiwunvhai/', '1'),
  SHOW('http://www.tw116.com/Legion/'),
  SHOW('The Lego Batman Movie'),
  SHOW('Split'),
  SHOW('xXx: Return of Xander Cage'),
  SHOW('http://www.tw116.com/drama/huanlehaoshengyin/', '', 'Sing'),
  //SHOW('http://www.tw116.com/fiction/jianglin/', '1', 'Arrival'),
  SHOW('John Wick: Chapter 2'),
  SHOW('http://www.tw116.com/fiction/taikonglvke/', '', 'Passengers'),
  SHOW('http://www.tw116.com/drama/jiandietongmeng/', ''),
  SHOW('http://www.tw116.com/drama/yincangrenwu/', ''),
  SHOW('http://www.tw116.com/fiction/taikonglvke/', '', 'Power Rangers'),
  SHOW('http://www.tw116.com/comedy/BJdanshenriji3BJdehaizi/'),
  SHOW('Ghost In The Shell'),
  SHOW('http://www.tw116.com/anime/konglongdangjia/'),
  SHOW('http://www.tw116.com/action/jingangkuloudao/'),
  SHOW('the Belko Experiment 2017'),
  SHOW('http://www.tw116.com/fiction/shenghuaweiji6zhongzhang/'),
  SHOW('http://www.tw116.com/action/cikexintiao/'),
  SHOW('http://www.tw116.com/action/jinganglang3shusiyizhan/'),
  SHOW('http://www.tw116.com/romance/meinvyuyeshou2017/'),
  SHOW('http://www.tw116.com/drama/xiaojian/'),
  SHOW('http://www.tw116.com/horror/liaoyangyuan/'),
  SHOW('http://www.tw116.com/horror/jinbiyuyinfang/'),
  SHOW('http://www.tw116.com/war/bililinendezhongchangzhanshi/'),
  SHOW('Life'),
  SHOW('http://www.tw116.com/anime/haidizongdongyuanhaidiqibingxunzhaonimo/'),
  SHOW('http://www.tw116.com/anime/mofajinglingjumo/'),
];
