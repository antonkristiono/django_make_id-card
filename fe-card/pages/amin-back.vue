<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
            <div v-if="datamurid.cetak === false" class="customCardFront">
                <div v-if='datamurid.kategori === "smp"'>
                <img src="http://localhost:8001/kartu/static/cardtemplate/sekolah_30/blkgAminSMP.png/" width="100%" height="100%" />
                </div>
                <div v-else>
                <img src="http://localhost:8001/kartu/static/cardtemplate/sekolah_30/blkgAminSD.png/" width="100%" height="100%" />
                </div>
                <!-- <div>
                     <img
                     :src="`http://localhost:8001/kartu/static/foto/sekolah_amin/${datamurid.IdImage}.${datamurid.fotoExtension}`"
                     class="avatar"
                     alt=""
                     />
                     </div>
                     <div class="info">
                     <div v-if="datamurid.nama.length < 23">
                     <p class="nama">{{ datamurid.nama }}</p>
                     </div>
                     <div v-else>
                     <p class="nama_alter">{{ datamurid.nama }}</p>
                     </div>
                     <p class="idcard">NIS : <b>{{ datamurid.IdImage }}</b></p>
                     </div> -->
            </div>
        </div>
    </div>
</template>


<script>
 import axios from "axios";
 import VueQrcode from "vue-qrcode";

 export default {
     components: { VueQrcode},
     data() {
         return {
             nama: "",
         };
     },
     async asyncData() {
         const { data } = await axios.get("http://localhost:8001/api/datamurid/30");
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
     bottom: 60px;
     font-family: Ubuntu;
     z-index: 1;
     font-size: 15px;
     text-align: center;
     border: 22px;
     color: black;
     /* font-weight: bold; */
     line-height: 1.6;
     width: 310px;
     text-transform: uppercase;
     /*      transform: rotate(90deg); */
     left:178px;
 }

 .nama {
     font-size: 17px;
     margin-bottom: 0px;
     font-weight: bold;
 }

 .nama_alter {
     font-size: 13px;
     margin-top: 6px;
     margin-bottom: 0px;
     font-weight: bold;
 }

 .idcard {
     margin-bottom: -6px;
     /* font-weight: bold; */
     margin-top: -6px;
     /* font-size: 13px; */
 }


 .ket {
     margin-top: -6px;
     font-size: 15px;
 }


 .address {
     margin-top: -15px;
     font-size: 13px;
     font-weight: bold;
     line-height: 17px;
     width: 229px;
 }


 .addressAlter {
     margin-top: -20px;
     font-size: 11px;
     font-weight: bold;
     line-height: 13px;
     width: 229px;
 }

 .ttl {
     font-size: 13px;
     margin-bottom: 21px;
     font-weight: bold;
 }

 .ttl_alter {
     font-size: 11px;
     margin-bottom: -6px;
     margin-top: 16px;
     font-weight: bold;
     line-height: 15px;
 }

 .avatar {
     width: 122px;
     position: absolute;
     z-index: -1;
     top: 85px;
     left: 275px;
     height: auto;
     /*      transform: rotate(90deg); */
 }

 .avatar2 {
     width: 114px;
     position: absolute;
     z-index: -1;
     top: 100px;
     left: 202px;
     height: auto;
     transform: rotate(90deg);
 }

 .qrcode {
     /* transform: rotate(90deg); */
     position: absolute;
     top: 155px;
     left: 382px;
 }

 .qrcode2 {
     transform: rotate(90deg);
     position: absolute;
     top: 121px;
     left: 54px;
 }

 .info2{
     display: block;
     position: absolute;
     bottom: 113px;
     font-family: Ubuntu;
     z-index: 1;
     font-size: 15px;
     text-align: center;
     border: 22px;
     color: black;
     /* font-weight: bold; */
     line-height: 1.6;
     width: 310px;
     text-transform: uppercase;
     transform: rotate(90deg);
     left:10px;
 }

 .nama2 {
     font-size: 17px;
     margin-bottom: 0px;
     font-weight: bold;
 }

 .nama_alter2{
     font-size: 13px;
     margin-top: 6px;
     margin-bottom: 0px;
     font-weight: bold;
 }

</style>
