<template>
  <section class="page-section">
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Récipients du Groupe</h1>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">firstName</th>
                <th scope="col">email</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(recipients, idx) in localRG" :key="recipients.id">
                <th scope="row">{{ idx }}</th>
                <td>{{ recipients.firstName }}</td>
                <td>{{ recipients.email }}</td>
               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { recipients } from "@/assets/js/recipientsGroup";
console.log(recipients);
export default {
  name: "CompanyGroup",
  data: () => ({
    localRG: recipientsGroup,
  }),



};
</script>
