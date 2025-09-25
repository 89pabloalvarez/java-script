export const tbl_form_createuser = {
    fields: [
        { label: 'Nombre *', name: 'nombre', validate: 'onlyLetters' },
        { label: 'Apellido *', name: 'apellido', validate: 'onlyLetters' },
        { label: 'Email *', name: 'email' },
        { label: 'Usuario', name: 'usuario', validate: 'validateUserInput' },
        { label: 'Rol *', name: 'rol' }
    ],
  roles_list: ['Administrador', 'Editor', 'Visualizador']
}