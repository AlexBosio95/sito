<template>
        <div class="box">
            <i :class="logo"></i>
            <h6 class="title">{{title}}</h6>
            <h6 class="subtitle">{{getData()}}</h6>
        </div>
</template>

<script>
export default {
    props:{
        title: String,
        logo: String,
        data: String,
        myGit: Object,
    },
    methods:{
        getData(){
            if (this.data != null && this.data != '') {
                if (this.data == 'Github') {
                    return `Github repo ${this.myGit.public_repos}` 
                } else {
                    return this.data
                }
            } else {
                return 'No data'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/style/variables.scss';

    .box{
        width: 80%;
        margin: .5rem;
        background-color: $Graylight;
        padding: .4rem;
        text-align: center;
        border-radius: .5rem;

        i{
            padding: .8rem;
            font-size: 1.3rem;
            color: $Blue;
        }

        .title{
            font-weight: bold;
            font-size: 1rem;
        }

        .subtitle{
            font-size: .8rem;
            opacity: 0.5;
        }
    }

    @media all and (min-width: 992px) {
        .box{
            width: calc(100% / 3 - 1rem);
            margin: .5rem;
            background-color: $Graylight;
            text-align: center;
            border-radius: .5rem;
        
            i{
                padding: .8rem;
                font-size: 1.3rem;
                color: $Blue;
            }

            .title{
                font-weight: bold;
                font-size: 1rem;
            }

            .subtitle{
                font-size: .8rem;
                opacity: 0.5;
            }
        }
    
    }

</style>