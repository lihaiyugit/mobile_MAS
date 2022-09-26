// 通过终端设备显示不同路由(移动、pc)
export default function ({ isServer, req, redirect, route }) {
  //不同项目不同端口
  // let pcOrigin = 'http://localhost:3000'
  // let mobileOrigin = 'http://localhost:3001'
  let pcOrigin = 'https://v2.chinamas.cn'
  let mobileOrigin = 'https://app.chinamas.cn'
  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  console.log(isMobile(userAgent),'===移动=')
  // if(!req) return
  //http 不能直接写死，要取出来 可能是https
  // const request=req?.headers?.referer?.split('://')[0]||'http';
  // console.log(request,'当前的请求头');
  // console.log(isMobile(userAgent),'====移动',pcOrigin + route.fullPath)
  return isMobile(userAgent) ? '' : redirect(pcOrigin + route.fullPath)
  // 使用redirect 重定向到外链需要加上前缀:http / https
  // 第二步在nuxt.config.js加上对应配置
  //   router: {
  //     middleware: 'midd'
  // },
}

