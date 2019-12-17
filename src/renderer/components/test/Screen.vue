<template>
  <div>
    <div id="gameContainer">
      <div id="menuLeft">
        <div
          v-for="quadrant in menuLeftQuadrants"
          v-if="quadrant.component"
          :id="quadrant.name"
          class="chiruzUnityMenu"
          :style="'width: ' + (chiruzUnity * quadrant.chiruzWidth) + 'px; height: ' + (chiruzUnity * quadrant.chiruzHeight) + 'px; position: absolute; top: ' + quadrant.top + 'px; left: ' + quadrant.left + 'px'">
          <component v-bind:is="quadrant.component"></component>
        </div>
      </div>
      <div id="screen">
        <div
          v-for="quadrant in screenQuadrants"
          v-if="quadrant.component"
          :id="quadrant.name"
          class="chiruzUnityScreen"
          :style="'width: ' + (chiruzUnity * quadrant.chiruzWidth) + 'px; height: ' + (chiruzUnity * quadrant.chiruzHeight) + 'px; position: absolute; top: ' + quadrant.top + 'px; left: ' + quadrant.left + 'px'">
          <component v-bind:is="quadrant.component"></component>
        </div>
      </div>
      <div id="menuRight">
        <div
          v-for="quadrant in menuRightQuadrants"
          v-if="quadrant.component"
          :id="quadrant.name"
          class="chiruzUnityMenu"
          :style="'width: ' + (chiruzUnity * quadrant.chiruzWidth) + 'px; height: ' + (chiruzUnity * quadrant.chiruzHeight) + 'px; position: absolute; top: ' + quadrant.top + 'px; left: ' + quadrant.left + 'px'">
          <component v-bind:is="quadrant.component"></component>
        </div>
      </div>
    </div>


    <v-btn class="ma-2" @click="speechToText" tile outlined color="success">
      <v-icon left>mdi-pencil</v-icon> Parlar
    </v-btn>
    <span v-html="lastSaid" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ipcRenderer } from 'electron'
import { VIcon, VBtn } from 'vuetify/lib'
import Barberia from './ants/Barberia'
import Bar from './ants/Bar'

export default {
  name: 'Screen',
  components: {VIcon, VBtn, Barberia, Bar},

  props: [
    'quadrantsComponents'
  ],

  data () {
    return {
      lastSaid: 'Nothing yet.'
    }
  },

  computed: {
    ...mapGetters('player', {
      playerName: 'name'
    }),

    ...mapGetters('screen', {
      chiruzUnity: 'chiruzUnity',
      chiruzResolutionAugment: 'chiruzResolutionAugment',
      chiruzVision: 'chiruzVision',
      chiruzVisionAugment: 'chiruzVisionAugment',
      resolution: 'resolution',
      resolutionX: 'resolutionX',
      resolutionY: 'resolutionY',
      timPerAction: 'timPerAction',
      actionsPerCycle: 'actionsPerCycle',
      defaultVision: 'defaultVision',
      menuWidth: 'menuWidth'
    }),

    menuLeftQuadrants () {
      let initPositionX = 0
      let initPositionY = 0
      let quadrantX = 1
      let quadrantY = 1
      let currentPositionX = initPositionX
      let currentPositionY = initPositionY
      let currentMenuContainer = ''
      let quadrants = {}

      while (currentPositionY < this.resolutionY) {
        while (currentPositionX < initPositionX + this.menuWidth) {
          currentMenuContainer = 'x' + quadrantX + 'y' + quadrantY
          quadrants[currentMenuContainer] = {}
          quadrants[currentMenuContainer].x = quadrantX
          quadrants[currentMenuContainer].y = quadrantY
          quadrants[currentMenuContainer].top = currentPositionY
          quadrants[currentMenuContainer].left = currentPositionX
          quadrants[currentMenuContainer].name = currentMenuContainer
          quadrants[currentMenuContainer].component = (this.quadrantsComponents.menuLeft[currentMenuContainer]) ? this.quadrantsComponents.menuLeft[currentMenuContainer].component : null
          quadrants[currentMenuContainer].chiruzHeight = (this.quadrantsComponents.menuLeft[currentMenuContainer]) ? this.quadrantsComponents.menuLeft[currentMenuContainer].chiruzHeight : null
          quadrants[currentMenuContainer].chiruzWidth = (this.quadrantsComponents.menuLeft[currentMenuContainer]) ? this.quadrantsComponents.menuLeft[currentMenuContainer].chiruzWidth : null
          quadrantX += 1
          currentPositionX += this.chiruzUnity
        }
        quadrantX = 1
        quadrantY += 1
        currentPositionX = initPositionX
        currentPositionY += this.chiruzUnity
      }

      return quadrants
    },

    screenQuadrants () {
      let initPositionX = this.menuWidth
      let initPositionY = 0
      let quadrantX = 1
      let quadrantY = 1
      let currentPositionX = initPositionX
      let currentPositionY = initPositionY
      let currentContainer = ''
      let quadrants = {}

      while (currentPositionY < this.resolutionY) {
        while (currentPositionX < initPositionX + this.resolutionY) {
          currentContainer = 'x' + quadrantX + 'y' + quadrantY
          quadrants[currentContainer] = {}
          quadrants[currentContainer].x = quadrantX
          quadrants[currentContainer].y = quadrantY
          quadrants[currentContainer].top = currentPositionY
          quadrants[currentContainer].left = currentPositionX
          quadrants[currentContainer].name = currentContainer
          quadrants[currentContainer].component = (this.quadrantsComponents.screen[currentContainer]) ? this.quadrantsComponents.screen[currentContainer].component : null
          quadrants[currentContainer].chiruzHeight = (this.quadrantsComponents.screen[currentContainer]) ? this.quadrantsComponents.screen[currentContainer].chiruzHeight : null
          quadrants[currentContainer].chiruzWidth = (this.quadrantsComponents.screen[currentContainer]) ? this.quadrantsComponents.screen[currentContainer].chiruzWidth : null
          quadrantX += 1
          currentPositionX += this.chiruzUnity
        }
        quadrantX = 1
        quadrantY += 1
        currentPositionX = initPositionX
        currentPositionY += this.chiruzUnity
      }

      return quadrants
    },

    menuRightQuadrants () {
      let initPositionX = this.menuWidth + this.resolutionY
      let initPositionY = 0
      let quadrantX = 1
      let quadrantY = 1
      let currentPositionX = initPositionX
      let currentPositionY = initPositionY
      let currentMenuContainer = ''
      let quadrants = {}

      while (currentPositionY < this.resolutionY) {
        while (currentPositionX < initPositionX + this.menuWidth) {
          currentMenuContainer = 'x' + quadrantX + 'y' + quadrantY
          quadrants[currentMenuContainer] = {}
          quadrants[currentMenuContainer].x = quadrantX
          quadrants[currentMenuContainer].y = quadrantY
          quadrants[currentMenuContainer].top = currentPositionY
          quadrants[currentMenuContainer].left = currentPositionX
          quadrants[currentMenuContainer].name = currentMenuContainer
          quadrants[currentMenuContainer].component = (this.quadrantsComponents.menuRight[currentMenuContainer]) ? this.quadrantsComponents.menuRight[currentMenuContainer].component : null
          quadrants[currentMenuContainer].chiruzHeight = (this.quadrantsComponents.menuRight[currentMenuContainer]) ? this.quadrantsComponents.menuRight[currentMenuContainer].chiruzHeight : null
          quadrants[currentMenuContainer].chiruzWidth = (this.quadrantsComponents.menuRight[currentMenuContainer]) ? this.quadrantsComponents.menuRight[currentMenuContainer].chiruzWidth : null
          quadrantX += 1
          currentPositionX += this.chiruzUnity
        }
        quadrantX = 1
        quadrantY += 1
        currentPositionX = initPositionX
        currentPositionY += this.chiruzUnity
      }

      return quadrants
    }
  },

  mounted () {
    this.$store.dispatch('player/setName', 'Valentí')

    this.initializeGrid()
  },

  methods: {
    initializeGrid () {
      let gameContainer = document.getElementById('gameContainer')
      gameContainer.style.width = this.resolutionX + 'px'
      gameContainer.style.height = this.resolutionY + 'px'
      gameContainer.style.margin = '0 auto'
      gameContainer.style.position = 'relative'

      this.screenQuadrants.x10y1.component = 'Barberia'
    },

    speechToText () {
      this.lastSaid = ipcRenderer.sendSync('sync-speechToText')
    }
  }
}
</script>

<style type="scss">
  .chiruzUnityMenu {}
  .chiruzUnityScreen {}
</style>