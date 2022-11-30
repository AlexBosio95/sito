<template>
    <div class="card-container">
        <div class="card-project">
            <div class="text">
                <h5 class="title">{{title}}</h5>
                <p class="description">{{description}}</p>
                <button class="button-project">View Code</button>
            </div>
            <div class="slider">
                <div class="circle" 
                :class="project.active ? 'active' : ''" 
                v-for="project in projectsData" :key="project.id"
                @click="getActive(projectsData, project.id)"
                ></div>
            </div>
        </div>
        <div class="img">
            <img :src="require('@/assets/img/' + img)" :alt="title">
        </div>
    </div>
</template>

<script>
export default {
    props: { 
        title: String, 
        description: String, 
        img: String, 
        active: Boolean,
        link: String,
        projectsData: Array
    },
    methods: {
        getActive(array, currentIndex){
            array.forEach(element => {
                element.active = false
            });

            array[currentIndex].active = true
        }
    }

}
</script>

<style scoped lang="scss">

@import '@/style/variables.scss';

.card-container{
    position: relative;
    display: flex;
    justify-content: center;

    .card-project{
        width: 70%;
        border-radius: 1rem;
        height: 400px;
        display: flex;
        justify-content: flex-end;
        background-color: $Graylight;

        .text{
            color: $White;
            width: 45%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            animation-name: enter;
            animation-duration: 2s;

            .title{
                font-weight: bold;
                width: 100%;
            }

            .description{
                padding: 0;
                width: 100%;
            }

            .button-project{
                width: 50%;
                background-color: $Blue;
                color: $White;
                border: none;
                padding: .5rem 1rem;
                border-radius: 1.5rem;
                text-transform: uppercase;

                &:hover{
                    transform: scale(1.05);
                    transition: 1s;
                }
            }
        }

        .slider{
            width: 10%;
            padding: .5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;


            .circle{
                width: 20px;
                height: 20px;
                margin: .3rem;
                background-color: $GrayStrong;
                border-radius: 50%;

                &:hover{
                    transform: scale(1.25);
                    transition: 1s;
                }
            }

            .active{
                height: 40px;
                border-radius: 10px;
                background-color: $Blue;
                animation-name: slide;
                animation-duration: .8s;
            }
        }
    }

    .img{
        width: 300px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translate(0 , -50%);
        border-radius: 1rem;
        animation-name: enterImg;
        animation-fill-mode: forwards;
        animation-duration: 2s;
        animation-delay: .5s;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            border-radius: 1rem;
            animation-name: enter;
            animation-duration: 2s;

        }
    }
}

.change-down{
    animation-name: change;
    animation-duration: 2s;
}


@keyframes slide {
    from {
        opacity: 0.5;
        width: 20px;
        height: 20px;
        margin: .3rem;
        background-color: $GrayStrong;
        border-radius: 50%;
    }
    to {
        opacity: 1;
        height: 40px;
        border-radius: 10px;
        background-color: $Blue;
    }
}

@keyframes enter {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes enterImg {
    from {
        -webkit-box-shadow: 0; 
        box-shadow: 0;
    }
    to {
        -webkit-box-shadow: 10px 10px 16px -2px rgba(37,39,52,0.83); 
        box-shadow: 10px 10px 16px -2px rgba(37,39,52,0.83);
    }
}


@media all and (max-width: 600px) {

    .card-container{

        .card-project{
            width: 100%;
            height: 100%;
            min-height: 520px;
            border-radius: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            background-color: $Graylight;

            .text{
                padding: 15rem 1rem 2rem 1rem;
                color: $White;
                height: 455px;
                width: 100%;
                flex-direction: row;
                flex-wrap: wrap;
                text-align: center;

                .button-project{
                    width: 100%;
                    height: 40px;
                }
            }

            .slider{
                width: 100%;
                padding: .5rem;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                cursor: pointer;


                .circle{
                    width: 20px;
                    height: 20px;
                    margin: .3rem;
                    background-color: $GrayStrong;
                    border-radius: 50%;

                    &:hover{
                        transform: scale(1.25);
                        transition: 1s;
                    }
                }

                .active{
                    width: 40px;
                    border-radius: 10px;
                    background-color: $Blue;
                    animation-name: slide;
                    animation-duration: .8s;
                }
            }
        }

        .img{
            width: 250px;
            height: 250px;
            position: absolute;
            top: -10%;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    @keyframes slide {
    from {
        opacity: 0.5;
        width: 20px;
        height: 20px;
        margin: .3rem;
        background-color: $GrayStrong;
        border-radius: 50%;
    }
    to {
        opacity: 1;
        width: 40px;
        border-radius: 10px;
        background-color: $Blue;
    }
}

}

</style>