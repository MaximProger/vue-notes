<template>
  <div>
    <div class="note note--addnote" @click="openModal" title="Add Note">
      <div class="note__wrapper">
        <div class="addnote">
          <div class="addnot__item"></div>
          <div class="addnot__item"></div>
        </div>
      </div>
    </div>
    <AddModal v-if="showModal" @add-note="addNote" />
  </div>
</template>

<script>
import AddModal from "@/components/AddModal.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "AddNote",
  components: {
    AddModal,
  },
  data: () => ({}),
  computed: {
    ...mapState(["showModal"]),
  },
  methods: {
    ...mapActions(["OPEN_TO_MODAL"]),
    openModal() {
      this.OPEN_TO_MODAL();
    },
    addNote(note) {
      this.$emit("addNote", note);
    },
  },
};
</script>

<style lang="scss" scoped>
.addnote {
  position: relative;
  cursor: pointer;
}
.addnot__item {
  position: absolute;
  height: 50px;
  width: 120px;
  background: #f8fdfb;
  transition: all 0.2s linear;
  top: 50%;
  left: 50%;
  margin-left: -60px;
  margin-top: -25px;

  &:first-child {
    transform: rotate(180deg);
    width: 50px;
    height: 120px;
    margin-left: -25px;
    margin-top: -60px;
  }
}
</style>
