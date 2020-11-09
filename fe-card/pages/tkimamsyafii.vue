<template>
  <div>
    <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
      <div class="customCardFront">
        <img
          src="http://localhost:8001/kartu/static/cardtemplate/sekolah_15/DPN.png/"
          width="100%"
          height="100%"
        />
        <div>
          <img
            class="avatar"
            :src="`http://localhost:8001/kartu/static/foto/sekolah_tk__imamsyafii/${datamurid.IdImage}.png`"
          />
        </div>
        <div class="info">
          <div v-if="datamurid.nama.length < 22">
            <p class="nama">{{ datamurid.nama }}</p>
          </div>
          <div v-else>
            <p class="nama_alter">{{ datamurid.nama }}</p>
          </div>

          <p>TK IT IMAM SYAFII 2 PEKANBARU</p>

          <p class="idcard">NIS : {{ datamurid.IdCard }}</p>
          <p class="idcard">VA : {{ datamurid.other }}</p>
        </div>
        </div>
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
    const { data } = await axios.get("http://localhost:8001/api/datamurid/15");
    return { datamurids: data };
  },
};
</script>

<style>
.customCardFront {
  height: 488.573px;
  width: 310px;
  float: left;
  margin: 5px 5.67px;
  position: relative;
}

.info {
  display: block;
  position: absolute;
  /* width: 488.573px; */
  top: 23px;
  font-family: Ubuntu;
  right: 30px;
  z-index: 1;
  font-size: 15px;
  text-align: center;
  border: 22px;
  color: black;
  line-height: 1.6;
  width: 246px;
  text-transform: uppercase;
}

.nama {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.nama_alter {
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: 10px;
  font-weight: bold;
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
