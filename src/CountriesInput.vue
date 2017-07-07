<template>
    <div>
        <button @click="created()">Click Me</button>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts">
                <p><strong>{{post.title}}</strong></p>
                <p>{{post.body}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                posts: [],
                errors: []
            }
        },
        methods: {
            created() {
                //https://www.restcountries.eu/#api-endpoints-all
                axios.get(`http://jsonplaceholder.typicode.com/posts`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.posts = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })

                // async / await version (created() becomes async created())
                //
                // try {
                //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
                //   this.posts = response.data
                // } catch (e) {
                //   this.errors.push(e)
                // }
            }
        }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>