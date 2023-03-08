<template>
  <div class="member">
    <div class="inner">
      <h1>가맹점안내</h1>
      <div class="search_bar">
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          outlined
          dense
          hide-details
          placeholder="검색어를 입력해주세요"
          append-icon="mdi-magnify"
          single-line
        ></v-text-field>
      </div>
      <v-data-table
        :headers="headers"
        :items="members"
        item-key="name"
        :search="search"
        :custom-filter="filterOnlyCapsText"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        @page-count="pageCount = $event"
        hide-default-footer
      >
      </v-data-table>
      <div class="pagination">
        <v-pagination
          color="#000"
          v-model="page"
          :length="pageCount"
        ></v-pagination>
    </div>
    </div>
  </div>
</template>

<script>
import memberList from '@/assets/docs/pgMemberList.json'

export default {
  data(){
    return{
      page: 1,
      pageCount: 0,
      itemsPerPage:15,
      search:'',
      headers:[
        {text:'매장명',value:'name'},
        {text:'사업자등록번호',value:'number'},
        {text:'주소지',value:'address'},
        {text:'점주명',value:'owner'},
        {text:'연락처',value:'phone'}
      ],
      members: memberList,
    }
  },
  computed:{
    
  },
  mounted(){

  },
  methods:{
    filterOnlyCapsText (value, search) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
  }
}
</script>

<style lang="scss" scoped src="./member.scss"></style>
