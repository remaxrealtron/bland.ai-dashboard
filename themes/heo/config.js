const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2024-02-14', // Website establishment date, used to calculate how many days the website has been running

  // The scrolling content of the notification bar at the top of the home page can be left blank if not needed. []
  NOTICE_BAR: [
    { title: 'Canada extends foreign home buyer ban until 2027!', url: 'https://https://www.cicnews.com/2024/02/canada-extends-foreign-home-buyer-ban-until-2027-0242824.html#gs.5fal47' },
    { title: 'Bank of Canada today held its target for the overnight rate at 5%', url: 'https://www.bankofcanada.ca/2024/01/mpr-2024-01-24/' }
  ],

  // Hero area (big card at the top of the home page)
  HERO_TITLE_1: 'Discovering',
  HERO_TITLE_2: 'Spaces',
  HERO_TITLE_3: 'Toronto Real Estate',
  HERO_TITLE_4: 'Designing',
  HERO_TITLE_5: 'Lifestyles',
  HERO_TITLE_LINK: 'https://google.ca',

  // The hero area displays three top categories
   HERO_CATEGORY_1: { title: 'Discover', url: '/tag/Tools' },
   HERO_CATEGORY_2: { title: 'Engage', url: '/tag/Sites' },
   HERO_CATEGORY_3: { title: 'Learn', url: '/tag/Text' },
 
  // The welcome message on the profile card on the right, click to automatically switch
  INFOCARD_GREETINGS: [
   '🔍 Explore new areas',
   '🤝 Buying & selling tips',
   '🚀 Market insights',
   '🏠 Home improvement',
   '🌐 Digital realty trends',
   '🧱 Community connect',
   '📈 Investment strategies',
   ],  
   
  INFO_CARD_URL: 'https://google.ca', // Github icon button link
 
  // User skill icon
  GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  SOCIAL_CARD: true, // Whether to display the right side, click the Join Community button
  SOCIAL_CARD_TITLE_1: '@realtorTO',
  SOCIAL_CARD_TITLE_2: 'More Real Estate Tips and Tricks!',
  SOCIAL_CARD_TITLE_3: 'Join Now!',
  SOCIAL_CARD_URL: 'https://www.youtube.com/channel/UCPzmia0KbQlmhYuh5r7kWtA?view_as=subscriber',

  // *****  The following configuration is invalid and is only reserved for development ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
