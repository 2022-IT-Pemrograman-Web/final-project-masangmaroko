<template>
    <p>please Wait</p>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            ids: this.$route.params.id,
        }
    },

    methods: {
        async getRedirect() {
            try{
                const res = await axios.get('http://localhost:3000/redirect',{
                    params: {id: this.ids}
                })
                window.location.href = res.data
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        },
    },
    mounted() {
        this.getRedirect()
    },
}
</script>