<template>
  <div class="speed-audio-wrap">
    <el-button
      type="primary"
      size="small"
      @click="playSpeed"
    >
      {{cspeed}}
    </el-button>
    <audio
      ref="audio"
      class="audio"
      controls 
      style="width:100%; height: 24px;"
      :src="url"
      >
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cspeed: 1,
      count: 0,
      speedlist: [1, 1.25, 1.5, 2] //倍速list
    }
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    playSpeed() {
      this.count += 1

      if (this.count > this.speedlist.length - 1) {
        this.count = 0
      }

      this.cspeed = this.speedlist[this.count]
      this.$refs['audio'].playbackRate = this.cspeed //重置倍率
      this.$refs['audio'].play()
    }
  }

}
</script>

<style lang="sass" scoped>
  .speed-audio-wrap
    display: flex
    align-items: center
    .audio
      margin-left: 10px
</style>

