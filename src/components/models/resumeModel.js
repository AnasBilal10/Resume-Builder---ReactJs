import linkedin from "../../assets/icons/linkedin.svg";
const listOption = [
    []
]

const headerModel = {
    paragraph: `JavaScript/TypeScript developer with 3 years of experience
    working on scalable B2B and B2C monolithic and event-driven
    applications. I have experience in understanding client visual
    design intent. The main motive is to create and maintain better
    reusable code bases. Motivated to build software with leading
    technologies like JavaScript and TypeScript on a larger scale with
    the best performance experience.
    `,
    socialMedia: [
        {
            icon: linkedin,
            link: true,
            title: 'linkedin.com/anasbilal786'
        },
        {
            icon: '',
            link: false,
            title: ''
        },
        {
            icon: '',
            link: false,
            title: ''
        },
    ]
}

const bodyModel = {
    experienceList: [{
        titleName: 'Cinnova Technology',
        jobPosition: 'Software Engineer',
        startingDate: '23 June, 2023',
        endingDate: '10 Aug, 2023',
        address: 'Lahore, Pakistan',
        descriptionList: [
            `Mentored and coached 2 members in the development of
            Angular applications.`,
            `Spearheaded the Implemention of Angular architecture
            patterns and design principles, enhancing the scalability and
            maintainability of the applications`,
            `Resolved and Conducted code reviews to ensure adherence to
            established coding standards, optimize performance upto 50%.`,
        ]
    },{
        titleName: 'Rolustech',
        jobPosition: 'Software Engineer',
        startingDate: '1 June, 2021',
        endingDate: '5 June, 2023',
        address: 'Lahore, Pakistan',
        descriptionList: [
            `Developed and Maintained 5+ B2B and B2C web Call center
            portals to reduce the 90% manual effort for creating client
            complaint tickets by using Angular and Nodejs.
            `,
            `Organized telephony services in 2+ applications using event
            base programming to achieve the best grand stream calling
            experience without using any third-party calling SDK`,
            `Build a Node.js server to make a bridge from Front End to CRM
            with 90% best security services by using middleware functions.`,
            `Applied design patterns MVVM, MVC, and MV to make code 100% clean and concise
            `,
            ` Made 2+ libraries using Angular 14 to achieve reusability and to
            save manual effort
            `,
            ` Deployed 5+ apps using AWS Elastic bean, EC2, and S3 bucket.
            `
        ]
    }],
    educationList: [
        {
            degree: 'Bechlors in Computer Science',
            name: 'PUCIT',
            score: 'CGPA: 3.46',
            startingDate: '19 Nov, 2017',
            endingDate: '1 June, 2021',
            address: 'Lahore Pakistan'
            
        }
    ],
    projects: [{title:'Pucit Mini Olypics', descriptionList: [
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    ]}],
    skillsList: ['Programming Fundamental', 'Object Oriented Programming', 'Data Structures', 'Analysis of Algorithm'],
    certificationList: [
        {title:'Angular Basic Certificate', description:'Issued By HackerRank'},
        {title:'JavaScription Basic Certiicate', description:'Issued By HackerRank'},
    ],
}

export const ResumeModel = {
    bodyModel,
    headerModel
}