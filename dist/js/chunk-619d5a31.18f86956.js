(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-619d5a31"],{"0c5b":function(t,a,e){"use strict";var i=e("481a"),n=e.n(i);n.a},"481a":function(t,a,e){},cbf3:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[e("v-layout",{attrs:{"justify-center":"",wrap:""}},[e("v-flex",{attrs:{md12:""}},[e("material-card",{attrs:{color:"blue"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.recursos,loading:!0,"item-key":"nome","hide-actions":"",pagination:t.pagination},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"items",fn:function(a){return[e("v-flex",{attrs:{xs12:"",md6:""}},[e("v-app",{attrs:{id:"inspire"}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e("v-list-item",[e("v-list-item-avatar",{attrs:{color:"grey"}}),e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline"},[t._v(t._s(a.item.titulo))])],1)],1),e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/mountain.jpg",height:"194"}}),e("v-card-text",[t._v("\n                "+t._s(a.item.descricao)+"\n              ")]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"deep-purple accent-4"}},[t._v("\n                  Acessar Recurso\n                ")]),e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-heart")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)],1)]}}])}),e("div",{staticClass:"text-xs-center pt-2"},[e("v-pagination",{attrs:{length:t.pages,color:"#000000"},model:{value:t.pagination.page,callback:function(a){t.$set(t.pagination,"page",a)},expression:"pagination.page"}})],1)],1)],1)],1)],1)],1)},n=[],s={data:function(){return{pagination:{},selected:[],items:[],recursos:[],headers:[{text:"Título",align:"left",sortable:!0,value:"titulo"},{text:"Tipo",value:"tipo"},{text:"Descrição",value:"descricao"},{text:"Link",value:"endereco"}]}},mounted:function(){this.loadRecursos()},computed:{pages:function(){return null==this.pagination.totalItems?0:(this.pagination.rowsPerPage=5,Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage))}},methods:{abrirModalInfoAluno:function(t){console.log("Entrei aqui com...",t),this.alunoEscolhido=t,this.modalInfoAluno=!0},loadRecursos:function(){var t=this,a="http://localhost:8080/api/v1/recurso/recursos";this.$http.get(a).then(function(a){t.recursos=a.data,console.log(t.recursos),t.pagination.totalItems=t.recursos.length,t.isLoading=!1},function(a){console.log("Erro ao carregar recursos",a),t.isLoading=!1})}}},o=s,r=(e("0c5b"),e("2877")),c=Object(r["a"])(o,i,n,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-619d5a31.18f86956.js.map