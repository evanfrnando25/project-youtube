<template>
    <div class="main">
        <div class="header">
            <HeaderMobile v-if="isMobile" />
            <HeaderDesktop @handleSidebar="handleSidebar" v-else />
        </div>
        <div class="content">
            <div class="sidebar">
                <Sidebar />
            </div>
            <div class="section">
                <router-view />
            </div>
        </div>
        <SidebarActive v-if="sidebar && !isMobile" @handleSidebar="handleSidebar" />
  </div>
</template>



<script lang="ts">

import HeaderMobile from "./headerMobile.vue"
import HeaderDesktop from "./headerDesktop.vue"
import Sidebar from "./sidebar.vue"
import SidebarActive from './sidebarActive.vue'
import { defineComponent, ref, onMounted } from "vue"

export default defineComponent({
    components: {
        HeaderMobile,
        HeaderDesktop,
        Sidebar,
        SidebarActive
    },
    setup(){

        const isMobile = ref(window.innerWidth < 768)
        const sidebar = ref(false)

        const handleResize = () => {
         isMobile.value = window.innerWidth < 768
        }

        const handleSidebar = () => {
            sidebar.value = !sidebar.value
        }

        onMounted(() => {
            window.addEventListener('resize', handleResize)
        })

        return {
             isMobile,
             handleSidebar,
             sidebar
        }

       

    }
})

</script>


<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
    background: #ffffff;
}

.content {
    display: grid;
    grid-template-columns: 100%;
    margin-top: 0.5%;

    @media (min-width: 767px) {
        grid-template-columns: 5% 90%;
        gap: 3%;
        margin-top: 7%;
    }

    @media (min-width: 1020px) {
        margin-top: 5%;
    }

    .sidebar {
        display: none;

         @media (min-width: 767px) {
            display: block;
        }
        
    }
    
}

.section {
    background: #ffffff;
}

.header {
    position: fixed;
    width: 100%;
    z-index: 999;
}
</style>