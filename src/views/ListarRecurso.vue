<template>
  <div>
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
        <!--<v-flex md8>
          <v-select attach :items="cidades" label="Selecione a cidade"></v-select>
        </v-flex>-->
        <v-flex md12>
          <material-card color="blue" title="Listagem">
            <v-data-table
              :headers="headers"
              :items="alunos"
              item-key="nome"
              hide-actions
              :pagination.sync="pagination"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td
                  class="text-xs-left"
                >{{ props.item.titulo }}</td>
                <td>{{ props.item.tipo }}</td>
                <td>{{ props.item.descricao }}</td>
              </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
              <v-pagination color="blue" v-model="pagination.page" :length="pages"></v-pagination>
            </div>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagination: {},
      selected: [],
      items: [],
      headers: [
        {
          text: "Título",
          align: "left",
          sortable: true,
          value: "titulo"
        },
        { text: "Tipo", value: "tipo" },
        { text: "Descrição", value: "descricao" }
      ],
    };
  },
  
  mounted() {
    this.loadRecursos();
  },

  methods: {
    abrirModalInfoAluno(aluno) {
      console.log("Entrei aqui com...", aluno);
      this.alunoEscolhido = aluno;
      this.modalInfoAluno = true;
    },

    loadRecursos () {
      let uri = "http://localhost:8080/api/v1/recurso/recursos";
      this.$http.get(uri).then(
        response => {
          this.items = response.data;
          this.pagination.totalItems = this.items.length;
          this.isLoading = false;
        },
        response => {
          console.log("Erro ao carregar obras", response);
          this.isLoading = false;
        }
      );
      },
  }
};
</script>

<style>
.btn {
  margin: 1em;
}

.v-flex{
    font-size: 10px !important;
}
</style>