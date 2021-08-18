<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name: "categoriaNova"}' class="btn btn-primary">Novo</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Categoria</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Titulo</th>
                                    <th>Descrição</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody v-if="categorias.length > 0">
                                <tr v-for="(categoria, key) in categorias" :key="key">
                                    <td>{{ categoria.id}}</td>
                                    <td>{{ categoria.titulo}}</td>
                                    <td>{{ categoria.descricao}}</td>
                                    <td>
                                        <router-link :to='{name: "categoriaEditar", params:{id:categoria.id}}' class="btn btn-success">Editar</router-link>
                                        <button type="button" @click="excluirCategoria(categoria.id)" class="btn btn-danger">Excluir</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">Não foi encontrado categoria.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "categorias",
    data() {
        return {
            categorias: []
        }
    },

    mounted: {
        async getCategorias() {
            await this.axios.get('/api/categoria').then(response => {
                this.categorias = response.data
            }).catch(error=> {
                console.log(error)
                this.categorias = []
            })
        },

        excluirCategoria(id) {
            if (confirm("Tem certeza que deseja excluir esta categoria?")) {
                this.axios.delete(`/api/categoria/${id}`).then(response=> {
                    this.getCategorias()
                }).catch(error=> {
                    console.log(error)
                })
            }
        }
    }
}
</script>
<style lang="">
    
</style>