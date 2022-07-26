import localforage from 'localforage';
import { v4 as uuid } from 'uuid';
import { accessRole, DEFAULT_USER } from './access';
import { artifactCategory, artifactType, artifactComponent, deliveryStatus } from "./artifacts";

export const artifacts = [
    { 
        category: artifactCategory.art,
        artifact: artifactType.artProductionGuide,
        description: 'Contains instructions and reference for the art team so they are able to build any game art assets from the guide',
        component: artifactComponent.artProductionHigh,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.todo,
        notes: '',
        due: '2022-10-11'
    },
    { 
        category: artifactCategory.art,
        artifact: artifactType.artVisualStyleGuide,
        description: 'Provides the detail for the game\'s aesthetic, using concept art, color palettes, proportions, asset detail and graphic design.',
        component: artifactComponent.visualStyleGuideHigh,
        originator: 'Chelan',
        guide: [],
        template: [],
        status: deliveryStatus.inProgress,
        notes: 'Lorem ipsum sit amet dolor...',
        due: '2022-11-02'
    },
    { 
        category: artifactCategory.art,
        artifact: artifactType.artProductionGuide,
        description: 'Contains instructions and reference for the art team so they are able to build any game art assets from the guide',
        component: artifactComponent.artProductionHigh,
        originator: 'Sadius',
        guide: ['guide 1', 'guide 2'],
        template: ['template 1'],
        status: deliveryStatus.planning,
        notes: '',
        due: '2022-11-02'
    },
    { 
        category: artifactCategory.audio,
        artifact: artifactType.audio,
        description: 'Retrieving data. Wait a few seconds and try to cut or copy again.',
        component: artifactComponent.audioConceptOnePage,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.todo,
        notes: '',
        due: '2022-11-02'
    },
    { 
        category: artifactCategory.builds,
        artifact: artifactType.build,
        description: 'Requirements and design for the source control, build and deployment needs for the game.',
        component: artifactComponent.sourceControlDesignDocument,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.planning,
        notes: '',
        due: '2022-10-02'
    },
    { 
        category: artifactCategory.builds,
        artifact: artifactType.build,
        description: 'Requirements and design for the source control, build and deployment needs for the game.',
        component: artifactComponent.buildDesignDocument,
        originator: 'Sadius',
        guide: [],
        template: [],
        status: deliveryStatus.removed,
        notes: '',
        due: '2022-10-11'
    },
    { 
        category: artifactCategory.builds,
        artifact: artifactType.build,
        description: 'Requirements and design for the source control, build and deployment needs for the game.',
        component: artifactComponent.deploymentDesignDocument,
        originator: 'Sadius',
        guide: [],
        template: [],
        status: deliveryStatus.planning,
        notes: '',
        due: '2022-10-02'
    },
    { 
        category: artifactCategory.dataInsights,
        artifact: artifactType.observabilityPlan,
        description: 'Requirements, design and plan for the analytics platform and Data Insights engagement model and how the game intends to leverage data.',
        component: artifactComponent.analyticsPlatformIntegration,
        originator: 'Chelan',
        guide: ['Guide 1'],
        template: [],
        status: deliveryStatus.inProgress,
        notes: '',
        due: '2022-09-22'
    },
    { 
        category: artifactCategory.gameDesign,
        artifact: artifactType.gameDesign,
        description: 'An overview of the design, systems and features together with the design process and approach, which drives the work breakdown for the project.',
        component: artifactComponent.gameDesignCore,
        originator: 'Dalinar',
        guide: [],
        template: [],
        status: deliveryStatus.planning,
        notes: '',
        due: '2022-09-12'
    },
    { 
        category: artifactCategory.art,
        artifact: artifactType.artVisualStyleGuide,
        description: 'Some art artifact...',
        component: artifactComponent.artProductionHigh,
        originator: 'Chelan',
        guide: ['A neat guide of some sort'],
        template: [],
        status: deliveryStatus.complete,
        notes: '',
        due: '2022-09-02'
    },
    { 
        category: artifactCategory.builds,
        artifact: artifactType.build,
        description: 'Some build artifact',
        component: artifactComponent.buildDesignDocument,
        originator: 'Dalinar',
        guide: ['Build Artifact Documentation!'],
        template: [],
        status: deliveryStatus.complete,
        notes: 'Lorem ipsum sit amet dolor...',
        due: '2022-07-01'
    },
    { 
        category: artifactCategory.builds,
        artifact: artifactType.build,
        description: 'Lorem ipsum...',
        component: artifactComponent.artProductionHigh,
        originator: 'Chelan',
        guide: ['Guide 1'],
        template: [],
        status: deliveryStatus.planning,
        notes: '',
        due: '2022-07-02'
    },
    { 
        category: artifactCategory.dataInsights,
        artifact: artifactType.gameDesign,
        description: 'iNSIGHTS! DATA! GAME DESIGN!',
        component: artifactComponent.artProductionHigh,
        originator: 'Dalinar',
        guide: [],
        template: [],
        status: deliveryStatus.complete,
        notes: '',
        due: '2022-08-14'
    },
    { 
        category: artifactCategory.gameDesign,
        artifact: artifactType.gameDesign,
        description: 'Game design?',
        component: artifactComponent.gameDesignCore,
        originator: 'Chelan',
        guide: [],
        template: ['Template 1'],
        status: deliveryStatus.removed,
        notes: '',
        due: '2022-07-14'
    },
    { 
        category: artifactCategory.dataInsights,
        artifact: artifactType.observabilityPlan,
        description: 'Contains instructions and reference data insights... ',
        component: artifactComponent.artProductionHigh,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.todo,
        notes: '',
        due: '2022-09-22'
    },
    { 
        category: artifactCategory.art,
        artifact: artifactType.artVisualStyleGuide,
        description: 'Ui style guide.',
        component: artifactComponent.artProductionHigh,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.todo,
        notes: '',
        due: '2022-06-28'
    },
    { 
        category: artifactCategory.builds,
        artifact: artifactType.build,
        description: 'Build pipeline',
        component: artifactComponent.designOutlinePaper,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.planning,
        notes: '',
        due: '2022-10-14'
    },
    { 
        category: artifactCategory.audio,
        artifact: artifactType.audio,
        description: 'A complete artifact',
        component: artifactComponent.artProductionHigh,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.complete,
        notes: '',
        due: '2022-09-14'
    },
    { 
        category: artifactCategory.dataInsights,
        artifact: artifactType.observabilityPlan,
        description: 'Insights into some data or something..',
        component: artifactComponent.artProductionHigh,
        originator: 'Kaladin',
        guide: [],
        template: [],
        status: deliveryStatus.planning,
        notes: 'A note or two I suppose',
        due: '2022-07-14'
    },
    { 
        category: artifactCategory.gameDesign,
        artifact: artifactType.gameDesign,
        description: 'Some design document, documenting the design.',
        component: artifactComponent.designOutlinePaper,
        originator: 'Karl',
        guide: [],
        template: [],
        status: deliveryStatus.planning,
        notes: '',
        due: '2022-10-16'
    },
    { 
        category: artifactCategory.audio,
        artifact: artifactType.audio,
        description: 'Steve\'s audio guide',
        component: artifactComponent.artProductionHigh,
        originator: 'Steeeeve',
        guide: [],
        template: [],
        status: deliveryStatus.todo,
        notes: '',
        due: '2022-07-14'
    },
];

const idMapper = (item) => ({
    ...item,
    id: uuid()
});

export const teamsMockData = [
    {
        id: 'yeti',
        name: 'Yeti',
        artifacts: artifacts.slice(0, 16).map(idMapper),
    },
    {
        id: 'boulder',
        name: 'Boulder',
        artifacts: artifacts.slice(10, 18).map(idMapper),
    },
    {
        id: 'tatanka',
        name: 'Tatanka',
        artifacts: artifacts.slice(7, 16).map(idMapper),
    },
    {
        id: 'turtles',
        name: 'Turtles',
        artifacts: artifacts.slice(2, 12).map(idMapper),
    }
];

export const usersMockData = [
    {
        id: '44eb52de-e6bd-4a86-9405-0e078607d216',
        name: 'Astrid the Admin',
        image: '/images/mossmoss.png',
        role: accessRole.admin,
        teams: [teamsMockData[0].id, teamsMockData[1].id, teamsMockData[2].id, teamsMockData[3].id]
    },
    {
        id: '60365c76-9d43-49ec-9fc1-d75f257eab0c',
        name: 'Felix the Team Member',
        image: '/images/mosscat.png',
        role: accessRole.teamMember,
        teams: [teamsMockData[0].id]
    },
    {
        id: '91fb5eba-ddb3-4685-b322-18f6c2b2034a',
        name: 'Terrance the Observer',
        image: '/images/mossdog.png',
        role: accessRole.observer,
        teams: [teamsMockData[1].id]
    }
];


export const initializeMockData = async () => {
    const artifacts = [].concat(...teamsMockData.map((team) => team.artifacts));
    const teams = teamsMockData.map(team => ({
        ...team,
        artifacts: team.artifacts.map(artifact => artifact.id)
    }));
    
    // Artifacts
    await Promise.all(artifacts.map((artifact) => localforage.setItem(artifact.id, artifact)));
    await Promise.all(teams.map(team => localforage.setItem(team.id, team)));
    
    // Teams
    await localforage.setItem('teams', { list: teams });
    
    // Users
    await Promise.all(usersMockData.map((user) => localforage.setItem(user.id, user)));
    await localforage.setItem('users', { list: usersMockData });
    await localforage.setItem('currentUser', DEFAULT_USER);
    
    
    await localforage.setItem('initialized', true);
};
