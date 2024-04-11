<template>
    <form>
        <div>
            <label for="name">Name</label>
            <input type="text" ref="name" name="name" />
        </div>
        <div>
            <label for="name">Phone</label>
            <input type="tel" ref="phone" name="phone" />
        </div>
        <div>
            <label for="name">E-Mail</label>
            <input type="email" ref="email" name="email" />
        </div>
        <div>
            <button type="submit" @click.prevent="addContact()">Add Contact</button>
        </div>
    </form>
</template>

<script>

export default {
    emits: ['add-contact'],
    data() {
        return {
            friendContact: {
                id: '',
                name: '',
                phone: '',
                email: '',
                isFavorite: false,
            }
        };
    },
    methods: {
        addContact() {
            this.friendContact.id = new Date().toISOString();
            this.friendContact.name = this.$refs.name.value;
            this.friendContact.phone= this.$refs.phone.value;
            this.friendContact.email = this.$refs.email.value;
            this.friendContact.isFavorite = false;
            this.$emit('add-contact', this.friendContact);
        }
    }
};

</script>