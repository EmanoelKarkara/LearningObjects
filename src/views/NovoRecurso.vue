<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md12>
            <h2 align="left">Sugerir um ODA</h2>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="titulo" v-model="recurso.titulo" label="Título do Objeto de Aprendizado"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="url" v-model="recurso.url" label="URL do Objeto de Aprendizado"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="descricao" v-model="recurso.descricao" label="Descrição"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="palavrasChave" v-model="recurso.palavrasChave" label="Palavras Chave"></v-text-field>
          </v-flex>
          
          <v-flex xs12 md12>
            <h2 align="left">Filtros</h2>
          </v-flex>          

          <v-flex xs12 md6>
            <v-select
              :items="disciplinas"
              v-model="recurso.disciplina"
              attach
              label="Disciplina"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="modalidades"
              v-model="recurso.modalidade"
              attach
              label="Etapas, anos e modalidades"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="tiposMidia"
              v-model="recurso.tipoMidia"
              attach
              label="Tipos de Mídias"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="conectividades"
              v-model="recurso.conectividade"
              attach
              label="Conectividade"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="licencasUso"
              v-model="recurso.licencaUso"
              attach
              label="Licenças de Uso"
            ></v-select>
          </v-flex>

          <v-flex xs12 md6>
            <v-select
              :items="acessibilidades"
              v-model="recurso.acessibilidade"
              attach
              label="Acessibilidade"
            ></v-select>
          </v-flex>

          <!--<v-flex xs12 md6>
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
          </v-flex>-->
          <v-flex xs12 md12>
            <v-btn @click="salvarRecurso" color="blue-grey" class="white--text">Concluir</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import { HttpClient } from "./utils/HttpClient";
export default {
  data() {
    return {
      recurso:{
        acessibilidade: null,
        conectividade: null,
        descricao: null,
        disciplina: null,
        licencaUso: null,
        modalidade: null,
        palavrasChave: null,
        tipoMidia: null,
        titulo: null,
        url: null,
      },
      disciplinas: [
        "Arquitetura de Computadores",
        "Ingês Técnico",
        "Introdução às Tecnologias da Informação",
        "Lógica de Programação",
        "Matemática Aplicada",
        "Sistemas Operacionais",
        "Automação Industrial",
        "Eletrônica",
        "Informática para Internet",
        "Jogos Digitais",
        "Redes de Computadores"
      ],
      modalidades: [
        "Básico",
        "Intermediário",
        "Avançado",
        "Integrador"
      ],
      tiposMidia: [
        "Vídeo",
        "jogo",
        "Animação",
        "Infográfico",
        "Aplicativo Móvel",
        "Mapa",
        "Aula Digital",
        "Software",
        "Experimento prático",
        "Sequência Didática",
        "Portal",
        "PDF",
        "Vídeo Aula",
        "Apresentação",
        "Atividade/Exercício",
        "Hipertexto",
        "Imagem",
        "Jornal Digital",
        "Mapa conceitual",
        "Mural",
        "Roteiro",
        "Simulação",
        "Tutorial"
      ],
      conectividades: [
        "Online",
        "Offline (download)"
      ],
      licencasUso: [
        "Material com acesso púlico parcial",
        "Livre para uso",
        "Livre para uso, compartilhamento e/ou modificação",
        "Creative commons",
        "Licença padrão youtube"
      ],
      acessibilidades: [
        "Não possue",
        "Dublagem",
        "Descrição de imagem",
        "Acesso para baixa visão",
        "Transcrição textual",
        "Legenda oculta",
        "Acessível para deficiência auditiva",
        "Audiodescrição",
        "Acessível para deficiência visual",
        "Janela de libras",
        "Acessível para deficiência intelectual",
        "Educação inclusiva"
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
    },
    salvarRecurso() {
      let uri = "/api/v1/recurso/recurso";
      HttpClient.POST(uri, this.recurso).then((resposta) => {
            console.log("salvou");
            //commit("setAluno", resposta.data);
            let snackbar = {
                show: true,
                text: `Aluno cadastrado com sucesso.`,
                color: 'success'
            }            
         }, resposta => {
           console.log("nao salvou");
            let snackbar = {
                show: true,
                text: `Erro ao tentar salvar aluno.`,
                color: 'error'
            }
            //dispatch('ativarEdicao')
            //dispatch('setSnackbar', snackbar)
            //dispatch('inativarVisibilidade')
        })
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