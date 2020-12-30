<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
            <div class="customCardFront">
                <img   src="http://localhost:8001/kartu/static/cardtemplate/sekolah_24/dpn.png/"
                       width="100%"
                       height="100%"
                />
                <div>
                    <img
                        class="avatar"
                        :src="`http://localhost:8001/kartu/static/foto/sekolah_hic2/${datamurid.IdImage}.${datamurid.fotoExtension}`"
                    />
                </div>
                <div class="info">
                    <p class="nama">{{datamurid.nama}}</p>
                    <div class="tabel">
                        <table>
                            <tr>
                                <td class="col1">Tempat Lahir</td>
                                <td>:</td>
                                <td>{{datamurid.TempatLahir}}</td>
                            </tr>
                            <tr>
                                <td class="col1">Tanggal Lahir</td>
                                <td>:</td>
                                <td>{{datamurid.TanggalLahir}}</td>
                            </tr>
                            <tr>
                                <td class="col1">Alamat</td>
                                <td>:</td>
                                <td>{{datamurid.alamat}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <vue-qrcode class="qrcode" :value="datamurid.IdCard" margin="1" width="65" />
                </div>
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
         const { data } = await axios.get("http://localhost:8001/api/datamurid/24");
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
     top: 56px;
     font-family: adobe devanagari;
     right: -5px;
     z-index: 1;
     font-size: 15px;
     text-align: left;
     border: 22px;
     color: black;
     line-height: 1.6;
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
     color: white;
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
     width: 110px;
     position: absolute;
     z-index: -1;
     top: 54px;
     left: 58px;
     /* transform: rotate(90deg); */
 }


 .qrcode {
     /* transform: rotate(90deg); */
     position: absolute;
     bottom: 54px;
     right: 83px;
 }
</style>
