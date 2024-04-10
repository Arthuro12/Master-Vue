<template>
    <section>
        <h2>My Friends</h2>
        <ul v-for="friend in friends">
            <li>Name: {{ friend.name }}</li>
            <li>Phone: {{ friend.phone }}</li>
            <li>E-Mail: {{ friend.email }}</li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: "1",
                    name: "Jean Tabi",
                    phone: "+237 689 888 888",
                    email: "jt@yahoo.com"
                },
                {
                    id: "2",
                    name: "Marie Ange",
                    phone: "+237 674 888 888",
                    email: "mariea@yahoo.com"
                }
            ]
        };
    }
};
</script>
