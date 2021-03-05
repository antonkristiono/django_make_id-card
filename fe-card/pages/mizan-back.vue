<template>
    <div>
        <div v-for="(datamurid, index) in datamurids" :key="datamurid.IdCard">
            <div v-show="datamurid.cetak == false">
                <div class="customCardFront">
                    <template v-if="datamurid.kategori == 'pelajar'">
                        <img src="http://localhost:8001/kartu/static/cardtemplate/sekolah_26/p_blkg.png/" width="100%" height="100%" />
                    </template>
                    <template v-else>
                        <img src="http://localhost:8001/kartu/static/cardtemplate/sekolah_26/g_blkg.png/" width="100%" height="100%" />
                    </template>
                </div>
            </div>
            <!-- <div v-else>
                 <div class="customCardFront">
                 <img src="http://localhost:8001/kartu/static/cardtemplate/sekolah_26/g_blkg.png/" width="100%" height="100%" />
                 </div>
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
       const { data } = await axios.get("http://localhost:8001/api/datamurid/31");
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
 bottom: 77px;
 font-family: Ubuntu;
 z-index: 1;
 font-size: 15px;
 text-align: left;
 border: 22px;
 color: black;
 /* font-weight: bold; */
 line-height: 1.6;
 width: 310px;
 text-transform: uppercase;
 /*      transform: rotate(90deg); */
 left:145px;
}

.nama {
 font-size: 14px;
 margin-bottom: 7px;
 font-weight: bold;
}

.nama_alter {
 font-size: 13px;
 /*      margin-top: 6px; */
 margin-bottom: 7px;
 font-weight: bold;
}

.idcard {
 margin-bottom: 4px;
 font-weight: bold;
 margin-top: -6px;
 font-size: 13px;
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
 width: 101px;
 position: absolute;
 z-index: -1;
 top: 140px;
 left: 33px;
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
