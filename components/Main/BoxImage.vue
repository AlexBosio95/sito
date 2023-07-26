<template>
    <div class="box-image">
        <div class="square">
            <img src="@/assets/img/profile.JPG" alt="" srcset="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

    .box-image{
        width: 50%;
        height: 100%;
        overflow: hidden;

        .square{
            aspect-ratio: 1 / 1;
            background: $GradientBlue;
            border-radius: 5%;

                img{
                    border-radius: 5%;
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    height: 100%;
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