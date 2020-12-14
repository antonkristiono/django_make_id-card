<template>
  <div>
    <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
      <div class="customCardFront">
        <img   src="http://localhost:8001/kartu/static/cardtemplate/sekolah_20/blkg.png/"
          width="100%"
          height="100%"
        />
        <!-- <div> -->
        <!--   <img -->
        <!--     class="avatar" -->
        <!--     :src="`http://localhost:8001/kartu/static/foto/sekolah_tk__imamsyafii/${datamurid.IdImage}.png`" -->
        <!--   /> -->
        <!-- </div> -->
<!--         <div class="info">
          <div v-if="datamurid.nama.length > 2">
            <p class="nama">{{ datamurid.nama }}</p>
          </div>
          <div v-else>
            <p class="nama_alter"> ____________________________</p>
          </div>
        </div>
 -->        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        nama: "",
      };
    },
    async asyncData() {
      const { data } = await axios.get("http://localhost:8001/api/datamurid/20");
      return { datamurids: data };
    },
  };
</script>

<style>
.customCardFront {
  height: 310px;
  width: 488.573px;
  float: left;
  margin: 5px 5.67px;
  position: relative;
}

.info {
  display: block;
  position: absolute;
  /* width: 488.573px; */
  bottom: 133px;
  /* top: 23px; */
  font-family: Teko;
  right: 43px;
  z-index: 1;
  font-size: 15px;
  text-align: left;
  border: 22px;
  color: black;
  line-height: 1.6;
  width: 246px;
  text-transform: uppercase;
  transform: rotate(90deg);
}

.nama {
  font-size: 41px;
  margin-bottom: 10px;
  font-weight: bold;
  line-height: 35px;
}

.nama_alter {
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: 35px;
  /* font-weight: bold; */
}

.idcard {
  margin-top: -5px;
  margin-bottom: -6px;
}

.alamat_alter {
  font-size: 11px;
}

.ttl {
  margin-bottom: 10px;
}

.ttl_alter {
  font-size: 11px;
  margin-bottom: -6px;
  margin-top: 16px;
}

.avatar {
  width: 114px;
  position: absolute;
  z-index: -1;
  top: 123px;
  left: 99px;
}
</style>
