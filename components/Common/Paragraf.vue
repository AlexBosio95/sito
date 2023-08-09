<template>
    <div class="box-text">
        <span ref="typedTextRef"></span>
        <span class="cursor" :class="isTiping ? 'typing' : ''">&nbsp;</span>
    </div>
</template>

<script>
export default {
    props: {
        dataParagraf: String,
    },
    data: function(){
        return{
            isTiping: false
        }
    },
    mounted() {
        this.startTyping();
    },
    methods: {
    startTyping() {
        const text = this.dataParagraf || '';
        let currentIndex = 0;
        const typedTextRef = this.$refs.typedTextRef;

        const typingInterval = setInterval(() => {
            typedTextRef.textContent += text[currentIndex];

            currentIndex++;

            if (currentIndex === text.length) {
                clearInterval(typingInterval);
                this.isTiping = true;
            }
        }, 35); 
    },
},
};
</script>

<style scoped>

    .box-text{
        display: inline-block;
        width: 100%;
        margin: 0.5rem;
        min-height: 10rem;
    }

    span.cursor {
        display: inline-block;
        width: 2px;
        background-color: #fff;
        animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
        animation: none;
        opacity: 0;
    }

    @keyframes cursorBlink {
        49% { background-color: #fff; }
        50% { background-color: transparent; }
        99% { background-color: transparent; }
    }

    @media all and (max-width: 992px) {
        .box-text{
            text-align: center;
            margin: 0 1rem;
        }
    }
</style>
