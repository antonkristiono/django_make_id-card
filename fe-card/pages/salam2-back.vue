<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
            <div class="customCardFront">
                <img   src="http://localhost:8001/kartu/static/cardtemplate/sekolah_25/blkg.png/"
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
 import VueQrcode from "vue-qrcode";

 export default {
     components: {VueQrcode},
     data() {
         return {
             nama: "",
         };
     },
     async asyncData() {
         const { data } = await axios.get("http://localhost:8001/api/datamurid/25");
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
     bottom: 125px;
     top: 104px;
     font-family: ubuntu;
     right: -5px;
     z-index: 1;
     font-size: 12px;
     text-align: left;
     border: 22px;
     color: black;
     line-height: 19px;
     width: 246px;
     /* text-transform: uppercase; */
     /* transform: rotate(90deg); */
 }

 .info2{
     left:20px;
 }

 .tabel {
     margin-left:-30px;
     line-height:16px;
 }

 .col1 {
     width:84px;
 }

 .nama {
     font-size: 16px;
     margin-bottom: 3px;
     font-weight: bold;
     line-height: 35px;
     /* color: white; */
     text-transform: uppercase;
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
     margin-top:2px;
     line-height:13px;
 }

 .alamat_alter {
     font-size: 11px;
 }

 .ttl {
     margin-bottom: 2px;
 }

 .ttl_alter {
     font-size: 11px;
     margin-bottom: -6px;
     margin-top: 16px;
 }

 .avatar {
     width: 110px;
     position: absolute;
     z-index: -1;
     top: 106px;
     left: 34px;
     /* transform: rotate(90deg); */
 }


 .qrcode {
     /* transform: rotate(90deg); */
     position: absolute;
     bottom: 54px;
     right: 83px;
 }
</style>
