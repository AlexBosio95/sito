<template>
    <div class="box-image">
        <img src="@/assets/img/myprofile.png" alt="myprofile">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

    .box-image{
        width: 80%;
        margin-bottom: 2rem;
        
        img{
            border-radius: 1.5rem;
            width: 100%;
        }
    }

    .before-enter{
        opacity: 0;
        transform: translateY(50px);
        transition: all 2s ease-out;
    }

    .enter{
        opacity: 1;
        transform: translateY(0px);
    }

    @media all and (min-width: 992px) {

        .box-image{
            width: 70%;
            margin-bottom: 0rem;
        }
    }

    .before-enter{
        opacity: 0;
        transform: translateX(-50px);
        transition: all 2s ease-out;
    }

    .enter{
        opacity: 1;
        transform: translateX(0px);
    }

</style>