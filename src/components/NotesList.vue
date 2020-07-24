<template>
  <div>
    <div class="note__list">
      <AddNote @addNote="addNote" />
      <NotesItem
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @delite-note="deliteNote"
      />
    </div>
  </div>
</template>

<script>
import NotesItem from "@/components/NotesItem.vue";
import AddNote from "@/components/AddNote.vue";
export default {
  name: "NotesList",
  props: ["notes"],
  components: {
    NotesItem,
    AddNote,
  },
  methods: {
    deliteNote(id) {
      this.$emit("delite-note", id);
    },
    addNote(note) {
      this.$emit("addNote", note);
    },
  },
};
</script>

<style lang="scss" scoped>
.note__list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
