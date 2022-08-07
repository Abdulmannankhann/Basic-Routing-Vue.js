<template>
<div v-if="job">
<h1>Jobs Details</h1>
  <h2>{{job.title}}</h2>
  <p>The job id is {{id}}</p>
  <p>{{job.description}}</p>
</div>
</template>

<script>
import * as axios from 'axios'

export default {
props:['id'],
data(){
	return {
		job : null
	}
},
mounted(){
	axios.get('http://localhost:3000/jobs/' + this.id)
	.then(data=>this.job = data.data)
	.catch(err=>console.log(err))
}
}
</script>

<style>

</style>