<template>
    <div>
      <div style="display: flex;margin: 10px;">
      <div style="width: 50%;margin: 10px;">
        <span style="margin: 10px;">
          <label for="cars">Country Dropdown:</label>
          <select name="cars" id="cars" @change="getState(selectedCountry)" v-model="selectedCountry">
            <option v-for="(country, i) in country.data" :key="i" :value="country.name">{{ country.name }}</option>
          </select>
        </span>
        <br />
        <span style="margin: 10px;">
          <label for="cars">Name Input:</label>
          <input type="text" v-model="countryName" label="Name" />
        </span>
        </div>
      <div style="width: 50%;margin: 10px;">
        <p><b>Country Information By:</b> {{ countryName }}</p>
        <p><b>ISO Code:</b> {{ selectedCountryCode }}</p>
        <p><b>Currency:</b> {{ selectedCurrencyCode }}</p>
      </div>
    </div>
      <div> 
        <label for="cars">State Name Search:</label>
        <input type="text" v-model="stateName" @change="getState(stateName)" label="State Name Search" />
        <br />
        <br/>
        <table v-if="states.length !== 0">
          <tr>
            <th>SL.No</th>
            <th>State Name</th>
            <th>Code</th>
          </tr>
          <tr v-for="(state, i) in states" :key="i">
            <td>{{ i+1 }}</td>
            <td>{{ state.name }}</td>
            <td>{{ state.state_code }}</td>
          </tr>
        </table>
        <div v-else>No data</div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    country: [],
    name: '',
    states: '',
    selectedCountry: '',
    columns: {},
    selectedCountryCode: '',
    selectedCurrencyCode: '',
    countryName: '',
    stateName: ''
  }),
  compatConfig: { MODE: 2 },
  created() {
    console.log('Helloworld');
    this.getCountryList()
  },
  methods: {
    getCountryList() {
      this.axios.get('https://countriesnow.space/api/v0.1/countries/states').then((response) => {
        this.country = response.data;
      })
    },
    getState(country) {
      for (let i = 0; i <= this.country.data.length - 1; i++) {
        if (country === this.country.data[i].name) {
          this.selectedCountryCode = this.country.data[i].iso3;
          this.selectedCurrencyCode = this.country.data[i].iso2;
          this.states = this.country.data[i].states;
          this.countryName = this.country.data[i].name;
        }
      }
    }
  }
};
</script>

<style>
select, input {
  border: 1px solid;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
