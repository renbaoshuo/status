// 配置
window.Config = {
    // 站点名
    SiteName: "Site Status",

    // 站点链接
    SiteUrl: "https://renbaoshuo.github.io/status/",

    // UptimeRobot Api Keys
    // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
    ApiKeys: ["ur964137-31ef2a2f067c04b489975316"],

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
