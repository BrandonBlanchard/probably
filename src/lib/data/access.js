
export const accessRole = {
    noAccess: 0,
    observer: 1,
    teamMember: 2,
    admin: 3
};

export const DEFAULT_USER = {
    name: 'none',
    access: accessRole.noAcces,
    picture: '',
    teams: [],
};