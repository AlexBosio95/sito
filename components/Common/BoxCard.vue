<template>
    <div class="col">
        <div class="box-card">
        <h3 data-aos="fade-up" data-aos-duration="800" class="title" :class="getFont(dataBoxCard)">{{dataBoxCard}}</h3>
            <div class="card-container">
                <Card v-for="card in dataCard" :key="card.id" 
                    :title = 'card.title'
                    :imgUrl = 'card.imgUrl'
                    :type = 'card.type'
                    :group = 'card.group'

                    data-aos="fade-up" data-aos-duration="1500"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../Common/Card.vue';
export default {
    components:{Card},
    props:{
        dataCard: Array,
        dataBoxCard: String,
    },
    methods:{
        getFont(item){
            if (item != null || item != '') {
                if (item == 'Frontend') {
                    return 'frontFont'
                } else {
                    return 'backFont'
                }
            }

        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

    .box-card{
        text-align: center;
        height: 100%;
        margin-top: 2rem;

        .card-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .title{
            text-align: center;
            padding: 1rem 0;
            color: $Blue;
            font-weight: bold;
        }

        .frontFont{
            font-family: 'Dancing Script', cursive;
        }

        .backFont{
            font-family: 'Inconsolata', monospace;
        }
    }

    @media all and (min-width: 992px) {

        .box-card{
            margin-top: 0rem;
        }

    }

</style>