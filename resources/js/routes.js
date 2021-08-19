const BemVindo = () =>
    import ('./components/BemVindo.vue')
const CategoriaLista = () =>
    import ('./components/Categoria/Lista.vue')
const CategoriaNova = () =>
    import ('./components/Categoria/Add.vue')
const CategoriaEditar = () =>
    import ('./components/Categoria/Editar.vue')

export const routes = [{
        name: 'home',
        path: '/',
        component: BemVindo
    },
    {
        name: 'categoriaLista',
        path: '/categoria',
        component: CategoriaLista
    },
    {
        name: 'categoriaEditar',
        path: '/categoria/editar/:id',
        component: CategoriaEditar
    },
    {
        name: 'categoriaNova',
        path: '/categoria/nova',
        component: CategoriaNova
    }
]