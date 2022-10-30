<template>
    <div class="menu">
        <div class="big-menu">
            <a v-for="(item, index) in dataMenu" :key="index" @click="changeColor(index)" :class="{'active' : item.active}" :href="item.link"><i :class="item.logo"></i></a>
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
                    text: 'personality',
                    active: false,
                    logo: 'fa-solid fa-chart-bar',
                    link: '#personality',
                },

            ],
        }
    },
    methods:{
        changeColor(currentindex){

            this.dataMenu.forEach(element => {
                element.active = false
            });

            this.dataMenu[currentindex].active = true
        }
    }
}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

    .menu{
        position: fixed;
        z-index: 1;
        background: rgba($Graylight, 0.8);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        bottom: 2rem;
        left: 50%;
        transform: translate(-50%);
        padding: 1rem 2rem;
        border-radius: 5rem;

        .big-menu{
            display: flex;
            width: 18rem;
            justify-content: space-between;
            align-items: center;

                a{
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

            .active{
                color: $Blue;
            }
        }
    }

</style>