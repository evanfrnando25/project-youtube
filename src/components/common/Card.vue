<template>
     <div class="q-pa-md">
            <q-card class="my-card">
                    <q-img :src="data.image" />
                    <q-card-section>
                        <div class="card__content__wrapper">
                            <div class="card__content__detail">
                                 <div class="card__content__detail__avatar">
                                     <q-avatar>
                                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                    </q-avatar>
                                 </div>
                                <div class="card__content__detail__description">
                                    <div class="card__content__detail__description__title">
                                        Seasons - Wave To Earth 
                                    </div>
                                    <div class="card__content__detail__description__about">
                                        AboutAtma * 8,2rb x ditonton & 6 hari yang lalu
                                    </div>
                                </div>
                            </div>
                            <div class="card__content__option">
                                <q-icon name="fa-solid fa-ellipsis-vertical" />
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent({

    props: {
        data: {
            type: Object,
            required: true
        }
    }
})

</script>

<style lang="scss" scoped>

.card {

    &__content {
        
        &__wrapper {

            display: flex;
            gap: 20px;
            justify-content: space-between;

        }

        &__option {
            align-self: center;
            cursor: pointer;
        }

        &__detail {

            display: flex;
            gap: 15px;
            align-content: center;
            align-items: center;

            &__description {
                display: flex;
                flex-direction: column;
                gap: 5px;

            &__title {
                font-size: 12px;

                @media(min-width:767px) {
                    font-size: 15px;
                }
            }

            &__about {
                font-size: 6px;

                @media(min-width:767px) {
                    font-size: 8px;
                }
            }

        }

        }


    }

}

:deep(.q-img) {
    height: 120px;
}

</style>