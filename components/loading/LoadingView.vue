<template>
    <div class="container">
        <div class="loading">
            <div class="text-center">
                <div class="box-image" :class="isStart ? 'explode': ''">
                    <div class="circle pulse">
                        <img src="@/assets/img/loading.png" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            isStart: false
        }
    },
    methods:{
        getStart(){
            setTimeout(() => {
                this.isStart = true
            }, 4100);

            clearTimeout()
        }
    },
    mounted(){
        this.getStart()
    }

}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

.loading{
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: white;

    .title{
        width: 100%;
        font-size: 7rem;
        text-transform: uppercase;
    }

    .box-image{
        width: 100%;

        .circle{
            aspect-ratio: 1 / 1;
            background: $GradientBlue;
            border-radius: 50%;
            position: relative;

                img{
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: top;
                    width: 100%;
                    height: 100%;
                    max-height: 250px;
                    
                }

        }
    }
}

.pulse{
    animation: pulse;
    animation-duration: 1s;
    animation-iteration-count: 4;
}

.explode{
    animation-name: explode;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
}

@keyframes explode {
    from {
        transform: translate(0)
    }
    to {
        transform: translate(0, 600px)
    }
}

@media all and (max-width: 600px) {

.loading{

    .box-image{

        .circle{

            img{
                max-height: 220px;
                
            }

        }
    }
}
}

</style>