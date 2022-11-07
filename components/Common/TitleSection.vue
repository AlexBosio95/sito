<template>
    <div>
        <h6 class="subtitle">{{dataTitle.subtitle}}</h6>
        <h3 class="title">{{dataTitle.title}}</h3>
    </div>
</template>

<script>
export default {
    props:{
        dataTitle: Object,
    }

}
</script>

<style lang='scss' scoped>

@import '@/style/variables.scss';

    .title{
        font-weight: bold;
        color: $Blue;
    }

    .subtitle{
        opacity: 0.6;
        color: $White;
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

</style>