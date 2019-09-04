<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md12>
            <h2 align="center">Cadastro de Recurso</h2>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="nome" v-model="nome" label="Título"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-select
              :items="tiposRecurso"
              v-model="tipoRecursoSelecionado"
              v-on:change="loadObrasCidade"
              attach
              label="Selecione o tipo recurso"
            ></v-select>
          </v-flex>
          <v-flex xs12 md12>
            <v-textarea name="input-7-1" label="Descrição" auto-grow></v-textarea>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              class="white--text"
              @click="loader = 'loading3'"
            >
              Anexar Arquivo
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn @click="clear" color="blue-grey" class="white--text">Enviar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiposRecurso: [
        "Jogo",
        "Questionário",
        "Vídeo Aulas",
        "Livro",
        "Revista",
        "Link"
      ],
      obras: [],
      cidadeSelecionada: null,
      obraSelecionada: null
    };
  },
  mounted() {},
  methods: {
    loadObrasCidade() {
      let uri =
        "http://localhost:8080/api/v1/obras/obras/" + this.cidadeSelecionada;

      this.$http.get(uri).then(
        response => {
          this.obras = response.data;
          this.pagination.totalItems = this.obras.length;
          this.isLoading = false;
        },
        response => {
          console.log("Erro ao carregar obras", response);
          this.isLoading = false;
        }
      );
    }
  }
};
</script>

<style>
.custom {
  -webkit-box-shadow: 0px 5px 23px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 23px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 23px -4px rgba(0, 0, 0, 0.75);
  margin: 3em;
  margin-top: 5em;
  border-radius: 15px;
  /* background-color: #7d8c9e; */
  color: #ffffff !important;
  min-height: 30em;
}

.custom-txt {
  color: #ffffff !important;
}
</style>