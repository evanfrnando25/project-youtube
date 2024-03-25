<template>
    <div class="sidebar__wrapper">
      <div class="sidebar__default">
            <div v-for="items in listNavigation" :key="items.name" class="sidebar__default__option">
                <span class="sidebar__default__option__icon"> 
                    <img :src="items.icon" />
                </span>
                <span class="sidebar__default__option__title"> {{ items.name }} </span>
            </div>
      </div>
    </div>
</template>

<script lang="ts">

import {defineComponent, ref} from "vue"

export default defineComponent({

    setup(){

        const listNavigation = ref([
            {
                name: "Beranda",
                icon: "/icon/home.svg"
            },
            {
                name: "Shorts",
                icon: "/icon/shorts.svg"
            },
            {
                name: "Subscripiton",
                icon: "/icon/subscription.svg"
            },
            {
                name: "Anda",
                icon: "/icon/play.svg"
            },
        ])

        return {
            listNavigation
        }

    }

})

</script>


<style lang="scss" scoped>

.sidebar {

    &__wrapper {
        height: 100vh;
        margin-top: 0%;
        position: fixed;
        width: 65px;
        box-shadow: rgba(0, 100, 111, 0.2) 0px 7px 29px 0px;
        background:transparent;

        @media (min-width: 1020px) {
            padding-top: 1%;
        }
    }

    &__default {
        display: flex;
        flex-direction: column;
        gap: 0px;
        background:transparent;

        &__option {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 13px 0px;

            &:hover {
                background: #d3d3d3;
                border-radius: 10px;
                cursor: pointer;
            }

            &__title {
                font-size: 9px;
                font-weight: 100;
            }

            &__icon {

                img {
                    height: 20px;
                }
            }

        }

    }

    &__active {
        background: red;
        position: fixed;
        width: 200px;
        z-index: 99999;
    }

}

</style>