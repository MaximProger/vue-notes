<template>
  <div>
    <div class="main__wrapper">
      <NotesList @addNote="addNote" @delite-note="deliteNote" :notes="notes" />
    </div>
  </div>
</template>

<script>
import NotesList from "@/components/NotesList.vue";
export default {
  name: "Home",
  components: {
    NotesList,
  },
  data: () => ({
    notes: [],
  }),
  methods: {
    deliteNote(id) {
      this.notes = this.notes.filter((n) => n.id !== id);
    },
    addNote(note) {
      this.notes.push(note);
    },
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((response) => response.json())
      .then((json) => {
        this.notes = json;
      });
  },
};
</script>

<style lang="scss" scoped>
.main__wrapper {
  margin: 0 auto;
  padding-left: 15px;
  max-width: 1200px;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
