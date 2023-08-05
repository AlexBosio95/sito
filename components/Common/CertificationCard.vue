<template>
    <div class="container-card">
        <a
            v-for="(card, index) in cards"
            :key="index"
            :style="{ '--background-url': `url(${card.imageUrl})`}"
            class="card"
            ref="card"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave(index)"
            :href="card.buttonLink"
            :target="card.buttonTarget"
            >
            <div class="glow" ref="glow"></div>
            <div v-show="card.standard" class="text-center box-text">
                <h1 class="text-card">{{$t('footer.cardTitle')}}</h1>
            </div>
        </a>
    </div>
</template>

<script>
import card1Image from "@/assets/img/certificato-boolean.png";
import card2Image from "@/assets/img/certificato-go.png";
import card3Image from "@/assets/img/Certificate-card.png";

export default {
    data() {
        return {
            cards: [
                { 
                id: 1, 
                imageUrl: card1Image, 
                standard: false,
                buttonLink: 'https://www.credential.net/19927c41-5cf5-4a47-b994-ddd2072a5ee4#gs.3geqco',
                buttonTarget: '_blank'
                },
                { 
                id: 2, 
                imageUrl: card2Image, 
                standard: false,
                buttonLink: 'https://www.udemy.com/certificate/UC-c304a1ff-d209-48d8-a253-617d4d22cab3',
                buttonTarget: '_blank'
                },
                { 
                id: 3, 
                imageUrl: card3Image, 
                standard: true,
                buttonLink: '#certification',
                buttonTarget: ''
                }
            ]
        };
    },
    methods: {
        rotateToMouse(index, e) {
        const $card = this.$refs.card[index];
        const $glow = this.$refs.glow[index];

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const bounds = $card.getBoundingClientRect();
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        $card.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance) * 2}deg
            )
        `;

        $glow.style.backgroundImage = `
            radial-gradient(
            circle at
            ${center.x * 1.3 + bounds.width / 1.5}px
            ${center.y * 1.3 + bounds.height / 1.5}px,
            #ffffff55,
            #0000000f
            )
        `;
        },
        handleMouseEnter(index) {
        this.$refs.card[index].addEventListener('mousemove', (e) => this.rotateToMouse(index, e));
        },
        handleMouseLeave(index) {
        this.$refs.card[index].removeEventListener('mousemove', (e) => this.rotateToMouse(index, e));
        this.$refs.card[index].style.transform = '';
        this.$refs.glow[index].style.backgroundImage = '';
        }
    }
};
</script>

<style scoped lang="scss">

@import "@/style/variables.scss";

.container-card{
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 4rem;

    .card {
        text-align: right;
        color: $Graylight;
        width: 300px;
        height: 350px;
        box-shadow: 0 1px 5px #00000099;
        border-radius: 10px;
        background-image: var(--background-url);
        background-size: cover;
        position: relative;
        transition-duration: 300ms;
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
        transform: rotate3d(0);
        margin: 1rem;
        cursor: pointer;
    }
    
    .card:hover {
        transition-duration: 150ms;
        box-shadow: 0 15px 30px 5px #00000044;
    }
    
    .card .glow {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px;
        background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
    }

    .box-text{
        width: 100%;
        height: 100%;
        position: relative;

        .text-card{
            color: $GrayStrongXL;
            font-size: 2rem;
            position: absolute;
            top: 80%;
            left: 45%;
            transform: translate(-50%, -50%);
            text-transform: uppercase;
            text-align: left;
            font-weight: bold;
        }
    }

}
</style>