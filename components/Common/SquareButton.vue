<template>
    <div>
        <a @click.prevent :href="url"><button :class="getTypeButton(type)">{{text}}</button></a>
    </div>
</template>

<script>
export default {
    props:{
        text: String,
        type: String,
        url: String,
    },
    methods:{
        getTypeButton(currentType){
            if (currentType != 'fill') {
                return 'standard'
            } else {
                return currentType
            }
        }
    }

}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

    button{
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        margin: 0.5rem;
    }

    .standard{
        background-color: transparent;
        border: 1px solid $Blue;
        color: $Blue;

        &:hover{
            transform: scale(1.05);
            transition: 0.5s;
            background-color: $White;
            border: none;
        }
    }

    .fill{
        background-color: $Blue;
        border: none;
        color: $White;

        &:hover{
            transform: scale(1.05);
            transition: 0.5s;
            background-color: $White;
            color: $Blue;
        }
    }

</style>