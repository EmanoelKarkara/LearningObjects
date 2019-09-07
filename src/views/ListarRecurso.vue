<template>
  <div>
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
            <v-flex v-for="item in recursos">
              <v-flex xs12 md12>
              <div id="app">
                <v-app id="inspire">
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12 ml-0"
                    max-width="400"
                    max-height="900"
                  >
                    <v-img
                      height="200"
                      width="300"
                      class="mx-auto my-12"
                      src="http://escoladigital-prod.s3.amazonaws.com/escoladigital/uploads/oda/picture/5949527869702d637dad1200/imagem_quebra_cabeca.png"
                    ></v-img>
                
                    <v-card-title class="my-0" align="center">{{item.titulo}}</v-card-title>
                    <v-card-text>
                      <v-row class="my-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          half-increments
                          dense
                          size="20"
                          readonly
                        ></v-rating>               
                        <div class="grey--text ml-0">4.5 (413)</div>
                      </v-row>
                
                      <div class="my-1 subtitle-1 black--text">
                        Descrição:
                      </div>
                
                      <div>{{item.descricao}}</div>
                    </v-card-text>
                
                    <!--<v-divider class="mx-4"></v-divider>-->
                
                    <v-card-text>
                      <div class="title text--primary">Palavras-chave:</div>
                      <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                      >
                        <v-chip>Jogo</v-chip>
                        <v-chip>Memória</v-chip>
                        <v-chip>Educativo</v-chip>
                        <v-chip>Lúdico</v-chip>
                      </v-chip-group>
                    </v-card-text>
                
                    <v-card-actions>
                      <v-btn
                        color="green"
                        text
                        @click="acessarRecurso(item.endereco)"
                      >
                        Acessar Recurso
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-app>
              </div>
              </v-flex>
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
      recursos: [],
      headers: [
        {
          text: "Título",
          align: "left",
          sortable: true,
          value: "titulo"
        },
        { text: "Tipo", value: "tipo" },
        { text: "Descrição", value: "descricao" },
        { text: "Link", value: "endereco" }
      ],
    };
  },
  
  mounted() {
    this.loadRecursos();
  },

  computed: {
    pages() {
      if (this.pagination.totalItems == null) return 0;
      this.pagination.rowsPerPage = 5;
      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
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
          this.recursos = response.data;
          console.log(this.recursos);
          this.pagination.totalItems = this.recursos.length;
          this.isLoading = false;
        },
        response => {
          console.log("Erro ao carregar recursos", response);
          this.isLoading = false;
        }
      );
      },

    acessarRecurso(endereco){
      window.open(endereco);
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