<template>
    <div class="content__wrapper">
        <div class="content__chip">
            <div class="content__chip__wrapper">
                <q-chip v-for="items in listChip" :key="items.id" square :color="items.status ? 'dark' : 'grey'" :text-color="items.status ? 'white' : 'dark'" class="chip" >
                    {{ items.name }}
                </q-chip>
            </div>
        </div>
        <div class="content__video">
            <CommonCard v-for="items in dataVideo" :key="items.id" :data="items" />
       </div>
    </div>
</template>


<script lang="ts" scoped>

import CommonCard from "@/components/common/Card.vue"

import {defineComponent, ref} from "vue"


export default defineComponent({

    components: {
        CommonCard
    },
    setup(){

        const listChip = ref([
            {
                id: 1,
                name: "Semua",
                status: true,
            },
            {
                id: 2,
                name: "Musik",
            },
            {
                id: 3,
                name: "Mix",
            },
            {
                id: 4,
                name: "Live",
            },
            {
                id: 5,
                name: "Game",
            },
            {
                id: 6,
                name: "Memasak",
            },
            {
                id: 7,
                name: "Baru di upload",
            },
            {
                id: 8,
                name: "Ditonton",
            },
            {
                id: 9,
                name: "Baru untuk anda",
            },
        ])

        const dataVideo = ref([
            {
                id: 1,
                image: "https://cdn.quasar.dev/img/parallax1.jpg",
            },
            {
                id: 2,
                image: "https://cdn.quasar.dev/img/parallax2.jpg "
            },
            {
                id: 3,
                image: "https://cdn.quasar.dev/img/quasar.jpg"
            },
            {
                id: 4,
                image: "https://cdn.quasar.dev/img/mountains.jpg"
            },
            {
                id: 5,
                image: "https://cdn.quasar.dev/img/parallax1.jpg",
            },
            {
                id: 6,
                image: "https://cdn.quasar.dev/img/parallax2.jpg "
            },
            {
                id: 7,
                image: "https://cdn.quasar.dev/img/quasar.jpg"
            },
            {
                id: 8,
                image: "https://cdn.quasar.dev/img/mountains.jpg"
            },
            {
                id: 9,
                image: "https://cdn.quasar.dev/img/parallax1.jpg",
            },
            {
                id: 10,
                image: "https://cdn.quasar.dev/img/parallax2.jpg "
            },
            {
                id: 11,
                image: "https://cdn.quasar.dev/img/quasar.jpg"
            },
            {
                id: 12,
                image: "https://cdn.quasar.dev/img/mountains.jpg"
            },
        ])

        return {
            listChip,
            dataVideo
        }

    }

})

</script>


<style lang="scss" scoped>

.content {

    &__wrapper {
        padding: 0% 0%;
    }

    &__chip {
        position: fixed;
        background: #ffffff;
        z-index: 999;
        width: 100%;
        padding: 10px;
        margin-top: 40px;

        @media (min-width: 767px) {
            margin-top: 0px;
        }

        &__wrapper {
            overflow-y: hidden;
            width: 100%;
            display: flex;

            &::-webkit-scrollbar {
                display: none;
            }
        }

    }
    
    .chip {
        cursor: pointer;

        &:hover {
            color: #d3d3d3;
        }
    }

    &__video {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 100px 10px;

        @media (min-width: 767px) {
            grid-template-columns: repeat(3, 1fr);
            padding: 50px 10px;
        }
    }

}


</style>