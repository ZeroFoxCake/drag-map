<template>

<el-dialog
  title="JSON 配置"
  :visible.sync="state"
  width="600px"
  center
>

  <div class="editor">
    <codemirror ref="editor" @change="log('change', $event)" v-model="code" :options="cmOptions"></codemirror>
  </div>

  <span slot="footer" class="dialog-footer">
    <el-button size="mini" @click="state = false">取 消</el-button>
    <el-button size="mini" type="primary" @click="codeChange">确 定</el-button>
  </span>
</el-dialog>

</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'

export default {
  inject: ['setCache'],
  data () {
    return {
      state: false,
      code: '',
      cmOptions: {
        // codemirror options
        tabSize: 2,
        mode: {
          name: 'javascript',
          json: true
        },
        theme: 'base16-dark',
        line: true,
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers']
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  methods: {
    // 打开
    open (cache) {
      this.code = JSON.stringify(cache, null, '\t')
      this.state = true
    },

    async codeChange () {
      this.state = false
      try {
        const res = JSON.parse(this.code)
        this.setCache(res)
      } catch (error) {
        console.log(error)
        this.$message.error('格式错误！')
      }
    }

  }
}
</script>

<style>

</style>