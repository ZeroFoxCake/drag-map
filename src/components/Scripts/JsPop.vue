<template>

  <el-dialog
    title="JS 增强"
    :visible.sync="state"
    width="600px"
    center
  >
  
    <div class="editor">
      <codemirror ref="editor" @change="log('change', $event)" v-model="code" :options="cmOptions"></codemirror>
    </div>
  
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="state = false">取 消</el-button>
      <el-button size="mini" type="primary" @click="runScript">确 定</el-button>
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
      open () {
        this.state = true
      },
  
      runScript () {
        this.state = false
        try {
          eval(this.code)
        } catch (error) {
          this.$message.error('执行错误！')
        }
      }
  
    }
  }
  </script>
