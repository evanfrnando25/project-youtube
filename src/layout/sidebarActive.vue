<template>
    <div class="sidebar__wrapper">
        <div class="sidebar__header">
           <div @click="$emit('handleSidebar')" class="sidebar__header__icon">
                <q-icon name="fa-solid fa-bars" />
           </div>
           <div class="sidebar__header__logo">
                <img src="@/assets/img/logo.png" />
           </div>
        </div>
        <div class="sidebar__navigation">
            <div class="sidebar__menu">
            <div v-for="items in listNavigation" :key="items.name" class="sidebar__menu__wrapper">
                <div class="sidebar__menu__icon">
                       <img :src="items.icon" />
                </div>
                <div class="sidebar__menu__title">
                        <h5>{{ items.name }}</h5>
                </div>
            </div>
            <hr />
        </div>
        <div v-for="items in listContent" :key="items.id" class="sidebar__content">
            <div class="sidebar__content__header">
                <h5>{{ items.name }}</h5>
            </div>
            <div v-for="data in items.items" :key="data.name" class="sidebar__content__wrapper">
                <div class="sidebar__content__icon">
                       <img :src="data.icon" />
                </div>
                <div class="sidebar__content__title">
                        <h5>{{ data.name }}</h5>
                </div>
            </div>
            <hr />
        </div>
        <div class="sidebar__menu">
            <div v-for="items in listNavigation" :key="items.name" class="sidebar__menu__wrapper">
                <div class="sidebar__menu__icon">
                       <img :src="items.icon" />
                </div>
                <div class="sidebar__menu__title">
                        <h5>{{ items.name }}</h5>
                </div>
            </div>
            <hr />
        </div>
         <div class="sidebar__menu">
            <span> @ 2024 Google LLC </span>
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
        ])

        const listContent = ref([
            {
                id: 1,
                name:"Anda",
                items: [
                    {
                        name: "Channel Anda",
                        icon: "/icon/home.svg"
                    },
                    {
                        name: "Histori",
                        icon: "/icon/home.svg"
                    },
                    {
                        name: "Video Anda",
                        icon: "/icon/subscription.svg"
                    }
                ]
            },
            {
                id: 2,
                name:"Subscription",
                items: [
                    {
                        name: "Musica Studio",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Raisa Anggani",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "yb",
                        icon: "/icon/subscription.svg"
                    }
                ]
            },
            {
                id: 3,
                name:"Eksplorasi",
                items: [
                    {
                        name: "Musica Studio",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Raisa Anggani",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "yb",
                        icon: "/icon/subscription.svg"
                    }
                ]
            },
            {
                id: 4,
                name:"Eksplorasi",
                items: [
                    {
                        name: "Trending",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Musik",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Film",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Game",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Berita",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Olahraga",
                        icon: "/icon/subscription.svg"
                    },
                ]
            },
            {
                id: 5,
                name:"Lainnya dari Youtube",
                items: [
                    {
                        name: "Youtube Premium",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Youtube Studio",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Youtube Music",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Youtube Kids",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Berita",
                        icon: "/icon/subscription.svg"
                    },
                    {
                        name: "Olahraga",
                        icon: "/icon/subscription.svg"
                    },
                ]
            },
            
        ])
        return {
            listNavigation,
            listContent
        }

    }

})

</script>


<style lang="scss" scoped>

.sidebar {

    &__wrapper {
        height: 100%;
        width: 22%;
        box-shadow: rgba(0, 100, 111, 0.2) 0px 7px 29px 0px;
        background: #ffffff;
        position: fixed;
        top: 0;
        padding: 1% 1%;
        z-index: 999999;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #000000;
    }

    &__navigation {
                overflow-y: scroll;

    }

    &__header {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 20px;
        padding: 10px 10px;

        &__icon {
            cursor: pointer;
        }


        &__logo {
            align-self: center;
            align-content: center;
            align-items: center;

            img {
                margin-top: 5px;
                width: 100px;
            }

        }

    }

    &__menu {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        &__wrapper {
            display: flex;
            gap: 20px;
            align-items: center;
            padding: 5px 10px; 
            cursor: pointer;
            border-radius: 10px;
            
            &:hover {
                background: #d3d3d3d3;
            }

        }

        &__title {

            h5 {
                font-size: 12px;
            }
           
        }

        &__icon {

            img {
                background: white;
                color: white;
            }
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 5px;

        &__wrapper {
            display: flex;
            gap: 20px;
            align-items: center;
            padding: 5px 10px; 
            cursor: pointer;
            border-radius: 10px;
            
            &:hover {
                background: #d3d3d3d3;
            }

        }

        &__title {

            h5 {
                font-size: 12px;
            }
           
        }

        &__icon {

            img {
                background: white;
                color: white;
            }
        }

        &__header {
            padding: 0px 10px;

            h5 {
                font-size: 15px;
            }

        }
    }

}

</style>