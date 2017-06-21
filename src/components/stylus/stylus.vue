<template>
  <div class="j_card_cloud">
    <div class="j_card_detail">
      <div class="j_card_item">
      <h1 class="title">认识stylus</h1>
        <h1>首先老一套介绍一下stylus</h1>
      <p>
        stylus是个什么鬼？对于开发来说，CSS的弱点在于静态化。我们需要一个真正能提高开发效率的工具，LESS， SASS都在这方面做了一些贡献。

        Stylus 是一个CSS的预处理框架，2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，所以 Stylus 是一种新型语言，可以创建健壮的、动态的、富有表现力的CSS。比较年轻，其本质上做的事情与 SASS/LESS 等类似，应该是有很多借鉴，所以近似脚本的方式去写CSS代码。

        Stylus默认使用 .styl 的作为文件扩展名，支持多样性的CSS语法。
        其实最重要的是谁不喜欢这种<span>小酷炫</span>的东西呢!!!
      </p>
    </div>
      <div class="j_card_item">
        <h1 class="title">stylus的安装</h1>
        <p>
          还是继续需要安装nodejs,现在简直就是前端的半条命呀!
        <pre><span>npm</span> install stylus -g </pre>
        生成CSS
        命令行中
        建立一个stylusExample/，再在里面建立 src 目录专门存放 stylus 文件，在里面建立 example.styl 文件。然后在 stylusExample 目录下面执行下面命令
        <pre>stylus --compress src/</pre>
        输出
        <pre>compiled src/example.css</pre> 这个时候表示你生成成功了，带上--compress参数表示你生成压缩的CSS文件。

        <pre>stylus --css css/example.css css/out.styl</pre> CSS转换成styl
        <pre>stylus help box-shadow </pre>CSS属性的帮助
        <pre>stylus --css test.css</pre> 输出基本名一致的.styl文件
        </p>
      </div>
      <div class="j_card_item">
        <h1 class="title">stylus的使用</h1>
        <p>
          上面的步骤都走完后就可以正式使用stylus了;<b>跟jade一样需要注意父子级的缩进,特别要注意!!!</b><br>
        stylus代码
        <pre>
        body html
          margin 0
          padding 0
        </pre>
        编译为:
        <pre>
          body,
          html {
            margin: 0;
            padding: 0;
          }
        </pre>
        css最烦的是什么,符号,符号,符号,各种符号;现在在stylus里我们都把他们干掉;只是单纯的缩进;畅快的书写就行了,简直飞上天的感觉;
        当然还有更加强大的东西;计算;函数都可以在stylus里实现
        <pre>-gosty(type, args)
              i = 0
              position: unquote(type)
              {args[i]}: args[i + 1] is a 'unit' ? args[i += 1] : 0
              {args[i += 1]}: args[i + 1] is a 'unit' ? args[i += 1] : 0

            absolute()
              -gosty('absolute', arguments)

            fixed()
              -pos('fixed', arguments)

            #prompt
              absolute: top 150px left 5px
              width: 200px
              margin-left: -(@width / 2)

            #logo
              fixed: top left
            &:hover
              background red
        </pre>
          编译为

        <pre>
          #prompt {
              position: absolute;
              top: 150px;
              left: 5px;
              width: 200px;
              margin-left: -100px;
            }
            #logo {
              position: fixed;
              top: 0;
              left: 0;
            }
            #logo:hover{
            background:red;
            }
        </pre>
        </p>
      </div>
      <h2 style="font-size: 1.8rem;text-align: center;line-height: 2.2rem;text-indent: 2em;font-family:华文细黑">当然这些简单的api和介绍是不够的,更多还是要靠你自己查看更多文档;附上我推荐的网址
        <a href="https://segmentfault.com/a/1190000002712872#articleHeader3">详细API</a>
      </h2>
      <div class="j_card_item">
        <h1 class="title">stylus的使用</h1>
        <div class="del_txt">
          <h1 class="title">在vue-cli中使用stylus</h1>
          <p>1.首先在<span>package.json</span>中的<span>devDependencies</span>添加
            <code>"stylus": "0.52.4",</code><code>"stylus-loader": "^2.1.1",</code>;
            然后老步骤<code>npm install</code>;
          </p>
          <p>2.如果要写stylus的话,就得在<span>style</span>标签里面写上stylus的lang和rel,让ide认识我们写的是stylus;</p>
          具体如下:<code>< style lang="stylus" rel="stylesheet/stylus" src="../public.styl">< /style></code>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus" src="../public.styl"></style>
