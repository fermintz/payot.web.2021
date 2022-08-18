<template>
  <div class="map">
    <div class="overlay_box">
      <strong class="shop_name"></strong>
      <span class="shop_address"></span>    
    </div>
  </div>
</template>

<script>
export default {
  props: ["center", "level", "shop", "marker"],
  data() {
    return {
      map: {},
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.inital();
    } else {
      this.kakaoScript();
    }
  },
  methods: {
    inital() {
      const mapContainer = document.getElementsByClassName("map")[0];
      const [lat, lng] = this.center;

      this.map = new kakao.maps.Map(mapContainer, {
        center: new kakao.maps.LatLng(lat, lng),
        level: this.level,
      });


      this.shop.forEach((item) => {
        const { url, width, height } = this.marker;
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(item.points[0], item.points[1]),
          image: new kakao.maps.MarkerImage(
            url,
            new kakao.maps.Size(width, height)
          ),
        });

        const overlayBox = document.querySelector('.overlay_box')
        const shopName = document.querySelector('.shop_name')
        const shopAddress = document.querySelector('.shop_address')
        shopName.innerHTML = item.name;
        shopAddress.innerHTML = item.address

        const overlay = new kakao.maps.CustomOverlay({
          content: overlayBox.outerHTML,
          map:this.map,
          position:marker.getPosition(),
         })        

        kakao.maps.event.addListener(marker, "click", () => {
          overlayBox.classList.add('on')
          overlay.setMap(this.map);
        });

        kakao.maps.event.addListener(this.map, "click", () => {
          overlay.setMap(null);
        });
        
        overlay.setMap(null);
        marker.setMap(this.map);
        // overlay.setMap(null) 
        
      });

      this.userLocation();
    },


    // 키워드검색
    searchPlace(key) {
      if (key.length === 0) {
        window.alert("키워드를 입력해주세요");
        return;
      }

      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(key, (data, status) => {
        if (status !== "OK") {
          window.alert("잘못된 키워드입니다");
          return;
        }

        console.log(data)

        this.map.setCenter(new kakao.maps.LatLng(data[0].y, data[0].x));
        this.map.setLevel(5)
      });
    },

    //유저 위치에 따른 center 변화
    userLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;

          this.map.setCenter(new kakao.maps.LatLng(lat, lon));
        });
      }
    },

     kakaoScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.inital);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8180df1c5b5b6f3d47b1b60dfe933654&libraries=services";
      document.head.appendChild(script);
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  min-height:700px;
}

.overlay_box{
  position: relative;
  bottom:80px;
  left:16.5px;

  background:#292929;
  color:#fff;
  border-radius:10px;
  padding:15px;
 

  strong{
    color:#fff;
    font-size:15px;
    display:block;
  }

  span{
    font-size:13px;
    color:#ccc;
    display:block;
  }
}


@media screen and(max-width:480px) {
  .map{
    min-height:500px;
  }
  
}


</style>
