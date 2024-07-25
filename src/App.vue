<template>
  <div id="app">
    <h1>Hyrule jobs</h1>

    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('location')">order by location</button>
        <button @click="handleClick('salary')">order by salary</button>
      </div>
    </header>

    <!-- <p>{{ jobs[0].location }}</p> -->

    <JobList :jobs="jobs" :order="order"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue';
import Job from '@/types/Job'
import OrderTerm from '@/types/OrderTerm'

export default defineComponent({
  name: 'App',
  components:{
    JobList
  },
  setup() {
    const jobs = ref <Job[]>([
      {title: 'react js',
        location: 'lahore',
        salary: 3000,
        id: '1'
      },
      {title: 'figma',
        location: 'uk',
        salary: 8900,
        id: '2'
      },
      {title: 'AWS',
        location: 'islamabad',
        salary: 20000,
        id: '3'
      },
      {title: 'vue js',
        location: 'lahore',
        salary: 3200,
        id: '4'
      },
      {title: 'mern',
        location: 'karachi',
        salary: 4000,
        id: '5'
      },
    ])
    const order = ref<OrderTerm>('title')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return {jobs, handleClick, order}

  },
});
</script>

<style lang="sass" scoped>
h1 
  text-align: center
  margin: 50px
header 
    text-align: center
    .order 
      margin-top: 20px
  
button 
    margin: 0 10px
    color: purple
    border: 3px solid purple
    background: plum
    padding: 8px 16px
    border-radius: 20px
    cursor: pointer
    font-weight: bold
  
</style>
