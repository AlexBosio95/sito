<template>
<div class="menu-container" :class="isOpen ? 'menu-m-open' : ''"  >
    
    <div class="menu" :class="isOpen ? 'menu-open' : ''">

        <!-- Menu Open -->
        <div class="big-menu" v-if="isOpen">
            <a 
            class="icon"
            v-for="(item, index) in dataMenu" :key="index" 
            @click="changeColor(index); updateOpen()" :class="{'active' : item.active, 'margin' : isOpen}" 
            :href="item.link">
            <i :class="item.logo"></i>
            </a>
        </div>

        <!-- Menu Closed -->
        <div class="small-menu" v-else>
            <a class="icon" @click.prevent="updateOpen()"><i class="fa-solid fa-bars"></i></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            dataMenu:[
                {
                    text: 'Home', 
                    active: true,
                    logo: 'fa-solid fa-house',
                    link: '#home',
                },

                {
                    text: 'About me',
                    active: false,
                    logo: 'fa-solid fa-user',
                    link: '#about-me',
                },

                {
                    text: 'Skills', 
                    active: false,
                    logo: 'fa-solid fa-lines-leaning',
                    link: '#skill',
                },

                {
                    text: 'Project', 
                    active: false,
                    logo: 'fa-solid fa-briefcase',
                    link: '#projects',
                },

                {
                    text: 'certification',
                    active: false,
                    logo: 'fa-solid fa-graduation-cap',
                    link: '#certification',
                },
            ],
            Open: false,
            
        }
    },
    props: { isOpen: Boolean},
    methods:{
        changeColor(currentindex){

            this.dataMenu.forEach(element => {
                element.active = false
            });

            this.dataMenu[currentindex].active = true

        },
        updateOpen(){
            this.Open = true
            this.$emit('update:open', this.Open)
        }
    }
}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

.menu-container{
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    z-index: 99;
    

    .menu{
        padding: 1rem 2rem;
        background: rgba($Graylight, 0.8);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 5rem;
        animation-name: scale-up-center;
        animation-duration: 1s;


        .big-menu{
            display: flex;
            justify-content: space-between;
            align-items: center;
            opacity: 0;
            animation: menu-icon-show .5s .2s forwards;
        }

        .small-menu{
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }

    .icon{
        color: $White;
        text-decoration: none;
        padding: 0.5rem 0;

        i{
            font-size: 1.5rem;
            cursor: pointer;
        }

        &:hover{
            transform: scale(1.15);
            transition: 0.5s;
            color: $Blue;
        }
    }   

    .margin{
        margin: 0 1rem;
    }

    .active{
        color: $Blue;
    }

    .menu-open{
        animation: menu-open .8s;
    }

}

@keyframes scale-up-center {
    0% {
        opacity: 0;
        transform: scale(.3);}
    50% {
        opacity: 1;
        transform: scale(1.05);}
    70% { transform: scale(.9); }
    100% { transform: scale(1); }

    }

@keyframes menu-open {
    from {
        transform: scaleX(0.3);
    }
    to {
        transform: scaleX(1);
    }
}

@keyframes menu-icon-show {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media all and (max-width: 600px) {
    .menu-container{
        position: fixed;
        z-index: 1;
        bottom: 1rem;
        left: 15%;

    }

    .menu-m-open{
        left: 50%;
    }
}
    

</style>