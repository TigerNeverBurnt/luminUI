<template>

    <div id="app">
        <el-header class=level2 id=example3 style="background-color: #18b3ce">Lumin</el-header>

        <el-container style="height:1000px; border: 1px solid #eee">

            <el-aside width="400px" style="background-color: rgb(238, 241, 246)">
                <Pictures v-bind:img_array="this.$store.getters.getImgArray"></Pictures>
            </el-aside>
            <v-divider
                    class="mx-3"
                    inset
                    vertical
            ></v-divider>
            <el-container>

                <el-main style="background-color: rgb(238, 241, 246)">
                    <InputField/>
                    <div>
                        <Record ref="record"></Record>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import InputField from "./InputField.vue";
    import Record from "./Record.vue";
    import Pictures from "./Pictures.vue";

    export default {
        components: {
            InputField,
            Record,
            Pictures
        },
        data() {
            return {}
//       [
//       {
//           "content_url": "https://www.slrlounge.com/wp-content/uploads/2016/01/natural-light-couples-photography-whimsical-walk-1600x1066.jpg",
//           "date_published": "2018-08-29T22:09:00.0000000Z",
//           "description": null,
//           "detail": "Natural Light Couples Photography Workshop - SLR Lounge",
//           "host_page_url": "https://www.slrlounge.com/store-product/natural-light-couples-photography-workshop-dvd/#comments",
//           "thumbnail_url": "https://tse3.mm.bing.net/th?id=OIP.6MLBqvnE9K5KZ8ahCXcd8QHaE7&pid=Api"
//       },
//       {
//           "content_url": "https://www.slrlounge.com/wp-content/uploads/2016/01/natural-light-couples-photography-whimsical-walk-1600x1066.jpg",
//           "date_published": "2018-08-29T22:09:00.0000000Z",
//           "description": null,
//           "detail": "Natural Light Couples Photography Workshop - SLR Lounge",
//           "host_page_url": "https://www.slrlounge.com/store-product/natural-light-couples-photography-workshop-dvd/#comments",
//           "thumbnail_url": "https://tse3.mm.bing.net/th?id=OIP.6MLBqvnE9K5KZ8ahCXcd8QHaE7&pid=Api"
//       }
// ]
        }
    };

</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 100%;
    }

    .type1 {
        width: 2%;
        height: 2%;
        text-align: center;
        border-radius: 50%;
        border: 2px solid black;
    }

    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .level2 {
        /* background-image:url("./Atlas.jpg"); */
        text-align: center;

        font-size: 40px;
        margin: 0;
        line-height: 60px;
        color: #2d9fcc;

        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        font-weight: bold;
    }

    .textround {
        background: #aee6de;
        border: 1px solid #accdd9;
        padding: 6px;

        /* ROUNDED CORNERS */
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;

        /* SHADOWS */
        -webkit-box-shadow: inset 0px 0px 5px 0px #9fc7d6;
        -moz-box-shadow: inset 0px 0px 5px 0px #9fc7d6;
        -ms-box-shadow: inset 0px 0px 5px 0px #9fc7d6;
        -o-box-shadow: inset 0px 0px 5px 0px #9fc7d6;
        box-shadow: inset 0px 0px 5px 0px #9fc7d6;

    }

    .div .textround {
        margin: 0 0 -3px;

        /* ROUNDED CORNERS */
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        -ms-border-radius: 0px;
        -o-border-radius: 0px;
        border-radius: 0px;

    }

    #example1 {

        background-color: silver;
        background-image: radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 50% 100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent);
        background-size: 100px 50px;
    }

    #example2 {
        background-color: #556;
        background-image: linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a);
        background-size: 80px 140px;
        background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
    }

    #example3 {
        background: #acb6e5; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #86fde8, #acb6e5); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #86fde8, #acb6e5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
</style>
    

