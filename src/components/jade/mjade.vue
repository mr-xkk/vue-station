<template>
  <div class="j_card_cloud">
    <div class="j_card_detail">
      <div class="j_card_item">
        <h1 class="title">认识jade</h1>
        <p>通常大部分前端开发工作者一开始步入前端开发的时候，都是直接简单的写html页面然后丢给后台开发，后台开发在来嵌入模版。
          对于日益庞大的前端页面来说，还是用老的字符串拼接的方法来嵌入html内容已经不适应当下的开发趋势了。
          jade应运而生---jade拥有良好的可读性,受到相当一部分开发者的喜爱.
        </p>
      </div>
      <div class="j_card_item">
        <h1 class="title">jade基本开发环境搭建</h1>
        <div><p>首先安装<span>nodejs</span>这是必须的,迈向成功的第一步,迎娶白富美的起点;
          然后就是</p>
        <code><span>npm</span> install -g jade</code>
        </div>
      </div>
      <div class="j_card_item">
        <h1 class="title">jade编译输出</h1>
        <p>搭建好开发环境后,开心的编写完jade文件,改怎么将他编译成我们熟悉的html呢?
          在我们的jade文件所在的文件夹打开命令行;输入文件名.jade
        <pre><span>jade</span> jade -P -w jade.jade</pre>
        P是用来让编译过后的html不压缩;w用来实时监控编译,不然一遍遍的输入岂不是太烦,就违背了我们要用最小的力气来写代码的初衷了!!!
        </p>
      </div>
      <div class="show cssa52779c8a18e57" @click="show" v-if="hide">查看更多</div>
      <div class="j_card_item" v-if="reveal">
        <h1 class="title">jade基本api标签类</h1>
        <p>首先可以使用es6语法<span>require</span>将jade引入进来
        <pre><span>let</span>  jade = require('jade');</pre>
        其次我不说你们也在上面看到了,要注意父子级的缩进;
        下面就开始使用我们酷炫的<span>JADE</span>
        <br>从标签开始
        标签就是一个简单的单词:<br>
        <span>html</span><br>
        它会被转换为 <code> < html >< /html> </code>
        标签也是可以有 id 的:
        div#procrastination
        它会被转换为 <code>< div id="procrastination">< /div></code>
        怎么加 class 呢？
        div.procrastination
        转换为 <code>< div class="procrastination">< /div></code>
        多个 class 和 id? 也是可以搞定的:<br>
        div#foo.bar.baz
        转换为 <code>< div id="foo" class="bar baz">< /div></code>

        不停的 div div div 很讨厌啊 , 可以这样:
        #foo
        .bar
        这个算是我们的语法糖，它已经被很好的支持了，上面的会输出：

        <code>< div id="foo">< /div>< div class="bar">< /div></code>
        标签文本

        只需要简单的把内容放在标签之后：

        <code>p hooo!</code>

        它会被渲染为 <code>< p>hooo!< /p></code>

        很帅吧，但是大段的文本怎么办呢：
        <pre>
          p
          | foo bar baz
          | rawr rawr
          | super cool
          | go jade go
        </pre>
        渲染为 <code>< p>foo bar baz rawr.....< /p></code>
        要输出 #{} 的时候怎么办? 转义一下!
        <code>p \#{something}</code>
        它会输出 <code>< p>#{something}< /p></code>
        感觉可以实力用到vue,angular类的<br>
        特别要注意p标签的一个点!!!<code>.</code>的前面有空格和没空格的时候是两个概念
        带空格的会被 Jade 的解析器忽略，当作一个普通的文字.
        </p>
      </div>
      <div class="j_card_item" v-if="reveal">
        <h1 class="title">jade基本api属性</h1>
        <p>
          jade 支持使用 ( 和 ) 作为属性分隔符

          <code>a(href='/login', title='View login page') Login</code>

          当一个值是 undefined 或者 null 属性 不 会被加上,
          所以呢，它不会编译出 'something="null"'.

          <code>div(something=null)</code>

          Boolean 属性也是支持的:

          <code>input(type="checkbox", checked)</code>

          使用代码的 Boolean 属性只有当属性为 true 时才会输出：

          <code>input(type="checkbox", checked=someValue)</code>

          多行同样也是可用的：

          <pre>
          input(type='checkbox',
            name='agreement',
            checked)
          </pre>

          多行的时候可以不加逗号：
          <pre>
          input(type='checkbox'
          name='agreement'
          checked)
          </pre>
          加点空格，格式好看一点？同样支持
          <pre>
          input(
          type='checkbox'
          name='agreement'
          checked)
          </pre>
          冒号也是支持的:

          <code>rss(xmlns:atom="atom")</code>

          假如我有一个 <span>user</span> 对象 <code>{ id: 12, name: 'tobi' }</code>
        我们希望创建一个指向<span> /user/12</span> 的链接 href, 我们可以使用普通的 JavaScript 字符串连接，如下:

          <code>a(href='/user/' + user.id)= user.name</code>

          或者我们使用 Jade 的修改方式, 这个我想很多使用 Ruby 或者 CoffeeScript 的人会看起来像普通的 JS..:

          <code>a(href='/user/#{user.id}')= user.name</code>

          class 属性是一个特殊的属性，你可以直接传递一个数组，比如 bodyClasses = ['user', 'authenticated'] :

          body(class=bodyClasses)

        </p>
      </div>
      <h2 style="font-family:华文细黑;font-size: 1.8rem;text-align: center;line-height: 2.2rem;text-indent: 2em">以上只是让你入门,如果你喜欢jade,更多还是要靠你自己查看更多文档;附上我推荐的网址
        <a href="https://segmentfault.com/a/1190000000357534#articleHeader14">更详细的api,更系统的归类</a>
      </h2>
    </div>
  </div>
</template>
<script type="es6">
  export default{
    data(){
      return {
        someData:'',
        list:'',
        reveal :false,
        hide:true
      }
    },
   /* created: function () {
      let that = this;
      that.$http.get('/data/toutiao/index?type=top&key=3bdff304409ec289d90b80f9334e1060').then(response => {
        // get body data
        that.someData = response.body.result.data;
        if(that.someData.length>=5){
            that.someData.length=5;
        }
      }, response => {
        // error callback
      });
    },*/
    methods: {
        show(){
            this.reveal = true;
            this.hide = false
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" src="../public.styl"></style>
