const BASE_URL = 'http://lilyweb-agency-2021/wp-json/wp/v2';

export async function getPage(id) {
    const pageRes = await fetch(BASE_URL + `/pages/${id}`);
    const page = await pageRes.json();
    return page;
}

export async function getServices() {
    const servicesRes = await fetch(BASE_URL + '/services?_embed');
    const services = await servicesRes.json();
    return services;
}

export async function getlastProject() {
    const lastProjectRes = await fetch(BASE_URL + '/last-project?_embed');
    const pastProject = await lastProjectRes.json();
    return pastProject;
}

export async function getBrands() {
    const brandsRes = await fetch(BASE_URL + '/brands?_embed');
    const brands = await brandsRes.json();
    return brands;
}

export async function getAchievements() {
    const achievementsRes = await fetch(BASE_URL + '/achievements?_embed');
    const achievements = await achievementsRes.json();
    return achievements;
}

export async function getTeam() {
    const teamRes = await fetch(BASE_URL + '/team?_embed');
    const team = await teamRes.json();
    return team;
}
