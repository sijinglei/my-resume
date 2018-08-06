<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from './components/StyleEditor'
import ResumeEditor from './components/ResumeEditor'
import './assets/reset.css'

export default {
  name: 'app',
  components: {
    StyleEditor,
    ResumeEditor
  },
  data() {
    return {
      interval: 50,
      currentStyle: '',
      enableHtml: false,
      fullStyle: [ `/*
* hi，大家好，我是司惊雷！
* 初次见面以这样的方式来展现自己的简历，希望您能抽出您宝贵的时间认真阅读。
* 那么先说一下我简历形成的思路，大体如下：
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px);
          transform: rotateY(10deg) translateZ(-100px);
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 4em; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
  transform:rotateY(-10deg);
  -webkit-transform:rotateY(-10deg);
}
/* 好了，我开始写简历了 */


`,
        `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
        ,
        `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
      currentMarkdown: '',
      fullMarkdown: `Hi,大家好！我叫司惊雷（和百度[惊雷算法](http://www.yinhuafeng.cn/baidu/394.html)没关系☺☺☺）。
----

资深前端工程师，目前就职于中国人力资源开发网，主要负责前端开发工作。
具有互联网金融及电商平台项目开发经验，熟悉java、C#等后台语言，并熟练运用前端各种流行框架~~


前端技能
----

1. 精通HTML，CSS，JavaScript等web前端开发技术，能手写符合W3C标准的前端代码；
2. 精通jQuery库和bootstrap、H-ui等前端UI框架的使用，快速开发页面效果及实现页面交互；
3. 熟练掌握VueJS，React等基于MVVM模式的单页面应用开发框架；
4. 熟练使用swiper，zepto，animate.css等插件，快速开发移动端页面效果；
5. 熟练使用Nodejs；
6. 熟练 HTML5，CSS3 各种新技术；
7. 熟悉后端语言 java、asp.net及mysql、sqlserver数据库的使用；
8. 熟悉模块化开发：RequireJS\ejs;
9. 熟悉svn，git代码版本管理工具；
10. 熟练运用构建/打包管理工具：npm，yarn，webpack；
11. 熟悉数据构建：Mock.js；


工作经历
----

1. 中国人力资源开发网[链接](http://www.chinahrd.net/)
2. 深圳赛飞（金服）软件有限公司[链接](https://www.tronker.cn/)
3. 深圳东方在线电子商务有限公司
4. 深圳明源软件股份有限公司

链接
----

* [GitHub](https://github.com/sijinglei)
* [我的文章](https://juejin.im/post/5b568730f265da0fa1222a4c)
* [个人详细简历](http://www.500d.me/cvresume/0928728665/)

`
    }
  },
  created() {
    this.makeResume()
  },

  methods: {
    makeResume: async function () {
      await this.progressivelyShowStyle(0)
      await this.progressivelyShowResume()
      await this.progressivelyShowStyle(1)
      await this.showHtml()
      await this.progressivelyShowStyle(2)
    },
    showHtml: function () {
      return new Promise((resolve, reject) => {
        this.enableHtml = true
        resolve()
      })
    },
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        let interval = this.interval
        let showStyle = (async function () {
          let style = this.fullStyle[n]
          if (!style) { return }
          // 计算前 n 个 style 的字符总数
          let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
          let prefixLength = length - style.length
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength
            let char = style.substring(l, l + 1) || ' '
            this.currentStyle += char
            if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom()
              })
            }
            setTimeout(showStyle, interval)
          } else {
            resolve()
          }
        }).bind(this)

        showStyle()
      })
    },
    progressivelyShowResume() {
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length
        let interval = this.interval
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
            let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
            let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
            console.log(prevChar)
            if (prevChar === '\n' && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom())
            }
            setTimeout(showResume, interval)
          } else {
            resolve()
          }
        }
        showResume()
      })
    }
  }
}

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100vh;
}

* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
</style>
