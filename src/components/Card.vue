<script setup>
import { ref } from "vue";
import { useNotesStore } from "@/stores/notesStore.js"
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
const notesStore = useNotesStore()
const props = defineProps({
    info: {
        type: Object,
        required: true,
    }
})

const change = ref(false)
const completed = () => {
  change.value =  !change.value
}



</script>
<template>
    <li class="to-do__item"><div class="txt" :class="{'completed' : change}" ><span class="circle" @click="(completed()),(notesStore.completedTasks(info?.id)),(notesStore.pendingTasks())"></span>{{ info?.title }} </div> <DeleteIcon style="cursor: pointer;" @click="notesStore.delTask(info?.id)"/></li>
</template>

