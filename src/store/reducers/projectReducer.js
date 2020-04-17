const initState = {
    projects: [
        {id: '1', title:'MBDTF', author:'Ye', rating:'10',review:'fantastic'},
        {id: '2', title:'Yeezus', author:'Ye', rating:'9',review:'great'},
        {id: '3', title:'808s', author:'Ye', rating:'8',review:'good'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer