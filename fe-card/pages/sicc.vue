<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
            <div v-if='datamurid.kategori ===  "guru"'>
                <div class="customCardFront">
                    <img   src="http://localhost:8001/kartu/static/cardtemplate/sekolah_21/guru_dpn.png/"
                           width="100%"
                           height="100%"
                    />
                    <div>
                        <img
                            class="avatar"                           :src="`http://localhost:8001/kartu/static/foto/sekolah_sicc-guru/${datamurid.IdImage}.png`"
                        />
                    </div>
                    <div class="info2">
                        <p class="nama2">{{ datamurid.nama }}</p>
                        <p class="nis2">{{ datamurid.IdCard }}</p>
                    </div>
                </div>

            </div>
            <div v-else>
                <div class="customCardFront">
                    <img   src="http://localhost:8001/kartu/static/cardtemplate/sekolah_21/siswa_ic.png/"
                           width="100%"
                           height="100%"
                    />
                    <div>
                        <img
                            class="avatar"
                            :src="`http://localhost:8001/kartu/static/foto/sekolah_sicc/${datamurid.IdImage}.png`"
                        />
                    </div>
                    <div class="info">
                        <p class="nama">{{ datamurid.nama }}</p>
                        <p class="nis">{{ datamurid.IdCard }}</p>
                        <p class="TTL"> {{ datamurid.TempatLahir}}, {{ datamurid.TanggalLahir }}</p>
                        <p class="alamat">{{ datamurid.alamat }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
 import axios from "axios";

 export default {
     data () {
         return {
             nama: "",
         };
     },
     async asyncData() {
         const { data } = await axios.get("http://localhost:8001/api/datamurid/21");
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
     bottom: 79px;
     font-family: Ubuntu;
     right: 67px;
     z-index: 1;
     font-size: 14px;
     text-align: left;
     border: 22px;
     color: white;
     line-height: 17px;
     width: 380px;
     text-transform: uppercase;
     /* transform: rotate(90deg); */
 }

.info2 {
     display: block;
     position: absolute;
     bottom: 64px;
     font-family: Ubuntu;
     right: 138px;
     z-index: 1;
     font-size: 14px;
     text-align: left;
     border: 22px;
     color: white;
     line-height: 17px;
     width: 380px;
     text-transform: uppercase;
     transform: rotate(90deg);
 }

 .nama {
     font-size: 17px;
     margin-bottom: -4px;
     font-weight: bold;
     line-height: 35px;
 }

 .nis2 {
     color: #46555E;
 }

 .nama2{
     font-size: 18px;
     font-weight: bold;
     color: #383839;
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
     top: 157px;
     left: 119px;
     transform: rotate(90deg);
 }

</style>
