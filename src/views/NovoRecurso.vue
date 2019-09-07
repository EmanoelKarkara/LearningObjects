<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md12>
            <h2 align="left">Sugerir um ODA</h2>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="nome" v-model="nome" label="Título do Objeto de Aprendizado"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="nome" v-model="nome" label="URL do Objeto de Aprendizado"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="nome" v-model="nome" label="Descrição"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="nome" v-model="nome" label="Palavras Chave"></v-text-field>
          </v-flex>
          
          <v-flex xs12 md12>
            <h2 align="left">Filtros</h2>
          </v-flex>          

          <v-flex xs12 md6>
            <v-select
              :items="tiposRecurso"
              v-model="tipoRecursoSelecionado"
              v-on:change="loadObrasCidade"
              attach
              label="Disciplina"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="tiposRecurso"
              v-model="tipoRecursoSelecionado"
              v-on:change="loadObrasCidade"
              attach
              label="Etapas, anos e modalidades"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="tiposRecurso"
              v-model="tipoRecursoSelecionado"
              v-on:change="loadObrasCidade"
              attach
              label="Tipos de Mídias"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="tiposRecurso"
              v-model="tipoRecursoSelecionado"
              v-on:change="loadObrasCidade"
              attach
              label="Conectividade"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="tiposRecurso"
              v-model="tipoRecursoSelecionado"
              v-on:change="loadObrasCidade"
              attach
              label="Licenças de Uso"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="tiposRecurso"
              v-model="tipoRecursoSelecionado"
              v-on:change="loadObrasCidade"
              attach
              label="Acessibilidade"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              v-model="variant"
              :items="tiposRecurso"
              filled
              chips
              deletable-chips
              label="Variants"
              multiple
              small-chips
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              class="white--text"
              @click="loader = 'loading3'"
            >
              Anexar uma Imagem
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn @click="clear" color="blue-grey" class="white--text">Concluir</v-btn>
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