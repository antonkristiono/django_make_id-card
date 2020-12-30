<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
            <div class="customCardFront">
                <img   src="http://localhost:8001/kartu/static/cardtemplate/sekolah_23/rq_blkg.png/"
                       width="100%"
                       height="100%"
                />
                <!-- <div>
                     <img
                     class="avatar"
                     :src="`http://localhost:8001/kartu/static/foto/sekolah_rd2/${datamurid.IdImage}.${datamurid.fotoExtension}`"
                     />
                     </div>
                     <div class="info">
                     <p class="nama">{{ datamurid.nama }}</p>
                     <p class="number">{{datamurid.IdCard}} </p>
                     <p class="ttl">{{datamurid.TempatLahir}}, {{datamurid.TanggalLahir}}</p>
                     <p class="alamat">{{datamurid.alamat}}</p>
                     </div> -->
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
         const { data } = await axios.get("http://localhost:8001/api/datamurid/23");
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
     bottom: 90px;
     /* top: 23px; */
     font-family: ubuntu;
     right: 208px;
     z-index: 1;
     font-size: 15px;
     text-align: center;
     border: 22px;
     color: black;
     line-height: 1.6;
     width: 246px;
     text-transform: uppercase;
     transform: rotate(90deg);
 }

 .nama {
     font-size: 15px;
     margin-bottom: -8px;
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

 .alamat{
     line-height:19px;
 }

 .alamat_alter {
     font-size: 11px;
 }

 .ttl {
     margin-bottom: -2px;
 }

 .ttl_alter {
     font-size: 11px;
     margin-bottom: -6px;
     margin-top: 16px;
 }

 .avatar {
     width: 135px;
     position: absolute;
     z-index: -1;
     top: 67px;
     left: 225px;
     transform: rotate(90deg);
 }
</style>
