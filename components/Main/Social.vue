<template>
    <div class="social" v-scrollanimation>
        <a href="https://www.instagram.com/alexbosio95/?hl=it" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/alex-bosio-dev" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/AlexBosio95" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

    .social{
        display: flex;
        justify-content: center;
        background-color: $Graylight;
        margin: 2rem auto;
        width: 50%;
        border-radius: 0.5rem;

        a{
            color: $White;
            font-size: 1.5rem;
            margin: .5rem;
        }
    }

    @media all and (min-width: 992px) {

        .social{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 3rem;
            margin: 0;
        }

    }

</style>