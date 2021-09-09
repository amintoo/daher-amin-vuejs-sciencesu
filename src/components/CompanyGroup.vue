<template>
 
 <div class="row">

    <div class="col">

      <div class="card mt-4">
        <div class="card-body">
          <h3 class="card-title">Nos équipes ! </h3>
          <div class="card" >
            <ul v-for='(recipientsGroup,idx) in localRG' :key='recipientsGroup.id' class="list-group list-group-flush text-center">

              <li class="list-group-item" > {{recipientsGroup.title + ' (' + idx }} ) >
                <button @click='openTeamDetails(recipientsGroup.id)' type="button" class="btn btn-secondary btn-sm">voir</button>

              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {recipientsGroup} from "@/assets/js/recipientsGroup";

console.log(recipientsGroup);

export default {
  name: "CompanyGroup",
  data: () => ({
    localRG: recipientsGroup,
  }),

  methods:{
    openTeamDetails(teamId){
      this.$router.push({
        name:'CompanyOneteam',
        params:{teamId:teamId}
      });
    }
  }
};
</script>
