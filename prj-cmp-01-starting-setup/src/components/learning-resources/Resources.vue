<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="highlightStoredResourcesButton">
            Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="highlightAddResourceButton">
            Add Resource
        </base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTabTagName"></component>
    </keep-alive>
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
            selectedTabTagName: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide', 
                    title: 'Official Guide', 
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google', 
                    title: 'Google', 
                    description: 'Learn to google.',
                    link: 'https://googgle.org'
                }
            ]
        };
    },
    methods: {
        setSelectedTab(tagName) {
            this.selectedTabTagName = tagName;
        },
        addResource(resource) {
           this.storedResources.unshift(resource); 
           this.selectedTabTagName = 'stored-resources';
        },
        deleteResource(resourceId) {
            const resourceIdx = this.storedResources.findIndex((currResource) => currResource.id === resourceId);
            this.storedResources.splice(resourceIdx, 1);
        }
    },
    computed: {
        highlightStoredResourcesButton() {
            return this.selectedTabTagName !== 'stored-resources' ? 'flat' : null;
        },
        highlightAddResourceButton() {
            return this.selectedTabTagName !== 'add-resource' ? 'flat' : null;
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        };
    },
};
</script>