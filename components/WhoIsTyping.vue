<template>

    <div class="w-4/5 h-6 m-auto text-white">
        <div v-if="whoIsTyping.name" class="flex row">
            <span>
                {{ whoIsTyping.name }} está digitando
            </span>
            <div class="stage">
                <div class="dot-elastic"></div>
            </div>
        </div>
    </div>

</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'

export default defineComponent({
    name: 'WhoIsTyping',
    computed: mapState(['whoIsTyping']),
})
</script>


<style scoped lang="css">

.stage{
    position: relative;
    top: 13px;
    left: 18px
}

.dot-elastic {
    position: relative;
    width: 4px;
    height: 4px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: dotElastic 1s infinite linear;
}

.dot-elastic::before,
.dot-elastic::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
}

.dot-elastic::before {
    left: -9px;
    width: 4px;
    height: 4px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: dotElasticBefore 1s infinite linear;
}

.dot-elastic::after {
    left: 9px;
    width: 4px;
    height: 4px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: dotElasticAfter 1s infinite linear;
}

@keyframes dotElasticBefore {
    0% {
        transform: scale(1, 1);
    }

    25% {
        transform: scale(1, 1.5);
    }

    50% {
        transform: scale(1, 0.67);
    }

    75% {
        transform: scale(1, 1);
    }

    100% {
        transform: scale(1, 1);
    }
}

@keyframes dotElastic {
    0% {
        transform: scale(1, 1);
    }

    25% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(1, 1.5);
    }

    75% {
        transform: scale(1, 1);
    }

    100% {
        transform: scale(1, 1);
    }
}

@keyframes dotElasticAfter {
    0% {
        transform: scale(1, 1);
    }

    25% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(1, 0.67);
    }

    75% {
        transform: scale(1, 1.5);
    }

    100% {
        transform: scale(1, 1);
    }
}
</style>
