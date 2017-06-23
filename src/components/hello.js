  import model from './model.vue'
  import registered from './registered.vue'
  import qr from './share/share.vue'
export default {
  data(){
    return {
      name: [
        'Jade',
        'stylus',
        'vue-cli'
      ],
      details: [
        'Jade 是一个高性能的模板引擎',
        'Stylus让CSS也能编程',
        'Vue是一套构建用户界面的渐进式框架'
      ],
      num: 0,
      show:false,
      re:false,
      place:'',
      ve:'',
      share_move:'',
      show_share:false,
      seamsg:''
    }
  },
  created: function () {
    var _this = this;

    function run() {
      _this.num == _this.details.length - 1 ? _this.num = 0 : _this.num++;
    }

    setInterval(run, 5000);
    this.$router.push('jade');
  },
  methods: {
    toLeft: function () {
      this.num == 0 ? this.num = 2 : this.num--;
    },
    toRight: function () {
      this.num == this.details.length - 1 ? this.num = 0 : this.num++;
    },
    addModel: function () {
      switch(this == true)
      {
        case 1:this.show = false;
        break;
      }
      this.show = !this.show
    },
    showRe: function () {
      if(this == true){
        this.re = false
      }
      this.re = !this.re
    },
    jump: function () {
      var jump = document.querySelectorAll('.d_jump')[0];
      var total = jump.offsetTop;
      var distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      // 获取需要滚动的距离
      var step = total / 50;
      if (total > distance) {
        smoothDown()
      } else {
        var newTotal = distance - total;
        step = newTotal / 50;
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = distance;
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
          window.pageYOffset = total
        }
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = distance;
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
          window.pageYOffset = total;
        }
      }
    },
    trans:function () {
      this.place = 'translateX(0px)';
    },
    back:function () {
      this.place = 'translateX(-300px)';
      this.incloud = 'translateX(20px)';
    },
    top:function () {
        this.ve = '6666%';
        $('body,html').animate({scrollTop:0},3000);
        $('.back_top').animate({bottom: this.ve},8000);
        if(this.ve=='6666%'){
          $('.back_top').animate({bottom: 0},10);
        }
    },
    change:function (n) {
     let removeHeight = $('.con_item').eq(n).offset().top-$('.show_list').height();
     $('body,html').animate({scrollTop:removeHeight},1000)
    },
    share(){
        this.share_move = 'translateX(0)';
    },
    share_close(){
      this.share_move = 'translateX(200px)';
    },
    turn_off(){
      this.show_share == true ? this.show_share = false : this.show_share = true;
    },
    doSearch(){
      function clearSelection() {
        if ($('#search').val() == '') {
          alert('请输入内容');
          return false;
        }
        $('p').each(function () {
          //找到所有highlight属性的元素；
          $(this).find('.highlight').each(function () {
            $(this).replaceWith($(this).html());//将他们的属性去掉；
          });
        });
      }
      clearSelection();
      var searchText = $('#search').val();
      var regExp = new RegExp(searchText, 'g');
      var content = $('.j_card_cloud').text();
      var flag = 0;
      if (!regExp.test(content)) {
        alert("没有找到匹配的内容/(ㄒoㄒ)/~~");
        $('#search').val('');
        return false;
      }
      $('.j_card_cloud').find('p').each(function () {
        var html = $(this).html();
        var newHtml = html.replace(regExp, '<i class="highlight">' + searchText + '</i>');
        $(this).html(newHtml);
        flag = 1;
        $('#search').val('');
      });
      if (flag == 1) {
        let removeHeight = $('.highlight').eq(0).offset().top;
        $('body,html').animate({scrollTop: removeHeight}, 1000)
      }
    },
    keySearch(ev){
        if(ev.keyCode==13){
            this.doSearch();
        }
    }
  },
  components: {
      model,
      registered,
      qr
  }
};