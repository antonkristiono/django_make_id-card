<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
            <div class="customCardFront">
                <!-- <img
                     :src="`http://localhost:8001/kartu/static/foto/sekolah_pol2/${datamurid.IdImage}.png/`"
                     width="100%"
                     height="100%"
                     /> -->

                <img
                    src="http://localhost:8001/kartu/static/foto/sekolah_pol2/1.png/"
                    width="100%"
                    height="100%"
                />
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
         const { data } = await axios.get("http://localhost:8001/api/datamurid/22");
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
     right: 208px;
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
     font-size: 14px;
     margin-top: 40px;
     margin-bottom: 3px;
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
