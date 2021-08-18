<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Atualizar categoria</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="atualizar">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Titulo</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="categoria.titulo"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Descriçao</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="categoria.descricao"
                  />
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Atualizar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: atualizar-categoria,
  data() {
    return {
      categoria: {
        titulo: "",
        descricao: "",
        _method: "patch",
      }
    }
  },

  mounted() {
    this.mostrarCategoria();
  },

  methods: {
    async mostrarCategoria() {
      await this.axios
        .get(`/api/categoria/${this.$route.params.id}`)
        .then(response => {
          const { titulo, descricao } = response.data;
          this.categoria.titulo = titulo;
          this.categoria.descricao = descricao;
        })
        .catch(error => {
          console.log(error);
        })
    },
    async atualizar() {
      await this.axios
        .post(`/api/categoria/${this.$route.params.id}`, this.categoria)
        .then(response => {
          this.$router.push({ name: "categoriaLista" });
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>
<style lang="">
</style>