import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    title: "",
    pendingTasksCount: [],
    isCompleted: false,
    notes: [
                                                                                                                                                                                                                                                                                               
    ]
  }),
  actions: {
    addTask(note) {
      this.title = note.title
      this.notes.push({
        id: new Date().getTime(),
        title: this.title,
        isCompleted: this.isCompleted
      })
      
      this.title = ""
    },
    delTask(id) {
      this.notes = this.notes.filter(item => item.id !== id)
    },
    completedTasks(id) {
      this.notes.forEach(item => {if (item.id == id) {
        item.isCompleted = !item.isCompleted
        
      }
      

      } )
    },
    delCompletedTasks() {
      this.notes = this.notes.filter(item => !item.isCompleted)
      
    },
    pendingTasks(){
      this.pendingTasksCount = this.notes.filter(item => !item.isCompleted)
    }
    
  }
  
  })
