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
    <b-table class="app-table-wrapper"
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
        <button class="app-btn app-btn--primary app-btn-employee" @click="modalShow = !modalShow">
          {{ row.value.first }} {{ row.value.last }}
        </button>
        <b-modal v-model="modalShow">
          <div>
            <p class="app-table-skills">
              <span>HTML</span><meter value="90" max="100" low="0"></meter>
            </p>
            <p class="app-table-skills">
              <span>CSS</span><meter value="95" max="100" low="0"></meter>
            </p>
            <p class="app-table-skills">
              <span>JavaScipt</span><meter value="70" max="100" low="0"></meter>
            </p>
            <p class="app-table-skills">
              <span>Vue JS</span><meter value="80" max="100" low="0"></meter>
            </p>
            <p class="app-table-skills">
              <span>SQL</span><meter value="78" max="100" low="0"></meter>
            </p>
            <p class="app-table-skills">
              <span>C/C++</span><meter value="60" max="100" low="0"></meter>
            </p>
            <p class="app-table-skills">
              <span>Node JS</span><meter value="40" max="100" low="0"></meter>
            </p>
          </div>
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
            dateBirth: '08.24.1997', name: { first: 'Dickerson', last: 'Macdonald' }, position: 'Middle .NET',
            phone: '+38(093)8467812'
          },
          { 
            dateBirth: '01.06.1987', name: { first: 'Larsen', last: 'Shaw' }, position: 'Junior Frontend',
            phone: '+38(098)7190123'
          },
          { 
            dateBirth: '09.27.1973', name: { first: 'Geneva', last: 'Wilson' }, position: 'Middle Java',
            phone: '+38(077)8767011'
          },
          { 
            dateBirth: '02.12.1988', name: { first: 'Jami', last: 'Carney' }, position: 'Middle Android',
            phone: '+38(066)9012345'
          },
          { 
            dateBirth: '06.09.1993', name: { first: 'Essie', last: 'Dunlap' }, position: 'Junior C++/Qt',
            phone: '+38(066)8461812'
          },
          { 
            dateBirth: '04.06.1969', name: { first: 'Thor', last: 'Macdonald' }, position: 'Team Lead C/C++ (Android/Linux)',
            phone: '+38(067)9016745'
          },
          { 
            dateBirth: '02.12.1999', name: { first: 'Mitzi', last: 'Navarro' }, position: 'Trainee C#',
            phone: '+38(093)8901812'
          },
          { 
            dateBirth: '10.03.1996', name: { first: 'Genevieve', last: 'Wilson' }, position: 'Trainee React Developer',
            phone: '+38(044)1234412'
          },
          { 
            dateBirth: '12.08.1980', name: { first: 'John', last: 'Carney' }, position: 'Middle Frontend',
            phone: '+38(093)8461252'
          },
          { 
            dateBirth: '10.10.1979', name: { first: 'Dick', last: 'Dunlap' }, position: 'Middle Frontend',
            phone: '+38(093)6577812'
          },
          {
            dateBirth: '05.08.1990', name: { first: 'Brad', last: 'Pitt' }, position: 'Senior Frontend',
            phone: '+38(050)7788342'
          },
          {
            dateBirth: '07.12.1984', name: { first: 'Michaella', last: 'Praston'}, position: 'Trainee Java',
            phone: '+38(093)1000349'
          },
          { 
            dateBirth: '03.09.1988', name: { first: 'Pamella', last: 'Stockwort' }, position: 'Senior Ruby',
            phone: '+38(066)8417812'
          },
          {
            dateBirth: '01.11.1997', name: { first: 'Brandon', last: 'Bower' }, position: 'Middle Ruby',
            phone: '+38(095)0912345'
          },
          {
            dateBirth: '06.02.1993', name: { first: 'Ahata', last: 'Brown'}, position: 'Senior Java',
            phone: '+38(068)9123761'
          },
          {
            dateBirth: '09.07.1984', name: { first: 'Ahata', last: 'Gunt'}, position: 'Team Lead .Net',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '05.06.1983', name: { first: 'Sergey', last: 'Porik'}, position: 'Team Lead NodeJS',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '03.10.1997', name: { first: 'Alisa', last: 'Valevko'}, position: 'Junior C/C++',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '10.14.1996', name: { first: 'Abraham', last: 'Gerz'}, position: 'Junior C#',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '10.05.1994', name: { first: 'Dmitry', last: 'Kiselev'}, position: 'Middle IOS',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '10.29.1989', name: { first: 'Daniel', last: 'Fedorenko'}, position: 'Senior Java',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '01.10.1998', name: { first: 'Alex', last: 'Gunt'}, position: 'Trainee Frontend',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '12.03.1986', name: { first: 'Derek', last: 'Born'}, position: 'Team Lead C/C++ Linux',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '10.10.1995', name: { first: 'Brandon', last: 'Stark'}, position: 'Middle Frontend',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '05.30.1989', name: { first: 'Sara', last: 'Miller'}, position: 'Senior .Net',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '07.01.1992', name: { first: 'Gregor', last: 'Kligan'}, position: 'Senior Frontend',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '06.22.1987', name: { first: 'Sandor', last: 'Jeferson'}, position: 'Team Lead .Net',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '09.11.1997', name: { first: 'Meverik', last: 'Klark'}, position: 'Trainee .Net',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '05.13.1983', name: { first: 'Jhon', last: 'Portyg'}, position: 'Team Lead Android',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '12.18.1989', name: { first: 'Antony', last: 'Strek'}, position: 'Team Lead Android',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '05.22.1993', name: { first: 'Sergey', last: 'Funtov'}, position: 'Senior C#',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '03.24.1992', name: { first: 'Ahata', last: 'Sammers'}, position: 'Senior .Net',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '07.12.1989', name: { first: 'Fill', last: 'Vertigo'}, position: 'Team Lead Frontend',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '06.02.1989', name: { first: 'Fiona', last: 'Grunt'}, position: 'Team Lead Java',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '07.20.1993', name: { first: 'Teon', last: 'Stroke'}, position: 'Middle NodeJs',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '11.06.1985', name: { first: 'Maria', last: 'Abramova'}, position: 'Team Lead VueJs Developer',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '12.19.1988', name: { first: 'Ahata', last: 'Gunt'}, position: 'Team Lead',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '09.02.1996', name: { first: 'Bob', last: 'Vest'}, position: 'Middle .Net',
            phone: '+38(068)9123768'
          },
          {
            dateBirth: '02.23.1998', name: { first: 'Yanka', last: 'Gunt'}, position: 'Trainee Angular 2+ Developer',
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
        perPage: 15,
        pageOptions: [15, 30],
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
  .app-table-skills {
    display: flex;
    justify-content: space-between;
  }
</style>
