<template>
    <div
      :style="getStyle()"
      :class="{ 'app-editable--active': isEdit, 'app-editable--hovered': isHovered }"
      class="app-editable"
      @mouseover="isHovered = true"
      @mouseout="isHovered = false">
      <div
          class="app-editable-input-wrapper"
          @click="startEditing">
              <span
                ref="text"
                v-if="!isEdit">
                {{ model }}
              </span>
          <template v-else>
              <input
                      ref="input"
                      size="10"
                      v-model="model"
                      class="app-editable-input"
                      @keypress="finishEditing"/>
          </template>
      </div>
      <div v-if="isHovered || isEdit" class="app-editable-icon">
        <font-awesome-icon icon="pen" />
      </div>
    </div>
</template>

<script>
  export default {
    name: "editable-text",
    props: {
      value: {
        type: [String, Number],
		    require() { return true; }
      },
      size: {
      	type: Number,
        default: 1
      },
      width: {
      	type: Number,
        default: 200
      }
    },
    data() {
      return {
        isHovered: false,
        isEdit: false,
        finishEditingLn: null,
        model: null,
        inputWidth: null
      };
    },
    created() {
    	this.finishEditingLn = this.finishEditing.bind(this);

    	document.addEventListener("click", this.finishEditingLn);
    	this.model = this.value;
    },
    destroyed() {
			document.removeEventListener("click", this.finishEditingLn);
    },
    watch: {
    	value(v) {
    		this.model = v;
        }
    },
    methods: {
      finishEditing(e) {
      	if ((this.isEnter(e) || e.type === "click") && this.isEdit) {
					this.isEdit = false;
					this.$emit("changed", this.model);

					this.$nextTick(() => {
						const {width} = this.$refs.text.getBoundingClientRect();

						this.inputWidth = width;
					});
        }
      },
	    startEditing(e) {
        e.stopPropagation();
        this.isEdit = true;

        this.$nextTick(() => {
          const {input} = this.$refs;

          input.focus();
        });
      },
      getStyle() {
      	return `width: ${this.width}px; font-size: ${this.size}em`;
      },
      isEnter(e) {
      	return e.type === "keypress" && e.code === "Enter";
      }
    }
  }
</script>

<style scoped>
    .app-editable {
        display: inline-flex;
        padding: .5em;
        border: 1px solid #d9d9d9;
        border-radius: .25em;
        color: #333;
        font-family: Arial;
    }

    .app-editable-input-wrapper {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .app-editable-input {
        display: inline-block;
        width: 100% !important;
        border: none;
        font-size: 1em;
        padding: 0;
        overflow: hidden;
    }

    .app-editable-input:focus {
        outline: none;
    }

    .app-editable--active {
        border-color: #F38524;
    }

    .app-editable--hovered {
        border-color: #01AFB0;
    }

    .app-editable-icon {
        pointer-events: none;
    }
</style>