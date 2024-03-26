<template>
     <div class="header__wrapper">
            <div class="header__start">
                <span @click="$emit('handle-sidebar')" class="header__start__bar">
                    <q-icon name="fa-solid fa-bars" />
                </span>
                <span class="header__start__logo">
                    <img src="@/assets/img/logo.png" />
                </span>
            </div>
            <div class="header__center">
                <div class="header__center__wrapper">
                    <span class="header__center__search">
                        <input type="text" placeholder="Search" />
                    </span>
                    <span  class="header__center__icon">
                        <q-icon  name="fa-solid fa-magnifying-glass" />
                    </span>
                </div>
                <span class="header__voice">
                    <q-icon name="fa-solid fa-microphone" />
                </span>
            </div>
            <div class="header__end">
                <q-icon name="fa-solid fa-video" /> 
                <q-icon name="fa-regular fa-bell" /> 
                 <q-avatar size="28px">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                </q-avatar>
            </div>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent({

    setup({emit}: any){
        
    }

})

</script>


<style lang="scss" scoped>

.header {

    &__wrapper {
        display: grid;
        grid-template-columns: 20% 50% 20%;
        gap: 5%;
        padding: 0.6% 2% 2% 2%;
        align-content: center;
        align-items: center;
        background: #ffffff;
    }

    &__voice {
        border: 1px solid grey;
        width: 32px;
        padding: 10px;
        font-size: 10px;
        border-radius: 20px;
        cursor: pointer;
    }

    &__start {
        display: flex;
        gap: 25px;

        &__bar {
            cursor: pointer;
        }
        

        &__logo {
            
            img {
                width: 100%;
                height: 20px;
            }

        }

    }

    &__center {
        display: grid;
        grid-template-columns: 95% 2%;
        gap: 3%;
        align-items: center;

        &__wrapper {
            display: grid;
            grid-template-columns: 90% 5%;
            gap: 2%;
            border: 1px solid #d3d3d3;
            border-radius: 20px;
            justify-content: center;
            justify-items: end;
            padding: 10px;
        }

        &__search {
            width: 100%;

            input {
                width: 100%;
                border: none;
                outline: none;
            }

        }
        

    }

    &__end {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: end;

        img {
            width: 30px;
            height: 100%;
        }

    }

}

</style>