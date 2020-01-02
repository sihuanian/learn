# koa2

## 
- request.query // 对象
- request.querystring // 字符串
- request.method
- request.path // 不包括请求参数
- request.url // 包括请求参数

## request 的别名
- ctx.header 请求头部
- ctx.headers 与ctx.header 相同
- ctx.method 请求方式
- ctx.url 请求url，包含请求参数，不包含协议名 + 域名 + 端口号
- ctx.originalUrl 与ctx.url 相同
- ctx.origin 协议名 + 域名 + 端口号 （http://localhost:3000）
- ctx.href ctx.origin + ctx.url
- ctx.path 请求路径，不包含请求参数
- ctx.query 将请求参数变成一个对象
- ctx.querystring 请求参数是一个字符串
- ctx.host 域名 + 端口号
- ctx.hostname 域名
- ctx.fresh boolean 返回一个boolean 值，表示缓存是否过期
- ctx.stale 与ctx.fresh 相反
- ctx.socket 返回请求套接字
- ctx.protocol 返回协议名称
- ctx.secure 通过 ctx.protocol == "https" 来检查请求是否通过 TLS 发出。
- ctx.ip 
- ctx.ips
- ctx.subdomains
- ctx.is() 检查传入请求是否包含 Content-Type 头字段， 并且包含任意的 mime type。 如果没有请求主体，返回 null。 如果没有内容类型，或者匹配失败，则返回 false。 反之则返回匹配的 content-type。
- ctx.accepts()
- ctx.acceptsEncodings()
- ctx.acceptsCharsets()
- ctx.acceptsLanguages()
- ctx.get()

## response 别名

- ctx.body 响应体
- ctx.body=
- ctx.status 响应状态
- ctx.status=
- ctx.message 状态短语
- ctx.message=
- ctx.length= 
- ctx.length ctx.body 推导出来的值
- ctx.type=
- ctx.type 获取Content-Type的值
- ctx.headerSent
- ctx.redirect()
- ctx.attachment()
- ctx.set()
- ctx.append()
- ctx.remove()
- ctx.lastModified=
- ctx.etag=