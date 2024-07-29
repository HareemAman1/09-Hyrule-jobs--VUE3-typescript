<template>
  <div id="app">
    <h1>Hyrule jobs</h1>

    <div class="add-job">
      <h2>Add a New Job</h2>
      <form @submit.prevent="addJob">
        <div>
          <label for="title">Title:</label>
          <input v-model="newJob.title" type="text" id="title" required />
        </div>
        <div>
          <label for="location">Location:</label>
          <input v-model="newJob.location" type="text" id="location" required />
        </div>
        <div>
          <label for="salary">Salary:</label>
          <input v-model.number="newJob.salary" type="number" id="salary" required />
        </div>
        <button type="submit">Add Job</button>
      </form>
    </div>
  </div>

    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('location')">order by location</button>
        <button @click="handleClick('salary')">order by salary</button>
      </div>
    </header>

    <JobList :jobs="jobs" :order="order"/>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue';
import Job from '@/types/Job';
import OrderTerm from '@/types/OrderTerm';

export default defineComponent({
  name: 'App',
  components: {
    JobList,
  },
  setup() {
    const jobs = ref<Job[]>([
      { title: 'react js', location: 'lahore', salary: 3000, id: '1' },
      { title: 'figma', location: 'uk', salary: 8900, id: '2' },
      { title: 'AWS', location: 'islamabad', salary: 20000, id: '3' },
      { title: 'vue js', location: 'lahore', salary: 3200, id: '4' },
      { title: 'mern', location: 'karachi', salary: 4000, id: '5' },
      { title: 'Node js', location: 'uae', salary: 29000, id: '6' },
    ]);
    const order = ref<OrderTerm>('title');

    const newJob = ref<Job>({
      title: '',
      location: '',
      salary: 1000,
      id: '',
    });

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    const addJob = () => {
      newJob.value.id = Date.now().toString(); // Generate a unique ID based on timestamp
      jobs.value.push({ ...newJob.value });
      newJob.value = { title: '', location: '', salary: 0, id: '' }; // Reset the form
    };

    return { jobs, handleClick, order, newJob, addJob };
  },
});
</script>

<style lang="sass" scoped>

</style>
