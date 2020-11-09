<template>
<div>
  <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
    <div class="customCardFront">
      <img src="http://localhost:8001/kartu/static/cardtemplate/sekolah_12/blkg.png/" width="100%" height="100%">
       
    </div>
  </div>
</div>

</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            nama:"",
        }
    },
    async asyncData() {
        const {data} = await axios.get('http://localhost:8001/api/datamurid/12')
        return {datamurids: data}
    }
}
</script>

<style>
  .customCardFront {
  height: 310px;
  width: 488.573px;
  float: left;
  margin: 5px 5.67px;
  position: relative;
  }

  .info{
      display: block;
    position: absolute;
    /* width: 488.573px; */
    top: 82px;
    font-family: Ubuntu;
    right: 58px;
    z-index: 1;
    font-size: 15px;
    text-align: right;
    border: 22px;
    color: white;
    font-weight: bold;
    line-height: 1.6;
    width: 246px;
    text-transform: uppercase;
  }


  .nama{
      margin-bottom: 10px;
  }

.nama_alter{
    font-size: 11px;
    margin-top: 6px;
    margin-bottom: 10px;
}

.idcard{
    margin-bottom:10px;
}

.alamat_alter{
    font-size:11px;
}

.ttl{
    margin-bottom:10px;
}

.ttl_alter{
    font-size:11px;
    margin-bottom:-6px;
    margin-top:16px;
}

  .avatar{
    width: 150px;
    position: absolute;
    z-index: -1;
    top: 101px;
    left: 29px;
  }
</style>
