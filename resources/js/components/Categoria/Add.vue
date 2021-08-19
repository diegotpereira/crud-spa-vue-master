<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Nova categoria</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="nova">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Titulo</label>
                                    <input type="text" class="form-control" v-model="categoria.titulo">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Descriçao</label>
                                    <input type="text" class="form-control" v-model="categoria.descricao">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">
                                    Salvar
                                </button>
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
    name: "nova-categoria",
    data() {
        return {
            categoria: {}
        }
    },

    methods: {
        async nova() {
            await this.axios.post('/api/categoria', this.categoria).then(response=> {
                this.$router.push({name: "categoriaLista"})
            }).catch(error=> {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="">
    
</style>