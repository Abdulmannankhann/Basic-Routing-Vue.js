<template>
  <h2>Jobs</h2>
  <div v-if="jobs.length">
	  <div v-for="job in jobs" :key="job.id" class="job">
  <router-link :to="{name:'JobsDetails',params:{id:job.id}}">
	<h2>{{job.title}}</h2>
  </router-link>
  </div>
  </div>
  <div v-else>Loading jobs...</div>
</template>

<script>
import * as axios from 'axios'

export default {
data(){
	return {
		jobs:[]
	}
},
mounted(){
	axios.get('http://localhost:3000/jobs')
	.then(data=>this.jobs = data.data)
	.catch(err=>console.log(err))
}
}
</script>

<style>
.job h2{
	background: #f4f4f4;
	padding: 20px;
	border-radius: 10px;
	margin: 10px auto;
	max-width: 600px;
	cursor: pointer;
	color: #444;
}
.job h2:hover{
	background: #ddd;
}
.job a{
	text-decoration: none;
}
</style>