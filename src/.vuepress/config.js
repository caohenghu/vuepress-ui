module.exports = {
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/comps/' },
      { text: 'GitHub', link: 'https://google.com' }
    ],
    // sidebarDepth: 1,
    // displayAllHeaders: true,
    // sidebar: [
    //   {
    //     title: '组件', // 必要的
    //     // path: '/comps', // 可选的, 应该是一个绝对路径
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 0, // 可选的, 默认值是 1
    //     children: ['/comps/button', '/comps/radio']
    //   }
    // ],
    sidebar: {
      '/comps/': [
        {
          title: '组件', // 必要的
          // path: '/comps', // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0, // 可选的, 默认值是 1
          children: [
            '/comps/button',
            '/comps/radio',
            '/comps/checkbox',
            '/comps/switch',
            '/comps/pagination'
          ]
        }
      ]
    }
  }
}
