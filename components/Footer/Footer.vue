<template>
    <footer>
        <Personality id="personality"/>
    </footer>
</template>

<script>
import Personality from './Personality.vue';

export default {

    components:{
        Personality,
    }
}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

footer{
    background-color: $GrayStrongXL;
    height: 100%;
    border-radius: 4rem 4rem 0 0;
}

</style>