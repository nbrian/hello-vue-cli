<template>
    <div>
        <mdl-select label="Country" id="contry-select" v-model="country" :options="countries"></mdl-select>
    </div>
</template>
<script>
    import axios from 'axios';
    import componentHandler from 'material-design-lite/material.min.js'

    export default {
        data() {
            return {
                country: 'Philippines',
                countries: []
            }
        },
        // ready() {
        //     axios.get(`https://restcountries.eu/rest/v2/all`)
        //     .then(response => { 
        //         for(let i = 0; i < response.data.length; i ++){
        //             let country = response.data[i];
        //             console.log(country);
        //             this.countries.push({name:country.name, value:country});
        //         }
        //     })
        //     .catch(e => { console.log(e) });
        // },
        created: function(){
           this.fetchCountries(); 
        },
        methods: {
            fetchCountries: function() {
                axios.get(`https://restcountries.eu/rest/v2/all`)
                .then(response => { 
                    for(let i = 0; i < response.data.length; i ++){
                        let country = response.data[i];
                        // console.log(country);
                        this.countries.push({name:country.name, value:country});
                    }
                })
                .catch(e => { console.log(e) });
            }
        }
    }

</script>

<style>
  
</style>