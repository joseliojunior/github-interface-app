export const strings = {
    header: {
        inputPlaceholder: ['e. g.: github', 'ex: github'],
        btnTitle: ['Search', 'Buscar'],

        labels: {
            username: ['Username', 'Nome de usuário'],
            company: ['Company', 'Companhia'],
            location: ['Location', 'Localização'],
            followers: ['Followers', 'Seguidores'],
            following: ['Following', 'Seguindo'],
            repositories: ['Repositories', 'Repositórios'],
        }
    },
    noSearch: {
        msgPart1: [
            `Type a Github username on the search bar above and then click`,
            `Digite um nome de usuário do Github na barra de pesquisa acima e em seguida clique em`
        ],
        msgPart2: [`or press`, `ou pressione`]
    }
};

const translation = (key) => {
    const { language } = navigator;
    if (key) 
        return language === 'pt' || language === 'pt-BR' ? key[1] : key[0];
    return '';
};

export default translation;