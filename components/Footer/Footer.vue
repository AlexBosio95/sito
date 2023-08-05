<template>
    <footer>
        <Certification id="certification"/>
    </footer>
</template>

<script>
import Certification from './Certification.vue';

export default {

    components:{
        Certification,
    }
}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

footer{
    background-color: $GrayStrongXL;
    height: 100%;
    border-radius: 2rem 2rem 0 0;
}

</style>