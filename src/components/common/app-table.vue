<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      hover
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      @filtered="onFiltered"
      
    >
      <template slot="name" slot-scope="row" >
        <button class="app-btn app-btn--primary" @click="modalShow = !modalShow">
          {{ row.value.first }} {{ row.value.last }}
        </button>
        <b-modal v-model="modalShow">
          <p>Skills</p>
        </b-modal>
      </template>

      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Info modal -->
  </b-container>
</template>

<script>
import { parse } from 'querystring';

  export default {
    name: "app-table",
    data() {
      return {
        modalShow: false,
        items: [
          { 
            dateBirth: '15.10.1997', name: { first: 'Dickerson', last: 'Macdonald' }, position: 'Middle',
            phone: '+38(093)8467812', id: 'nameId'
          },
          { 
            dateBirth: '01.06.1987', name: { first: 'Larsen', last: 'Shaw' }, position: 'Junior',
            phone: '+38(098)7190123'
          },
          { 
            dateBirth: '09.04.1973', name: { first: 'Geneva', last: 'Wilson' }, position: 'Middle',
            phone: '+38(077)8767011'
          },
          { 
            dateBirth: '26.12.1988', name: { first: 'Jami', last: 'Carney' }, position: 'Middle',
            phone: '+38(066)9012345'
          },
          { 
            dateBirth: '19.09.1993', name: { first: 'Essie', last: 'Dunlap' }, position: 'Junior',
            phone: '+38(066)8461812'
          },
          { 
            dateBirth: '30.06.1969', name: { first: 'Thor', last: 'Macdonald' }, position: 'Team Lead',
            phone: '+38(067)9016745'
          },
          { 
            dateBirth: '13.12.1999', name: { first: 'Mitzi', last: 'Navarro' }, position: 'Trainee',
            phone: '+38(093)8901812'
          },
          { 
            dateBirth: '10.03.1996', name: { first: 'Genevieve', last: 'Wilson' }, position: 'Trainee',
            phone: '+38(044)1234412'
          },
          { 
            dateBirth: '24.08.1980', name: { first: 'John', last: 'Carney' }, position: 'Middle',
            phone: '+38(093)8461252'
          },
          { 
            dateBirth: '10.10.1979', name: { first: 'Dick', last: 'Dunlap' }, position: 'Middle',
            phone: '+38(093)6577812'
          },
          {
            dateBirth: '05.08.1990', name: { first: 'Brad', last: 'Pitt' }, position: 'Senior',
            phone: '+38(050)7788342'
          },
          {
            dateBirth: '07.12.1984', name: { first: 'Michaella', last: 'Praston'}, position: 'Trainee',
            phone: '+38(093)1000349'
          },
          { 
            dateBirth: '28.09.1988', name: { first: 'Pamella', last: 'Stockwort' }, position: 'Senior',
            phone: '+38(066)8417812'
          },
          {
            dateBirth: '01.11.1997', name: { first: 'Brandon', last: 'Bower' }, position: 'Middle',
            phone: '+38(095)0912345'
          },
          {
            dateBirth: '27.02.1993', name: { first: 'Ahata', last: 'Gunt'}, position: 'Team Lead',
            phone: '+38(068)9123768'
          }
        ],
        fields: [
          { 
            key: 'name', label: 'Person Full name', sortable: true, sortDirection: 'desc' 
          },
          { 
            key: 'dateBirth', label: 'Date of birth', sortable: true, class: 'text-center' 
          },
          {
            key: 'position', label: 'Position', sortable: true
          },
          {
            key: 'phone', label: 'Phone number', sortable: false
          }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 7,
        pageOptions: [7, 14],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modalInfo: { title: '', content: '' }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>

<style scoped>

</style>
