<script setup>
import { ref, computed } from "vue";
import Card from "@/components/Card.vue"
import { useNotesStore } from "@/stores/notesStore.js"
const notesStore = useNotesStore()
const input = ref("")
const change = ref(false)
const textValues = (val) => {
    input.value = val.value;
};

const newTask = ref({
  title: input,
});

const pendingTasksCount = ref([])

</script>
<template>
  <div class="wrapper">
    <div class="to-do">
      <h3 class="to-do__title">To Do List</h3>
      <form action="" class="to-do__form" @submit.prevent="
            (notesStore.addTask(newTask)),(notesStore.pendingTasks())
          ">
        <input type="text" placeholder="New Task" class="to-do__form-input"  required
        @input="textValues($event.target) " :value="notesStore.title" >
        <button class="to-do__form-btn">+</button>
      </form>
      <ul class="to-do__list">
        <p style="margin: 20px auto;text-align: center;" v-if="notesStore.notes.length == 0">Add task</p>
        <Card v-else v-for="(item) in notesStore.notes" :key="item.id" :info="item"/>
      </ul>
      <div class="to-do__btns">
        <span class="to-do__btns-clear-completed btn" @click="(notesStore.delCompletedTasks()),(notesStore.pendingTasks())">Clear completed</span>
        <span class="to-do__btns-clear-all btn" @click="(notesStore.notes.length = 0),(notesStore.pendingTasks())">Clear all</span>
      </div>
      <p class="to-do__pending-tasks">Pending tasks: {{ notesStore.pendingTasksCount.length }}</p>
    </div>
  </div>
</template>
