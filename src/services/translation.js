export const strings = {
    title: {
        ariaLabel: ['Star this project on GitHub', 'Dê uma estrela a este projeto no GitHub'],
        alt: ['Icon to GitHub repository', 'Ícone para o repositório no GitHub']
    },
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
    repositories: {
        repositoriesTab: ['Repositories', 'Repositórios'],
        starredTab: ['Starred', 'Com estrela']
    },
    noSearch: {
        msgPart1: [
            'Type a GitHub username on the search bar above and then click',
            'Digite um nome de usuário do GitHub na barra de pesquisa acima e em seguida clique em'
        ],
        msgPart2: ['or press', 'ou pressione']
    },
    invalidSearch: ['User not found. Try again.', 'Usuário não encontrado. Tente novamente.']
};

const translation = (key) => {
    const { language } = navigator;
    if (key) 
        return language === 'pt' || language === 'pt-BR' ? key[1] : key[0];
    return '';
};

export default translation;