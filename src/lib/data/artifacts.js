
export const artifactCategory = {
    art: 'Art',
    audio: 'Audio',
    builds: 'Builds',
    dataInsights: 'Data Insights',
    gameDesign: 'Game Design',
};

export const artifactType = {
    artProductionGuide: 'Art Production Guide',
    artVisualStyleGuide: 'Art Visual Style Guide',
    audio: 'Audio Design',
    build: 'Build and Deployment Plan',
    observabilityPlan: 'Observability Plan',
    gameDesign: 'Game Design'
};

export const artifactComponent = {
    artProductionHigh: 'Art Production Guide High Level',
    visualStyleGuideHigh: 'Visual Style Guide High Level',
    audioConceptOnePage: 'Audio Concept One Pager',
    sourceControlDesignDocument: 'Source Control Design Document',
    buildDesignDocument: 'Build Design Document',
    deploymentDesignDocument: 'Deployment Design Document',
    analyticsPlatformIntegration: 'DI Analytics Platform Integration Plan',
    observabilityPlatformIntegrationPlan: 'Observability Platform Integration Plan',
    designOutlinePaper: 'Game Design High Level Outline 5 pager',
    gameDesignCore: 'Game Design Core '
};

export const deliveryStatus = {
    planning: 'Planning',
    todo: 'Todo',
    inProgress: 'In Progress',
    complete: 'Complete',
    removed: 'Removed'
};


export const DEFAULT_ARTIFACT = {
    category: artifactCategory.art,
    artifact: 'New Artifact',
    description: 'Enter a description',
    component: artifactComponent.artProductionHigh,
    originator: 'Unassigned',
    guide: [],
    template: [],
    status: deliveryStatus.planning,
    notes: '',
    due: ''
};