<template>
        <div class="ms_card p-3">
            <div class="description">
                <i :class="imgUrl" class="icon"></i>
                <h6 class="title">{{title}}</h6>
                <h6 class="subtitle">{{type}}</h6>
                <div class="circle"></div>
            </div>
        </div>
</template>

<script>

export default {
    props:{
        title : String,
        type : String,
        group: String,
        imgUrl : String,
    }

    }
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

.ms_card{
    width: calc(100% / 2 - .6rem);
    text-align: center;
    cursor: pointer;
    background-color: $Graylight;
    border-radius: .8rem;
    margin: .3rem;
    position: relative;

    .icon{
        color: $Blue;
        font-size: 1.8rem;
        padding: .8rem;
    }

    .title{
        font-size: 1rem;
    }

    .subtitle{
        font-size: 0.7rem;
        opacity: 0.5;
    }

    &:hover{
        transition-duration: 150ms;
        box-shadow: 0 4px 20px 3px #00000044;
    }

    &:hover .circle{
        background-color: $Blue;
        transform: scale(1.15);
        transition: 1s;
        box-shadow: 0 2px 6px 2px #00000044;
    }

    .circle{
        position: absolute;
        top: .5rem;
        right: .5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: $GrayStrong;
    }
}

    @media all and (min-width: 992px) {

        .ms_card{
            width: calc(100% / 4 - .6rem);
        }

    }

</style>