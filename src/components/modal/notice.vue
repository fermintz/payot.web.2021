<template>
  <v-dialog 
    v-model="visible"
    width="100%"
    max-width="600"
  >
    <div class="modal">
      <div class="modal-cont">
        <img src="/img/main_notice.png" />
        <v-btn text @click="move">
          <label>헛걸음방지 시스템 체험하기</label>
          <v-icon>mdi-chevron-right-circle-outline</v-icon>
        </v-btn>
      </div>
      <div class="modal-footer">
        <v-btn text @click="invisible">하루동안 보지 않기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    if (this.$store.state.invisibleCheckTime) {
      const overTime = Date.now() - this.$store.state.invisibleCheckTime;
      this.visible = overTime > 1000 * 60 * 24;
    }
  },
  methods: {
    move() {
      window.open("http://state.coin-machine.com/151", "_new");
    },
    invisible() {
      this.$store.commit("SET_ALERT_MODAL_VISIBLE", Date.now());
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  .modal-head {
    position: sticky;
    top: 0px;
    height: 60px;
    border-bottom: 1px solid #e2e2e2;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    z-index: 2;

    h3 {
      font-size: 18px;
    }
  }

  .modal-cont {
    img {
      width: 100%;
      display: block;
    }

    .v-btn {
      display: Flex;
      align-items: center;
      width: 100%;
      height: 90px;
      font-size: 22px;
      color: #fff;
      background: #3a2085;
      border-radius: 0px;
      font-weight: 400;

      .v-icon {
        margin-left: 20px;
      }
    }
  }

  .modal-footer {
    width: 100%;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e2e2e2;
    height: 60px;
    padding: 0 15px;
    background: #fff;
    z-index: 2;

    .v-btn {
      background: #fff;
      min-height: 36px;
      padding: 0px 20px;
      border-radius: 5px;
      margin-left: 10px;
      border: 1px solid #c2c2c2;
      font-size: 12px;
      font-weight: 400;
    }

    .v-btn:last-child {
      border: 0;
      color: #292929;
    }
  }
}
</style>
