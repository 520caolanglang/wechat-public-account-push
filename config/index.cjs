/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: "wx8db7311bdda62f12",

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: "7b89d1c63ba78f86bb8bf7f849e9f673",

  PROVINCE: '广东',
  CITY: '深圳',
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '丁香凝',
      city: '深圳',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQvu-6B-IdJ5gdD-0I4UV_zrnSJA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GmHoQpHG5sbmMc_a6J7nujd-ofPxk0f061ckj_ff-zE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '香香', year: '2001', date: '02-06',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '浪浪', year: '2001', date: '07-26',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '03-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-06-01' }
      ]
    },
    {
      // 想要发送的人的名字
      name: '曹浪浪',
      city: '深圳',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQvu-6JXHcAiPkfBjpOOqR0h4wRY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GmHoQpHG5sbmMc_a6J7nujd-ofPxk0f061ckj_ff-zE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-30',
      festivals: [
         // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
         {
           type: '生日', name: '香香', year: '2001', date: '02-06',
         },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '浪浪', year: '2001', date: '07-26',
        },
         {
           type: '节日', name: '相识纪念日', year: '2024', date: '03-23',
         },
      ],
       // 我们在一起已经有xxxx天了的配置
       customizedDateList: [
         // 在一起的日子
         { keyword: 'love_day', date: '2024-06-01' }
       ]
    }
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'AstaAgYGZ1XpzaxdRkBIEHFm7VnxSDHgofyx77f-puQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQvu-6JXHcAiPkfBjpOOqR0h4wRY',
    }
  ],

}

module.exports = USER_CONFIG
