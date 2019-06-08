<template>
  <div class="player">
      <div class="current">
        <img
            src=""
            alt=""
          />
          <div>
            <span>titulo da musica</span>
            <small>autor da musica</small>
          </div>
      </div>
      <div class="progress">
        <div class="controls">
          <button>
            <img src="../assets/images/shuffle.svg" alt="Shuffle"/>
          </button>
          <button>
            <img src="../assets/images/backward.svg" alt="Backward"/>
          </button>
          <button>
            <img src="../assets/images/pause.svg" alt="Pause"/>
          </button>
          <button>
            <img src="../assets/images/play.svg" alt="Play"/>
          </button>
          <button>
            <img src="../assets/images/forward.svg" alt="Forward"/>
          </button>
        </div>
        <div class="time">
          <div class="progress-slider">
            <VueSlider :tooltip="'none'"/>
          </div>
          <span>0:00</span>
        </div>
      </div>
      <div class="volume">
        <img src="../assets/images/volume.svg" alt="volume"/>
        <VueSlider  :tooltip="'none'" style="width: 100%;"/>
      </div>
    </div>

</template>

<script>
import VueSlider from 'vue-slider-component'
export default {
  components: {
    VueSlider
  }
}
</script>
