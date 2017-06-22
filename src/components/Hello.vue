<script src="../../../httpserver/httpServer.js"></script>
<template>
  <div class="hello">
    <!--share_model-->
    <qr v-if="show_share"></qr>
    <section class="nav_list" :style="{transform:place}">
      <ul @click="back">
        <h3>
          前端必备网站收藏
          <img src="../../static/images/close5.png" alt="">
        </h3>
        <li>
          <h4>配色类网站</h4>
          <a href="http://colorhunt.co" target="_blank">http://colorhunt.co</a><br>
          超级好用的配色网站,鼠标悬停就可以获取颜色,直接复制即可!!!<br>
          <a href="http://webgradients.com/" target="_blank">http://webgradients.com/</a><br>
          再也不用担心渐变什么的颜色搞不定了,直接复制css应用到页面...<br>
          <a href="http://www.bootcss.com/p/websafecolors/" target="_blank">http://www.bootcss.com/p/websafecolors/</a><br>
          为web设计,开发中用到的安全色,也是直接复制粘贴即可.
        </li>
        <li>
          <h4>icon和字体</h4>
          <a href="http://www.iconfont.cn/plus" target="_blank">http://www.iconfont.cn/plus</a><br>
          大名鼎鼎的阿里妈妈,海量图标,各种颜色,格式,想下就下.
          <a href="http://www.easyicon.net/iconsearch/ios/" target="_blank">http://www.easyicon.net/iconsearch/ios/</a><br>
          不再是单一颜色图标,多姿多彩.
          <a href="http://www.thinkcmf.com/font/search.html" target="_blank">http://www.thinkcmf.com/font/search.html</a><br>
          一句话!!!奥森值得信赖.
          <a href="http://www.youziku.com/onlinefont/index" target="_blank">http://www.youziku.com/onlinefont/index</a><br>
          有字库,这个是真的好用,免下载字体,直接在线引用
        </li>
        <li>
          <h4>最重要的插件类</h4>
          <a href="http://www.jq22.com" target="_blank">http://www.jq22.com</a><br>
          毋庸置疑这是jquery的插件库,提供在线预览,下载及教程.<br>
          <a href="http://www.htmleaf.com" target="_blank">http://www.htmleaf.com</a><br>
          也是一个jquery的插件库,看你喜欢了.<br>
          <a href="http://www.layui.com" target="_blank">http://www.layui.com</a><br>
          我个人比较喜欢这个网站,强大的模块化前端框架
        </li>
      </ul>
    </section>
    <section class="inner_cloud">
      <!--share-->
      <div class="share_window" :style="[{transform:share_move}]">
        <div class="share_details"  @click="share">
          <img src="../../static/images/r5.gif" alt="分享到">
        </div>
        <div class="share_content">
          <img src="../../static/images/close5.png" alt="close" class="share_close" @click="share_close">
          <h2>分享网站到...</h2>
          <div class="share_icon" @click="turn_off">
            <img src="../../static/images/qq.png" alt="">
            <p>QQ好友</p>
          </div>
          <div class="share_icon" @click="turn_off">
            <img src="../../static/images/qqzone.png" alt="">
            <p>QQ空间</p>
          </div>
          <div class="share_icon" @click="turn_off">
            <img src="../../static/images/wechat2.png" alt="">
            <p>微信朋友圈</p>
          </div>
          <div class="share_icon" @click="turn_off">
            <img src="../../static/images/webo.png" alt="">
            <p>微博</p>
          </div>
        </div>
      </div>
      <a href="javascript:;" @click="trans" class="show_list">
        <img src="../../static/images/open.png" alt="打开按钮">
      </a>
      <model v-if="show"></model>
      <registered v-if="re"></registered>
      <header class="x_fuzzy">
        <!--search-->
        <div class="search_form clearfix">
          <input type="text" placeholder="请输入关键字..." id="search" @keydown="keySearch($event)" v-model.trim="seamsg">
          <div id="key" @click="doSearch">
            <img src="../../static/images/search2.png">
          </div>
        </div>
        <nav class="x_header clearfix">
          <div class="x_logo"><img src="../../static/images/logo.png" alt="test"></div>
          <ul>
            <li>首页</li>
            <li @click="jump">Dry goods</li>
          </ul>
          <a href="javascript:;" class="login" @click="addModel">登录</a>
          <a href="javascript:;" class="login registered" @click="showRe">注册</a>
        </nav>
        <div class="tell clearfix">
          <div class="to_left"  @click="toLeft">
            <img src="../../static/images/toleft.png" alt="">
          </div>
          <div class="to_right" @click="toRight">
            <img src="../../static/images/toright.png" alt="">
          </div>
          <ul>
            <li v-for="(item,index) in name" v-if="num==index">
              {{item}}
            </li>
          </ul>
        </div>
      </header>
      <ul class="module clearfix">
        <li v-for="(de,index) in name" class="mo_item" @click="change(index)">
            {{de}}
        </li>
        <li v-for="item in details" class="mo_item">
          {{item}}
        </li>
      </ul>
      <div class="controll clearfix">
        <div class="con_item">
          <div class="line"></div>
          <div class="line2"></div>
          <div class="line3"></div>
          <div class="line4"></div>
          <p>Jade代码片段</p>
          <pre>
            doctype html

              html(lang='en')

              head

                title Example

                script

                  if (foo) {

                    bar();

                  } else {

                    baz();

                  }
          </pre>
        </div>
        <div class="con_item">
          <div class="line"></div>
          <div class="line2"></div>
          <div class="line3"></div>
          <div class="line4"></div>
          <p>stylus代码片段</p>
          <pre>
           border-radius()

            -webkit-border-radius arguments

            -moz-border-radius arguments

            border-radius arguments


          body

            font 12px Helvetica, Arial, sans-serif

          a.button

            border-radius 5px
          </pre>
        </div>
        <div class="con_item">
          <div class="line"></div>
          <div class="line2"></div>
          <div class="line3"></div>
          <div class="line4"></div>
          <p>vue-cli</p>
          <pre>
           通过vue学习ES6语法

            <span>var</span> us go

            to  study some <span>import</span>

            <span>=> promise</span> es6
          </pre>
        </div>
      </div>
      <div class="change d_jump">
        <router-link to="/jade" class="module_item"><img src="../../static/images/j1.png" alt="">你好!Jade</router-link>
        <router-link to="/stylus" class="module_item"><img src="../../static/images/s1.png" alt="">你好!stylus</router-link>
        <router-link to="/cli" class="module_item"><img src="../../static/images/vuejs.png" alt="">你好!vue-cli</router-link>
      </div>
      <router-view></router-view>
      <footer class="footer">
        <div class="inner clearfix">
          <div class="pic">
            <img src="../../static/images/logo.png" alt="">
          </div>
          <ul>
            <li>联系和关注</li>
            <li><img src="../../static/images/github.png"><a href="https://github.com/mr-xkk" target="_blank" style="color:#fff;letter-spacing:2px;text-decoration:underline;">github地址,源码在此,还有更多项目!</a></li>
            <li><img src="../../static/images/mail.png">mail:mr_xkk@163.com</li>
            <li><img src="../../static/images/qq2.png">QQ:841-999-283</li>
          </ul>
          <div class="back_top"  @click="top">
            <img src="../../static/images/top.png" alt="">
          </div>
        </div>
      </footer>
    </section>
  </div>    
</template>

<script type="es6" src="./hello.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
