<template>
    <form>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" ref="titleInput" />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea type="text" id="description" name="description" rows="" ref="descriptionArea"></textarea>
        </div>
        <div class="form-control">
            <label for="link">Link</label>
            <input type="url" id="link" name="link" ref="linkInput" />
        </div>
        <div>
            <base-button buttonType="button" @click="submitData()">Add Resource</base-button>
        </div>
    </form>
</template>

<script>
export default {
    inject: ['addResource'],
    methods: {
        submitData() {
            const resource = {
                title: this.$refs.titleInput.value,
                description: this.$refs.descriptionArea.value,
                link: this.$refs.linkInput.value
            };
            this.addResource(resource);
        }
    }
};
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
  }
  
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }
  
  .form-control {
    margin: 1rem 0;
  }
</style>