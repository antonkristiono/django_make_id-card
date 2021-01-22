<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
                <div class="customCardFront">
                    <img src="http://localhost:8001/kartu/static/cardtemplate/sekolah_27/blkg_fix.png/" width="100%" height="100%" />
                    <!-- <div>
                         <img
                         :src="`http://localhost:8001/kartu/static/foto/sekolah_icbs/${datamurid.IdCard}.${datamurid.fotoExtension}`"
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
                         <p class="idcard"><b>{{ datamurid.IdImage }}</b></p>
                         <p class="ttl"><b>{{ datamurid.TempatLahir }},{{ datamurid.TanggalLahir | moment("D MMMM YYYY")}}</b></p>
                         <div v-if="datamurid.alamat == null ? 20  : datamurid.alamat.length < 50">
                         <p class="address"><b>{{ datamurid.alamat == null ? "-" : datamurid.alamat }}</b></p>
                         </div>
                         <div v-else>
                         <p class="addressAlter"><b>{{ datamurid.alamat == null ? "-" : datamurid.alamat }}</b></p>
                         </div>
                         </div> -->
                    <!-- <div>
                         <vue-qrcode class="qrcode" :value="datamurid.IdImage" margin="1" width="63"/>
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
       const { data } = await axios.get("http://localhost:8001/api/datamurid/27");
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
     bottom: 36px;
     font-family: Ubuntu;
     z-index: 1;
     font-size: 15px;
     text-align: left;
     border: 22px;
     color: black;
     /* font-weight: bold; */
     line-height: 1.6;
     width: 310px;
     text-transform: capitalize;
     /*      transform: rotate(90deg); */
     left:69px;
 }

 .nama {
     width: 250px;
     line-height:16px;
     font-size: 17px;
     margin-bottom: 14px;
     font-weight: bold;
 }

 .nama_alter {
     width: 245px;
     line-height: 16px;
     font-size: 14px;
     /*      margin-top: 6px; */
     margin-bottom: 15px;
     font-weight: bold;
 }

 .idcard {
     margin-bottom: -6px;
     font-weight: bold;
     margin-top: -15px;
     font-size: 15px;
 }


 .ket {
     margin-top: -6px;
     font-size: 15px;
 }


 .address {
     margin-top: -25px;
     font-size: 14px;
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
     font-size: 14px;
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
     width: 139px;
     position: absolute;
     z-index: -1;
     top: 115px;
     right: 45px;
     height: auto;
     /*      transform: rotate(90deg); */
 }

 .qrcode {
     /* transform: rotate(90deg); */
     position: absolute;
     top: 155px;
     left: 382px;
 }

</style>
