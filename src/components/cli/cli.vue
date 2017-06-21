<template>
  <div class="j_card_cloud">
    <div class="j_card_detail">
      <div class="j_card_item">
      <h1 class="title">认识vue-cli</h1>
      <h1>老惯例,不用我说了吧</h1>
      <p>这次简单介绍下:vue-cli 是vue.js的脚手架，用于自动生成vue.js模板工程的。
          :)这次简单吧!
      </p>
    </div>
      <div class="j_card_item">
      <h1 class="title">安装和使用vue-cli</h1>
      <h1>安装vue-cli</h1>
      <p>
        首先全局安装vue-cli
        <code><span>npm</span> install -g vue-cli</code>
        然后创建一个自己的vue-cli项目;名称可以自己舒服就起啥
        <code>vue init webpack myproject</code>
        然后cd打开该目录;
        <code>cd myproject</code>
        安装需要的依赖
        <code><span>npm</span> install</code>
        最后的文件夹为,当然我这还没安装依赖
        <img src="../../../static/images/peroject.png" alt="文件夹">
        跑起来!!!跑起来!!!
        <code><span>npm</span> run dev</code>
        在浏览器打开http://localhost:8080，则可以看到欢迎页了。欢迎页我就不上图了,给你们自己成就感,看到自己成功的结果;
        <br>可是这个只适合调试环境,想在服务器中访问,就需要使用
        <code><span>npm</span> run build</code>
        将文件夹打包出来生产一个dist文件夹,直接给放到服务器页面目录就可以在服务器看到了;
      </p>
    </div>
      <div class="j_card_item">
      <h1 class="title">总结我自己遇到的坑,还有解决方法</h1>
      <h1>因为刚接触,所以一些东西比较低级,但新手应该还是比较常遇到的</h1>
        <div class="details">
          <p>
          <h1 class="color_h1">使用vue-cli之前的一些设置</h1>
          <button type="button" @click="show()" class="switch">点击查看详细内容</button>
          <div class="content" v-if="set">
            <p>首先因为我们在vue-cli里编写是后缀vue的组件,所以在webstorm里是识别不了的,全是黑白的,还没有代码提示不是要我命;
              但这不能拦住我们呀,这时候就需要我们设置了<br>
              setting=>File Types找到html然后添加*.vue<br>
              这时候我们也就是把vue文件当做html去解析
            </p>
            <p>因为我们在vue-cli里面使用的es6的语法;所以我们在script标签里要加上类型</p>
            <code>< script type="es6">< /script></code>
            <p>这样写起来的话就不会有什么阻碍了...还有原谅我是个ide高度依赖者,其他的都基本没用过,没有设置过...</p>
            <button type="button" @click="hide" class="switch">收!收!收起来!!!</button>
          </div>
          </p>
        </div>
        <div class="details">
          <h1 class="color_h1">引用jquery</h1>
          <button type="button" @click="showj" class="switch">点击查看详细内容</button>
          <div class="content" v-if="jq">
            <p>
              首先从头开始;我们在我们的<b>package.json</b>的<b>devDependencies</b>中添加依赖
              <code>"jquery": "^3.2.1"</code>
              然后<code>npm install</code>安装我们的jquery依赖
              <br>
              <b>build</b><br>
              文件夹主要是用来配置构建文件;一些文件的引入也是在这个文件夹配置;<br>
              比如有些想在vue里使用jquery的哥们,当然在这里使用jquery是与vue的mvvvm思想有冲突的,但是jquery写动效啥的真的很爽呀,不是吗?
              这时候就需要在<b>build</b>文件夹的<b>webpack.base.conf.js</b>里面配置一些东西了,
            <code>var webpack = require("webpack")</code>
              我的习惯是在module.export的sresolve后面写;
            <pre>
              plugins: [
                new webpack.optimize.
                  CommonsChunkPlugin('common.js'),
                new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery",
                laypage:'laypage'
                })
              ],
            </pre>
            然后就需要在<b>main.js</b>里面引入
            <code>import $ from 'jquery'</code>
            最后在new Vue里面注册就行了
            <pre>
              new Vue({
                el: '#app',
                router,
                $,
                template: '< App/>',
                components: { App }
              })
            </pre>
            然后重新run dev一下;就可以开心的使用了!<br>
            <button type="button" @click="hide" class="switch">收!收!收起来!!!</button>
            </p>
          </div>
      </div>
        <div class="details">
          <h1 class="color_h1">vue封装的ajax方法</h1>
          <button type="button" @click="showa" class="switch">点击查看详细内容</button>
          <div class="content" v-if="ajax">
            <p>
              首先ajax是所有前端少不了的东西,所以下面的内容就重要了!!!<br>
              vue自己是有封装好的ajax方法的,叫<b>vue-resource</b>
              第一步还是安装我们的依赖<code>npm install vue-resource --save</code>
              然后还是我们熟悉的<b>es6</b>的语法,将vue-resource引入到全局,此时需要在main.js里面引入
              <code>import VueResource from 'vue-resource'</code>然后use
              <code>Vue.use(VueResource)</code>
              <p>其实vue-resource的用法和jquery中的ajax差不多;语法很简单</p>
              <pre>
                this.$http.get('/someUrl', [options]).then((response)
                => {
                    // 响应成功回调
                }, (response) => {
                    // 响应错误回调
                });
              </pre>
              <p>这里使用的也是es6的箭头函数;相信看到这个之后;有jquery的ajax使用基础的话,一眼就能看懂这段代码了,具体参数我就不详解了,大家可以看
                <a href="http://www.cnblogs.com/axl234/p/5899137.html">vue-resource插件的使用</a>
              </p>
              <p>
                  说到这里就不得不提一下vue的钩子函数,相信看了官方api的各位应该对这个名称很熟悉;
                  可是很多人不是很理解这个名词,其实我也因为刚接触不是太了解这个名词的意思,但在接触vue-resource的过程中,因为不了解vue的函数
                  调用机制,害我花费了很多时间去看这方面的东西,也问了许多vue的大牛;
              </p>
              <p>
                这里说个简单的例子,我通过ajax获取的数据要怎么在页面加载时就直接出现在页面上;我相信许多刚接触vue的同志并不知道,因为我就是不知道,
                这里就要说到这个钩子函数了
                <img src="../../../static/images/created.jpg" alt="钩子函数名称">
                这是我在官网上截的一张图,各位应该也看过详细的api;
                我刚才说的要直接出现页面的方法就用使用<b>created</b>这个函数;在页面加载时就运行这个函数;
                这些函数名称也对应着不同的状态
                <pre>
                  created: function () {
                      let that = this;
                      that.$http.get('/url')
                  .then(response => {
                        // get body data
                      }, response => {
                        // error callback
                      });
                </pre>
              这是我自己使用的方法,直接将vue-resource拿到的挂到钩子函数上,就可以获得想要的效果了!
              </p>
              <p>
                说到这里,又不得不提一下浏览器的跨域问题;为啥呢?因为我在写vue-resource的时候就遇到了这样的问题,请求不到数据,因为我们的调试环境,有些测试的api并不能跨域;
                所以就需要我们自己手动配置,才能拿到数据,正常显示在页面上,这时候我们需要在<b>config</b>
                文件夹里的index.js中的<b>proxyTable</b>中配置
                <pre>
                  proxyTable: {
                    '/data':{
                      target: 'http://v.juhe.cn',
                      changeOrigin: true,
                      pathRewrite: {
                        '^/data': ''
                      }
                    }
                </pre>
                因为我测试使用的是聚合的api,然后url只需要/data/someKey这种格式就可以了,但是这样只能在dev环境中运行;
                <p>以上就是vue-resource的一些基本配置和使用方法</p>
              </p>
            <button type="button" @click="hide" class="switch">收!收!收起来!!!</button>
            </p>
          </div>
      </div>
        <div class="details">
          <h1 class="color_h1">vue的路由</h1>
          <button type="button" @click="showr" class="switch">点击查看详细内容</button>
          <div class="content" v-if="router">
            <p>
              vue的路由也是他的一大特色;当然如果我们使用vue-cli的话,因为vue-cli偏向spa,所以他会帮我们创建好路由文件夹<br>
              <b>router</b>文件就是我们的路由文件夹
              其实步骤跟我们自己写的差不多,首先安装
              <code>npm install vue-router --save</code>
              依赖;然后依旧是import
              <code>import Router from 'vue-router'</code>
              依旧是在vue里使用
              <code>Vue.use(Router)</code>
              <p>如果需要注册其他组件,就需要将其他组件暴露出来,在其他的组件里写上
                  <code>< script type="es6">export default{}< /script></code>
              其实暴露一个空的就可以了
              然后在我们的router文件夹里的index.js里将他引入
              <code>import Hello from '@/components/Hello'</code>
              </p>
            <p>有import自然就有export;这时候我们就需要将我们的路由暴露出去;
                <pre>
                    export default new Router({
                        routes: [
                          {
                            path: '/',
                            name: 'Hello',
                            component: Hello,
                            children: [
                              {
                                path: 'cli',
                                component: cli
                              }
                </pre>
            这段代码包含了子路由,因为有时候我们不光需要一个路由,在路由的页面我们也需要二级路由;
            当然在一级路由界面不能忘记添加
            <code> < router-view>< /router-view></code>
            这虽然是低级错误,我还真卡在这里过...
            </p>
            <p>前端和后台的交互也是天天发生的事情,同jquery中的ajax的<span>data</span>参数;在vue-resource中也给传到后台的数据设置了方法,
              在<span>get</span>方法中的第二个参数data就是传递给后台的数据;
              在<span>post</span>方法中的第二个参数data也是传递给后台的数据,但是必须要添加第三个参数:
              <code>{emulateJSON:true}</code>
              ...
            </p>
            </p>
            <button type="button" @click="hide" class="switch">收!收!收起来!!!</button>
            </p>
          </div>
        </div>
    </div>
      <div class="j_card_item">
      <h1 class="title">vue-cli使用动画插件Animate.css</h1>
      <h1>这是一个Vue.js的端口Animate.css。用于Vue的内置过渡。</h1>
        <div class="details">
          <p>
          <h1 class="color_h1">使用Animate.css之前的还是需要npm下载</h1>
          <button type="button" @click="show()" class="switch">点击查看详细内容</button>
          <div class="content" v-if="set">
            <p>
              <code>npm install --save vue2-animate</code>
            </p>
            然后在js里面将样式<span>require</span>进来
            <code>require（' vue2-animate / dist / vue2-animate.min.css '）</code>
            然后就可使用了,
            <pre>
              < transition
                name="custom-classes-transition"
                enter-active-class="bounceLeft-enter"
                leave-active-class="bounceRight-leave"
                >
                < p v-if="show">hello< /p>
              < /transition>
            </pre>
            <p>基本写法就是这样,使用vue自带的transition标签;</p>
            具体详细的用法,还是看github上的更加明白,
            GitHub地址:<a href="https://github.com/asika32764/vue2-animate">vue2-animate</a>
            <button type="button" @click="hide" class="switch">收!收!收起来!!!</button>
          </div>
          </p>
        </div>
    </div>
    </div>
  </div>
</template>
<script type="es6">
  export default{
    data(){
      return {
            set:false,
            jq:false,
            ajax:false,
            router:false
      }
    },
    methods: {
      show(){
        this.set = true
      },
      showj(){
        this.jq = true
      },
      showa(){
        this.ajax = true
      },
      showr(){
        this.router = true
      },
      hide(){
        this.set = false;
        this.jq = false;
        this.ajax = false;
        this.router = false
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" src="../public.styl"></style>
