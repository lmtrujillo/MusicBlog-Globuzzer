const initState = {
    projects: [
        {id: '1', title:'MBDTF', author:'Ye', rating:'10',review:'fantastic'},
        {id: '2', title:'Yeezus', author:'Ye', rating:'9',review:'great'},
        {id: '3', title:'808s', author:'Ye', rating:'8',review:'good'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer