<template>
  <div class="kiosk-map contents">
    <div class="map_control">
      <div class="map-search">
        <h4>키오스크 설치매장 검색</h4>
        <div class="input-box">
          <input
            type="text"
            v-model="keyword"
            placeholder="지역명으로 검색"
            @keyup.enter="(e) => $refs.kakaomap.searchPlace(e.target.value)"
          />
          <v-btn icon @click="$refs.kakaomap.searchPlace(keyword)">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <div class="kakao-map">
      <kakao-map
        :center="[37.5536472, 126.9669724]"
        :level="6"
        :shop="shop"
        :marker="marker"
        ref="kakaomap"
      />    
    </div>
    
  </div>
</template>

<script>
import KakaoMap from "@/components/map.vue";
import place from "@/assets/docs/place.json";

export default {
  components: { KakaoMap },
  data() {
    return {
      map: null,
      keyword: "",
      shop: place,
      marker: {
        url: "./img/maker.png",
        widht: 33,
        height: 36,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="stylesheet" src="./kiosk-map.scss" />
