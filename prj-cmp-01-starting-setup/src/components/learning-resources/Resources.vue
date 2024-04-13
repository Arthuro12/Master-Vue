<template>
    <base-card>
        <component :is="selectedTabTagName"></component>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        AddResource,
        StoredResources
    },
    data() {
        return {
            selectedTabTagName: 'stored-resources'
        };
    },
    methods: {
        setSelectedTab(tagName) {
            this.selectedTabTagName = tagName;
        }
    }
};
</script>