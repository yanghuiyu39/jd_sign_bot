/*
 * @Description: 请求接口
 * @Author: yanghuiqi
 * @Date: 2021-06-29 14:06:53
 * @LastEditTime: 2021-06-29 15:12:35
 * @LastEditors: yanghuiqi
 */

const rp = require('request-promise');

//发送接口
async function sendPost(data, uri) {
  const options = {
    uri: uri,
    form: data,
    json: true,
    method: 'POST'
  }
  // 发送一个ajax 接口
  await rp(options).then(res => {
    console.log('请求成功');
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
//发送接口
async function sendGet(params, uri) {
  const options = {
    uri: uri,
    qs: params,
    json: true
  }
  // 发送一个ajax 接口
  await rp(options).then(res => {
    console.log('请求成功');
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
// 执行方法
async function run() {
  // post 参数，url
  // await sendPost(data, url)

  // get 参数，url
  await sendGet({ id: '1' }, 'http://www.baidu.com')
  await sendGet(params, url)
}
(async () => {
  try {
    await run()
  } catch {

  }
})()
