<template>
  <div class="speed-audio-wrap">
    <el-button
      @click="getrecordUrl"
      type="text"
      v-if="!audioSrc"
      class="showplay">
      <i class="el-icon-caret-right arr"></i>
    </el-button>
    <div 
      class="showrecord"
      v-show="audioSrc"
      v-loading="loading">
      <el-button
        type="primary"
        size="mini"
        @click="playSpeed"
      >
        {{cspeed}}
      </el-button>
      <audio
        ref="audio"
        class="audio"
        controls
        autoplay
        style="width:100%; height: 24px;"
        :src="audioSrc"
        >
        Your browser does not support the audio element.
      </audio>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      cspeed: 1,
      count: 0,
      speedlist: [1, 1.25, 1.5, 2],
      audioSrc: '',
    }
  },
  props: {
    url: {
      type: String,
      required: true
    },
    businessUid: {
      type: [String, Number],
      required: true
    }
  },
  watch: {
    'url'(val) {
      if (val) {
        this.audioSrc='' //初始化 重新请求src
      }
    }
  }, 
  methods: {
    getrecordUrl() {
      this.loading = true
      if (!this.url) {
        this.$message.error('获取录音失败！')
      }

      this.$http.post('xxx', {
        recordFile: this.url
      },).then(data => {
        if (data.data.url) {
          this.audioSrc = data.data.url
          this.$refs['audio'].play()
        }
      }).catch(err => {
        this.$message.error('获取录音失败！')
        throw new Error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    playSpeed() {
      this.count += 1

      if (this.count > this.speedlist.length - 1) {
        this.count = 0
      }

      this.cspeed = this.speedlist[this.count]
      this.$refs['audio'].playbackRate = this.cspeed
      this.$refs['audio'].play()
    }
  }

}
</script>

<style lang="sass" scoped>
  .speed-audio-wrap
    display: flex
    flex-direction: column
    padding: 0 14px
    .showplay
      padding: 0
      text-align: center
      width: 30px
      margin: 0 auto
      font-size: 26px
    .showrecord
      display: flex
    .audio
      margin-left: 10px
</style>

