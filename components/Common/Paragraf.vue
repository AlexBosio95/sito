<template>
    <div>
        <p>{{dataParagraf}}</p>
    </div>
</template>

<script>
export default {
    props:{
        dataParagraf: String,
    }

}
</script>

<style>

    p{
        text-align: center;
        padding: .8rem;
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

    @media all and (min-width: 992px) {

        p{
            text-align: left;
        }

        .before-enter{
            opacity: 0;
            transform: translateX(50px);
            transition: all 2s ease-out;
        }

        .enter{
            opacity: 1;
            transform: translateX(0px);
        }        
            
    }

</style>