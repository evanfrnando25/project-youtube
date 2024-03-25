<template>
        <div v-if="!activeHeader" class="header__wrapper">
            <div class="header__start">
                <span class="header__start__bar">
                    <q-icon name="fa-solid fa-bars" />
                </span>
                <span class="header__start__logo">
                    <img src="@/assets/img/logo.png" />
                </span>
            </div>
            <div class="header__center">
                <div class="header__center__wrapper">
                    <span  class="header__center__icon">
                        <q-icon @click="toggleHeader" name="fa-solid fa-magnifying-glass" />
                    </span>
                </div>
            </div>
            <div class="header__end">
                 <q-avatar size="28px">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                </q-avatar>
            </div>
        </div>
        <div v-if="activeHeader" class="header__search">
             <div class="header__search__start">
                <span class="header__search__start__icon">
                    <q-icon @click="toggleHeader" name="fa-solid fa-arrow-left" />
                </span>
            </div>
            <div class="header__search__center">
                <div class="header__search__center__wrapper">
                    <span class="header__search__center__search">
                        <input type="text" />
                    </span>
                    <span class="header__search__center__icon">
                        <q-icon name="fa-solid fa-magnifying-glass" />
                    </span>
                </div>
            </div>
            <div class="header__search__end">
               <q-icon name="fa-solid fa-microphone" />
            </div>
        </div>
</template>


<script lang="ts">

import {defineComponent, ref} from 'vue'

export default defineComponent({

    setup(){

        const activeHeader = ref(false)

        const toggleHeader = () => {
            activeHeader.value = !activeHeader.value
            console.log(activeHeader.value)
        }

        return {
            activeHeader,
            toggleHeader
        }
    }
})

</script>


<style lang="scss" scoped>
.header {

    &__wrapper {
        display: grid;
        grid-template-columns: 20% 60% 10%;
        gap: 5%;
        padding: 2% 3%;
        align-content: center;
        align-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background: #ffffff;
        z-index: 9999;
    }

    &__start {
        display: flex;
        

        &__bar {
            display: none;
        }

        &__logo {
            
            img {
                width: 100%;
                height: 20px;
            }

        }

    }

    &__center {

        &__wrapper {
            text-align: end;
            font-size: 15;
            align-content: center;
        }

    }

    &__end {
        align-items: center;
        align-content: center;

        img {
            width: 100%;
            height: 100%;
        }

    }

    &__search {
        background: #ffffff;
        display: grid;
        grid-template-columns: 10% 70% 10%;
        gap: 5%;
        padding:  3%;
        align-content: center;
        align-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        &__start {
            display: flex;
        }

    &__center {

        &__wrapper {
            display: grid;
            grid-template-columns: 90% 5%;
            gap: 3%;
            width: 100%;
            border: 1px solid;
            padding: 1% 3%;
            border-radius: 30px;
            background: transparent;
        }

        &__search {

            input {
                border: none;
                background: transparent;
                border-radius: 5px;
                width: 100%;
                outline: none;
            }

        }

    }

    &__end {
        align-items: center;
        align-content: center;

        img {
            width: 100%;
            height: 100%;
            background: grey;
        }

    }


    }
}


</style>