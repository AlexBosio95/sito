<template>
    <div class="col-10">
        <div v-for="(info, index) in data" :key="index">
                <h5 class="title mb-3">{{info.title}}</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-label="Example with label" :style="'width:' + info.counterBar + '%;'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{info.counterBar}}%</div>
                </div>
                <div class="d-flex mt-3">
                    <div class="w-50">
                        <h6 class="sub-bar">{{info.textStart}}</h6>
                    </div>
                    <div class="w-50 d-flex justify-content-end">
                        <h6 class="sub-bar">{{info.textEnd}}</h6>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Array,
    },
    methods: {

        progressBar(){

            this.data.forEach(element => {

                setInterval(() => {
                    
                    if (element.counterBar < element.progress) {
                        element.counterBar++
                    }

                    clearInterval()

                }, 40);

                
            });

        }
    },
    mounted(){
        window.addEventListener('scroll', this.progressBar);
    }

}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

    .progress{
        background-color: $Graylight;

        .progress-bar{
            background-color: $Blue;
            color: $GrayStrong;
            font-weight: bold;
        }
    }

    .title{
        color: $White;
        text-align: center;
        text-transform: uppercase;
    }

    .sub-bar{
        text-transform: uppercase;
        color: $GraylightXL;
    }


</style>