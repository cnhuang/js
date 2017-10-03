
const SHOW = (url, done = 0, name = undefined) => ({url, name, done});

// Data
tvData = [
  SHOW('http://www.tw116.com/occident/tiequandiyiji/', 13, 'iron feast'),
  SHOW('http://www.tw116.com/occident/fuermosijibenyanyifadiwuji/', 24, 'Elementary V'),
  SHOW('http://www.tw116.com/occident/xinfuermosishentanxialuokedisiji/', 3, 'English Homels'),
  SHOW('http://www.tw116.com/occident/zuieheimingdandisiji/', 22, '罪恶黑名单'),
  SHOW('http://www.tw116.com/occident/tianxiedisanji/', 14, 'scopin III'), 
  SHOW('http://www.tw116.com/occident/shendunjutegongdisiji/', 22, 'shield IV'),
  SHOW('http://www.tw116.com/occident/mangdiandierji/', 22, 'Blind spot II'),
  SHOW('http://www.tw116.com/occident/jiexikaqiongsidiyiji/', 0, 'Jones'),
  SHOW('http://www.tw116.com/occident/lukekaiqidiyiji/', 8, 'Luke Cage'),
  SHOW('http://www.tw116.com/occident/shikongshouweikuashikongzhuibudiyiji/', 16, '時空守衛 Timeless'),
  SHOW('http://www.tw116.com/occident/tushuguanliyuandisanji/', 10, '圖書館員第3季'),
  SHOW('http://www.tw116.com/occident/xibushijiediyiji/', 10, 'West World'),
  SHOW('http://www.tw116.com/occident/tegongkatedierji/', 10, 'Agent carter'),
  SHOW('http://www.tw116.com/occident/Xdangandishiji/', 6, 'X File'),
  SHOW('http://www.tw116.com/occident/shierhouzidisanji/', 0, '12 Monkeys'),
  SHOW('http://www.tw116.com/occident/bingyuhuozhigequanlideyouxidiqiji/' , 0, 'Game of Throne 7'),
  SHOW('http://www.tw116.com/occident/guaiqiwuyudiyiji/', 8, 'Stanger things I'),
  SHOW('http://www.tw116.com/occident/lvxingzhechuanyuezhediyiji/', 12, '旅行者/穿越者第一季'),
  //SHOW('http://www.tw116.com/mainland/guichuidengzhijingjuegucheng/', 0, ''),
  SHOW('http://www.tw116.com/occident/heijingdisanji/', 4, 'black mirror S3'),
  SHOW('http://www.tw116.com/occident/shuishixiongshoudiyijiwomenzhizhongdiyiji/', 0, '誰是兇手'),
  SHOW('http://www.tw116.com/occident/shandianxiadiyiji/', 0 ,'Flash III'), 
  SHOW('http://www.tw116.com/occident/heikejuntuandiyiji/', 0, 'Mr. Robot'),
  SHOW('http://www.tw116.com/occident/xiaoyaofawaidierji/', 0, 'Get away with murder'),
  SHOW('http://www.tw116.com/occident/meiguokongbugushijixingxiumeiguoguaitandisiji/', 18, '美国恐怖故事：畸形秀'),
  SHOW('http://www.tw116.com/occident/meiguokongbugushidiwuji/', 0, '美国恐怖故事第五季'),
  SHOW('http://www.tw116.com/occident/baifenzhisandiyiji/', 0, '3%'),
  SHOW('http://www.tw116.com/occident/daqundiyiji/', 8, '大群/變種軍團'),
  SHOW('http://www.tw116.com/occident/shisangeyuanyindiyiji/', 13, '13 reasons'),
  SHOW('http://www.tw116.com/occident/daxiaohuangyanxiaohuangdashidiyiji/', 3, ''),
  SHOW('http://www.tw116.com/occident/miwudiyiji/', 0, ''),
  SHOW('http://www.tw116.com/occident/heianwuzhidisanji/', 10, 'Dark matters3'),
  SHOW('http://www.tw116.com/anime/xunlongjifeiyuebianjiedisanji/', 0, 'train ur dragon'),
];

movieData = [
  SHOW('http://www.tw116.com/drama/qihuansenlin/'),
  SHOW('http://www.tw116.com/fiction/ailisimengyouxianjing2/'),
  SHOW('http://www.tw116.com/drama/jinqianguaishou/', '', 'Money monster'),
  SHOW('http://www.tw116.com/action/lieshendongrizhizhan/'),
  SHOW('http://www.tw116.com/fiction/chuimengjuren/'),
  SHOW('http://www.tw116.com/action/taishanguilaixianzhanconglin/'),
  SHOW('http://www.tw116.com/action/lueduozhe/'),
  SHOW('http://www.tw116.com/horror/shiti/'),
  SHOW('http://www.tw116.com/action/changchengwanlichangcheng/'),
  SHOW('http://www.tw116.com/action/jinganglang2/'),
  SHOW('http://www.tw116.com/action/mingxuanyixian/'),
  SHOW('http://www.tw116.com/action/yindiannabolisihaoyongzhewuju/'),
  SHOW('http://www.tw116.com/fiction/chaonengansidui/'),
  SHOW('http://www.tw116.com/fiction/renleiqingchujihua3/'),
  SHOW('http://www.tw116.com/horror/shatanjueshadao/'),
  SHOW('http://www.tw116.com/horror/huashenguimotong/'),
  //SHOW('http://www.tw116.com/romance/meinvyuyeshou2017/'),
  SHOW('http://www.tw116.com/drama/xiaojian/'),
  SHOW('http://www.tw116.com/horror/jinbiyuyinfang/', '', '《禁闭/育阴房》'),
  SHOW('http://www.tw116.com/war/bililinendezhongchangzhanshi/', '', '比利·林恩的中场战事'),
//  SHOW('http://www.tw116.com/action/yinhehuweidui2/', '', 'guardience of galaxy 2'),
  SHOW('http://www.tw116.com/action/jixiantegong3zhongjihuigui/', '', '極限特工3'),
  SHOW('http://www.tw116.com/action/tiequan/', '', ''),
//  SHOW('http://www.tw116.com/action/yixingjuexingwaixingshengming/', '', 'Life'),
//  SHOW('http://www.tw116.com/fiction/gongkejidongduizhenrenban/', '', '攻殼機動隊真人版'),
  SHOW('http://www.tw116.com/fiction/sanjiao/'),
  SHOW('http://www.tw116.com/fiction/shouhuzheshijizhanyuan/'),
  SHOW('http://www.tw116.com/fiction/waliangzuofen/'),
  SHOW('http://www.tw116.com/fiction/xunigeming/'),
  SHOW('http://www.tw116.com/horror/songzangren/'),
  SHOW('http://www.tw116.com/action/jialebihaidao5siwuduizheng/', '', 'Pirate 5'),
  SHOW('http://www.tw116.com/horror/fenliesilie/', '', 'Split'),
//  SHOW('http://www.tw116.com/action/chaofanzhandui/', '', 'Power Rangers'),
  SHOW('http://www.tw116.com/fiction/yixingqiyue/', '', 'alien'),
  SHOW('http://www.tw116.com/vip/xingqiujueqi3zhongjizhizhan/', '', 'ape planet'),
  //SHOW('http://www.tw116.com/horror/xinmunaiyi/', '', 'The mummy'),
//  SHOW('http://www.tw116.com/vip/jialebihaidao5siwuduizheng/', '', '神鬼奇航：死無對證'),
//  SHOW('http://www.tw116.com/fiction/bianxingjingang5zuihoudeqishi/', '', 'transformer5'),
  SHOW('http://www.tw116.com/anime/shentounaiba3beibidewo3/', '', '神偷奶爸'),
  SHOW('http://www.tw116.com/action/yasewangdoushouzhengba/', '', 'King arthur'),
//  SHOW('http://www.tw116.com/action/shenqinvxia/', '', 'Womder Women'),
  SHOW('http://www.tw116.com/war/bahuobaliwangxiazhongjie/', '' ,''),
  SHOW('valerian and the city of a thousand planets', '', 'bahuobali 2'),
  SHOW('http://www.tw116.com/vip/baiduren/', '', '擺渡人'),
  SHOW('http://www.tw116.com/drama/paodiaotianhou/'),
  SHOW('http://www.tw116.com/fiction/zhizhuxiayingxiongguilai/', '', 'spider man'),
  SHOW('http://www.tw116.com/fiction/xingjitegongqianxingzhicheng/'),
  SHOW('http://www.tw116.com/drama/shenhaihaojie/'),
  SHOW('http://www.tw116.com/action/xingqiujueqi3zhongjizhizhan/', '猩球崛起3', ''),
  SHOW('Mom'),
  SHOW('Geostorm'),
  SHOW('Dark tower'),
  SHOW('antman 2'),
  SHOW('Captain America3'),
  SHOW('the Belko Experiment 2017'),
  SHOW('Justice League'),
  SHOW('circle'),
  SHOW('xXx: Return of Xander Cage'),
  SHOW('John Wick: Chapter 2'),
  SHOW('別闖陰陽界 Flatliners'),
  SHOW('牠 It'),
  SHOW('http://www.tw116.com/fiction/lieshaxingqiyi/'),
  SHOW('Downsizing'),
  SHOW('紅雀 Red Sparrow'),
  SHOW('Geostorm'),
  SHOW('blade runner 2049'),
  SHOW('古墓奇兵 Tomb Raider'),
  SHOW(' #野蠻遊戲2 #瘋狂叢林'),
  SHOW('東方快車謀殺案'),
  
  //SHOW('http://www.tw116.com/action/bahuobaliwangkaiduanshang/'),
  //SHOW('http://www.tw116.com/drama/tiancaishaonvtiancaitiancaideliwu/', '', 'gifted'),
  //SHOW('http://www.tw116.com/drama/taochujuemingzhen/', '', 'Get Out'),
  //SHOW('http://www.tw116.com/fiction/yuzi/'),
  //SHOW('http://www.tw116.com/horror/lvsediyu/', '', '綠色地獄'),
  //SHOW('http://www.tw116.com/horror/wannenyuechi/', '' ,'萬能鑰匙'),
  //SHOW('http://www.tw116.com/fiction/tezhongbuduihuishimiejin/', '', 'Call of duty'),
  //SHOW('http://www.tw116.com/anime/konglongdangjia/'),
  //SHOW('http://www.tw116.com/action/jingangkuloudao/'),
  //SHOW('http://www.tw116.com/fiction/shenghuaweiji6zhongzhang/'),
  //SHOW('http://www.tw116.com/action/cikexintiao/'),
  //SHOW('http://www.tw116.com/action/jinganglang3shusiyizhan/'),
  //SHOW('http://www.tw116.com/horror/liaoyangyuan/'),
  //SHOW('http://www.tw116.com/romance/pengranxindong/'),
  //SHOW('http://www.tw116.com/drama/xiongshimanmanhuijialu/', 1, 'lion'),
  //SHOW('http://www.tw116.com/action/jinganglang3shusiyizhan/', '', '《金刚狼3殊死一战》'),
  //SHOW('http://www.tw116.com/drama/huanlehaoshengyin/', '', 'Sing'),
  //SHOW('http://www.tw116.com/fiction/jianglin/', '1', 'Arrival'),
  //SHOW('http://www.tw116.com/fiction/taikonglvke/', '', 'Passengers'),
  //SHOW('http://www.tw116.com/drama/jiandietongmeng/', ''),
  //SHOW('http://www.tw116.com/drama/yincangrenwu/', ''),
  //SHOW('http://www.tw116.com/comedy/BJdanshenriji3BJdehaizi/'),
  //SHOW('http://www.tw116.com/horror/wumingnvshi/'),
  //SHOW('http://www.tw116.com/horror/dandingmimadiyu/'),
  //SHOW('http://www.tw116.com/horror/fengchecanan/'),
  //SHOW('http://www.tw116.com/fiction/xingqiudazhanwaichuanxiadaoyihao/','','Rogue One: A Star Wars Story'),
  //SHOW('http://www.tw116.com/drama/shenqidongwuzainali/', 1),
  //SHOW('http://www.tw116.com/comedy/ailezhicheng/'),
  //SHOW('http://www.tw116.com/drama/peixiaojiedeqihuanchengbaoguaiwunvhai/', '1'),
  //SHOW('http://www.tw116.com/action/bianfuxiadazhanchaorenzhengyiliming/', 1),
  //SHOW('http://www.tw116.com/fiction/Xzhanjingtianqi/'),
  //SHOW('http://www.tw116.com/horror/zhaohun2/', 1),
  //SHOW('http://www.tw116.com/action/dieyingzhongzhong5/', 1),
  //SHOW('http://www.tw116.com/comedy/zishaxiaodui/', 1),
  //SHOW('http://www.tw116.com/action/fushanxingshisulieche/', 1),
  //SHOW('http://www.tw116.com/horror/annahuatedeliqimingyun/', 1),
  //SHOW('http://www.tw116.com/fiction/ID4xingjizhongsheng/', 1),
  //SHOW('http://www.tw116.com/action/youming/'),
  //SHOW('http://www.tw116.com/action/anshayouxi/'),
  //SHOW('http://www.tw116.com/action/morihuixuan/'),
];


cartoonData = [
  SHOW('http://www.tw116.com/fiction/chuimengjuren/'),
  SHOW('http://www.tw116.com/action/taishanguilaixianzhanconglin/'),
  SHOW('http://www.tw116.com/anime/aichongdajimi/'),
  SHOW('http://www.tw116.com/anime/bingxueqiyuan/'),
  SHOW('http://www.tw116.com/anime/conglindafangong2/'),
  SHOW('http://www.tw116.com/anime/conglindafangong4/'),
  SHOW('http://www.tw116.com/anime/fengkuangdongwucheng/'),
  SHOW('http://www.tw116.com/anime/saichezongdongyuan2fandouchewang2qichezongdongyuan2feichezhengchuan2/'),
  SHOW('http://www.tw116.com/anime/qichezongdongyuansaichezongdongyuan/'),
  SHOW('http://www.tw116.com/drama/huanlehaoshengyin/', '', 'Sing'),
  SHOW('http://www.tw116.com/anime/konglongdangjia/'),
  SHOW('http://www.tw116.com/anime/haidizongdongyuanhaidiqibingxunzhaonimo/', '', '《海底总动员'),
  SHOW('http://www.tw116.com/anime/mofajinglingjumo/', '', 'Troll 魔法精灵/巨魔'),
  SHOW('http://www.tw116.com/anime/chaorentegongdui/', '', '超人特攻队'),
  SHOW('http://www.tw116.com/anime/guaishoudaxueguaiwugongsi2guaiwudaxue/', '', '怪兽大学怪物公司2怪物大学'),
  SHOW('http://www.tw116.com/anime/legaobianfuxiadadianying/', ''),
  SHOW('http://www.tw116.com/anime/duolaAmengdaxiongdenanjibingbingliangdamaoxian/', ''),
  SHOW('http://www.tw116.com/anime/jinglinglvshe2/', '' , '尖叫旅社2'),
  SHOW('http://www.tw116.com/anime/xunlonggaoshou2xunlongji2/', '', ''),
  SHOW('Captain Underpants'),
  SHOW('http://www.tw116.com/anime/baobeilaobanwawalaoban/'),
  SHOW('http://www.tw116.com/anime/douniaowaichuanmengbaomantianfeisongziniao/'),
  SHOW('http://www.tw116.com/anime/haidizongdongyuan2duoliqunaer/'),
  SHOW('http://www.tw116.com/anime/haiyangqiyuan/', '', 'Moana'),
  SHOW('http://www.tw116.com/anime/changfagongzhumofaqiyuan/'),
  SHOW('http://www.tw116.com/anime/meishizongdongyuanliaolishuwang/'),
  SHOW('http://www.tw116.com/anime/longmiaogebideteteluo/'),
  SHOW('http://www.tw116.com/comedy/padingdunxiong/'),
];
