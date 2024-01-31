import { Person } from "../model/PersonModel.js"


let listPerson = [
    {
        name: "Kimberly Bryant",
        biography: "Kimberly Bryant é uma renomada empreendedora e ativista social norte-americana. Ela é amplamente reconhecida como fundadora da organização sem fins lucrativos Black Girls Code. Bryant, após notar a disparidade de representação de mulheres negras na indústria de tecnologia",
        important:  "criação do Black Girls Code em 2011"
    },
    {
        name: "Kwame Yamgnane",
        biography: "ele é um programador e empreendedor nascido em Togo, África Ocidental. Ele é conhecido por ser um dos co-fundadores da startup francesa Coding Academy, uma escola de programação que visa democratizar o acesso à educação em tecnologia.",
        important:  "ele é um defensor apaixonado da diversidade na tecnologia e tem trabalhado ativamente para aumentar a representação de minorias na indústria de TI, ajudando a abrir portas para pessoas de origens sub-representadas."
    },
    {
        name: "Marques Brownlee ",
        biography: "ele é conhecido como MKBHD, é um criador de conteúdo, empresário e crítico de tecnologia. Ele ganhou fama por suas análises detalhadas de produtos de tecnologia no YouTube, onde tem milhões de seguidores.",
        important:  "Enquanto Marques Brownlee não é necessariamente um programador no sentido tradicional, ele desempenha um papel importante na comunidade de tecnologia, influenciando tendências e ajudando a educar milhões sobre inovações tecnológicas."
    },
    {
        name: "Tristan Walker",
        biography: "um empresário e investidor americano. Ele é fundador e CEO da Walker & Company Brands, uma empresa de produtos de cuidados pessoais que visa atender às necessidades de consumidores negros e outros grupos sub-representados.",
        important:  "Embora não seja especificamente um programador, Tristan Walker é um exemplo de sucesso na indústria de tecnologia como um empreendedor visionário. Sua empresa, Walker & Company Brands, é conhecida por seu compromisso com a diversidade e inclusão, tanto em sua equipe quanto em seus produtos."
    },
    {
        name: "Dr. Jamika Burge",
        biography: "ela é uma cientista de computação, pesquisadora e líder em diversidade e inclusão na indústria de tecnologia. Ela é co-fundadora da Black ComputeHER, uma organização que promove a visibilidade, a comunidade e o avanço de mulheres negras na computação.",
        important:  "tem sido uma voz proeminente na promoção da diversidade e inclusão na ciência da computação. Seu trabalho com a Black ComputeHER e em várias iniciativas de diversidade tem sido fundamental para aumentar a representação de mulheres negras na indústria de tecnologia",
    },
]


function list() {
    return listPerson
}

export { list }