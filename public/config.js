// 配置
window.Config = {
    // 站点名
    SiteName: "Site Status",

    // 站点链接
    SiteUrl: "https://renbaoshuo.github.io/status/",

    // UptimeRobot Api Keys
    // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
    ApiKeys: [
        "m785454128-de815d08858afc0427ba612a", // Baoshuo's Site
        "m785664682-197f9da3314d995cfead6eb0", // Baoshuo's Blog
        "m785664680-4497e45f3dad0e27ff4db9fe", // Baoshuo's Github Pages
    ],

    // 是否显示监测站点的链接
    ShowLink: true,

    // 日志天数
    // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
    // 不过时间不要设置太长，容易卡，接口请求也容易失败
    CountDays: 14,

    // 导航栏菜单
    Navi: [
        {
            text: "Home",
            url: "https://baoshuo.ren/",
        },
        {
            text: "Blog",
            url: "https://baoshuo.blog/",
        },
        {
            text: "Github",
            url: "https://github.com/renbaoshuo",
        },
    ],
};
