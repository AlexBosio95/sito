<template>
    <div class="box-image">
        <div class="circle">
            <img v-show="!isView" src="@/assets/img/about-me-2.png" alt="" srcset="">
            <img v-show="isView" src="@/assets/img/about-me.png" alt="" srcset="">
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            isView: false
        }
    },

    methods: {

        timingimage(){

            setInterval(() => {
                this.isView = !this.isView
            }, 5000)
        }
    },
    created(){
        this.timingimage()
    }

}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

    .box-image{
        width: 50%;
        height: 100%;
        overflow: hidden;

        .circle{
            aspect-ratio: 1 / 1;
            background: $GradientBlue;
            border-radius: 50%;

                img{
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: top;
                    width: 100%;
                    height: 100%;
                    animation: pulse;
                    animation-duration: .3s;
                }

        }
    }


    @keyframes new-image {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(20deg);
        }
    }

@media all and (max-width: 600px) {

    .box-image{
        width: 70%;
    }
}

</style>